var mongoose = require('node-restful').mongoose;

var GPSSchema = new mongoose.Schema({
    uuid:String,
    gpx: String,
    gpx_parsed: [{
        ele:Number,
        lat:Number,
        lon:Number,
        time:String
    }]
});

mongoose.model('GPS', GPSSchema);
module.exports = GPSSchema;