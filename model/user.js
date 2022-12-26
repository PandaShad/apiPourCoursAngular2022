let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    assignements: [{type: mongoose.Schema.Types.ObjectId, ref: 'assignments'}],
});
module.exports = mongoose.model('user', UserSchema);
