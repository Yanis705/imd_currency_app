const mongoose = require('mongoose')
const Schema = mongoose.Schema
const transferSchema = new Schema({
    from: String,
    to: String,
    IMDollars: Number,
    reason: String,
    message: String
})
const Transfer = mongoose.model('Transfer', transferSchema)

const getAll = (req, res) => {
    Transfer.find({}, (err, docs)=>{
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "transfers": docs
                }
            })
        }
    })
}

const create = (req, res) => {
    let transfer = new Transfer()
    transfer.from = "Amber"
    transfer.to = "Yanis"
    transfer.IMDollars = 10
    transfer.reason = "feedback"
    transfer.message = "thanks for the tips!"
    transfer.save((err, doc) =>{
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "transfer": doc
                }
            })
        }
    })
    
}

const getOne = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transfer": []
        }
    })
}

module.exports.getAll = getAll
module.exports.create = create
module.exports.getOne = getOne