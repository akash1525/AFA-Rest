// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var usersSchema = new mongoose.Schema({
  id: Number,
  jsonString: JSON,
});

// Return model
module.exports = restful.model('Users', usersSchema);
