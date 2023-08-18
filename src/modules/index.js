const express = require('express')
const courses = require('./courses/courses')
const router = express.Router()

router
    .get('/courses', courses.get )
    .post('/courses', courses.post)
    .put('/courses/:id', courses.put)
    .delete('/courses/:id', courses.delete)
    .get('/courses/:id', courses.getById)

module.exports = router