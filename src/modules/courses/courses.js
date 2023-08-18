const courses_model = require('./model')

module.exports = {
    get: async(_, res) => {
        res.json(await courses_model.find())
    }
}