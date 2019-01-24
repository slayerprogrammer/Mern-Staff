const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-staffs';

mongoose.connect(URI)
    .then(db => console.log('DB is Connected !!'))
    .catch(err => console.error(err));

module.exports = mongoose;
