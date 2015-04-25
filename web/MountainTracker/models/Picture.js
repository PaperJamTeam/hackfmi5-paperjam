var mongoose = require('node-restful').mongoose;

var PictureSchema = new mongoose.Schema({
    date: String,
    name: String
});

mongoose.model('Picture', PictureSchema);
module.exports = PictureSchema;