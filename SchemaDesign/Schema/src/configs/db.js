const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://rupamShaw1998:rupam@cluster0.5rqasic.mongodb.net/Revision?retryWrites=true&w=majority");
};

module.exports = connect;