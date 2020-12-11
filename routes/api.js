// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Users = require('../models/users');
var Qna = require('../models/qna');
var Video = require('../models/video');

// Routes
Users.methods(['get', 'put', 'post', 'delete']);
Users.register(router, '/users');

Qna.methods(['get', 'put', 'post', 'delete']);
Qna.register(router, '/qna');

Video.methods(['get', 'put', 'post', 'delete']);
Video.register(router, '/video');

// Return router
module.exports = router;
