const mongoose = require('mongoose')

const mongo = async () => {
    await mongoose.connect('mongodb://localhost:27017/courses')
}

module.exports = mongo