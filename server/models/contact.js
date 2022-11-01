//   contact.js
//  Ildaphonse Cornolius
//  ID: 300699371
//  Date: October 30, 2022
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);