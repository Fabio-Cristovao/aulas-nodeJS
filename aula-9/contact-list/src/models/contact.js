const { schema, model } = require('mongoose');

const ContactSchema = new schema({
   name: String,
   email: String,
   phone: String,
   birthDay: Date,


})


