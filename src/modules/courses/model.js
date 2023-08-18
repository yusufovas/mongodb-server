const { Schema, model } = require('mongoose')

const Courses = new Schema ({
    id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        min: [ 5, 'course title should be at least 5 letters long!' ]
    },
    price: {
        type: Number,
        required: true
    }
}, {
    collection: 'courses'
})


const courses_model = model('Courses', Courses)

module.exports = courses_model