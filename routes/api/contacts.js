const router = require('express').Router();
const Contact = require('../../models/contacts');

//****************//
// Contacts Logic //
//****************//

// Get contact
router.get('/', (req, res, next)=>{
	Contact.find(function(err,contacts){
		res.json(contacts);
	})
});


// Add/post contact
router.post('/',(req, res, next)=>{
	let newContact = new Contact({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		phone_number: req.body.phone_number
	});


	newContact.save((err, contact)=>{
		if (err) {
			res.json({msg: ' Failed to add Contact'});
		} else {
			res.json({msg: ' Contact has been added Succesfully'});;
		}
	});
});

// Delete contact
router.delete('/:id', (req, res, next)=>{
	Contact.remove({_id: req.params.id}, function(err, result){
		if (err) {
			res.json(err);
		} else {
				res.json(result);
		}
	});
});

module.exports = router;
