const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = Schema ({
    name: {type: String,  required: true, max: 100},
    email: {type: String,  required: true, max: 100},
    password: {type: String,  required: true, max: 100},
    token: {type: String,  required: false, max: 100}
})

module.exports = mongoose.model('User', UserSchema)