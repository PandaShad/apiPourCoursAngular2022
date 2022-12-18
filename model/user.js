let mongoose = require('mongoose');
let aggregatePaginate = require('mongoose-aggregate-paginate-v2');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
});
module.exports = mongoose.model('user', UserSchema);
