const mongoose = require('mongoose')
const Schema = mongoose.Schema
const webhookSchema = new Schema({
    url: {
        type: String
    }
})
const Webhook = mongoose.model('Webhook', webhookSchema)

module.exports = Webhook