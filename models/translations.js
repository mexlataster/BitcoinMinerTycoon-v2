const mongoose = require('mongoose');

const translationsAttributeSchema = mongoose.Schema({
	"data-type":{
		type: String,
		required: true
	},
	"data-name": {
		type: String,
		required: true
	},
	"classes": {
		type: Array,
		required: true
	},
	"page": {
		type: Array,
		required: true
	}
});

const translationsTextSchema = mongoose.Schema({
	"language": {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	}
});


const TranslationsSchema = mongoose.Schema({
	text: [translationsTextSchema],
	attributes: translationsAttributeSchema
});

const translations = module.exports = mongoose.model('translations', TranslationsSchema);
