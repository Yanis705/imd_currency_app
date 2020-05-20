const mongoose = require('mongoose')
const Schema = mongoose.Schema
const transferSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    IMDollars: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    }
})
const Transfer = mongoose.model('Transfer', transferSchema)

module.exports = Transfer