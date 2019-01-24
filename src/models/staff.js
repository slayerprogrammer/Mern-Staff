const mongoose = require('mongoose');
const { Schema } = mongoose;

const StaffSchema = new Schema({
    tcno: { type: String, required: true},
    username: { type: String, required: true},
    email: { type: String, required:true}
});

module.exports = mongoose.model('Staff', StaffSchema);