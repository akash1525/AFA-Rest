// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var qnaSchema = new mongoose.Schema({
  id: Number,
  jsonString: JSON,
});

// Return model
module.exports = restful.model('Qna', qnaSchema);
