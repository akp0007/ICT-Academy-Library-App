const mongoose = require('mongoose');
mongoose.connect('mongodb://udxtockwi6nsfbk2qsva:r4k5tDDWGYWrZpRJqgS8@bxvmggcbkxcwzws-mongodb.services.clever-cloud.com:27017/bxvmggcbkxcwzws');
//mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb://username:password@host:port/database');

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name: String,
    email: String,
    mobile: String,
    password: String
});

var Userdata = mongoose.model('userdata', BookSchema);
module.exports = Userdata;