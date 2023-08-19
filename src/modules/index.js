const express = require('express')
const courses = require('./courses/courses')
const users = require('./users/users')
const router = express.Router()

router
    .get('/courses', courses.get )
    .post('/courses', courses.post)
    .put('/courses/:id', courses.put)
    .delete('/courses/:id', courses.delete)
    .get('/courses/:id', courses.getById)
    .get('/users', users.get)
    .post('/users', users.post)
    .put('/users/:id', users.put)
    .delete('/users/:id', users.delete)

module.exports = router