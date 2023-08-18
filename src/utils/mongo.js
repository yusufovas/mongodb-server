const mongoose = require('mongoose')
require('../modules/courses/model')

const mongo = async () => {
    await mongoose.connect('mongodb://localhost:27017/courses')
}

module.exports = mongo