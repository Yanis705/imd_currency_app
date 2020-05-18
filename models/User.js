const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    transferCount: {
        type: Number,
        required: true
    }
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)