const router = require('express').Router();
const Translations = require('../../models/translations');

//********************//
// translations Logic //
//********************//

// Get translations
router.get('/', (req, res, next)=>{
	Translations.find(function(err,translations){
		res.json(translations);
	})
});


// Get translations
router.get('/:dataName', (req, res, next)=>{
	Translations.find({"attributes.data-name": req.params.dataName}, function(err,translations){
		if(err){
			res.send("error: " + err);
		} else {
			res.json(translations[0]);
		}
	})
});

// Get translations
router.get('/page/:pageName', (req, res, next)=>{
	Translations.find({"attributes.page": req.params.pageName}, function(err,translations){
		if(err){
			res.send("error: " + err);
		} else {
			res.json(translations);
		}
	})
});

// Add/post translations
router.post('/',(req, res, next)=>{
	let newTranslation = new Translations({
		text: req.body.text,
		attributes: req.body.attributes
	});
	newTranslation.save().then(function(item) {
		res.send("saved to database");
	})
});

// Delete translation
router.delete('/:dataName', (req, res, next)=>{
	Translations.remove({attributes: req.params.dataName}, function(err, result){
		if (err) {
			res.json(err);
		} else {
				res.json(result);
		}
	});
});

module.exports = router;
