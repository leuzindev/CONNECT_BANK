const bodyParser = require('body-parser')
const cors = require('cors')
const users = require('./users.routes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        cors(),
        users
    )
}