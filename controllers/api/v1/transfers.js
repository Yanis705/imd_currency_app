const Transfer = require('../../../models/Transfer')

const getAll = (req, res) => {
    Transfer.find({}, (err, docs)=>{
        if(err){
            res.json({
                "status": "error",
                "message": "could get all the transfers"
            })
        }
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
    transfer.from = req.body.from
    transfer.to = req.body.to
    transfer.IMDollars = req.body.IMDollars
    transfer.reason = req.body.reason
    transfer.message = req.body.message
    transfer.save((err, doc) =>{
        if(err){
            res.json({
                "status": "error",
                "message": "could not create this transfer"
            })
        }

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
    Message.find({_id: req.params.id}, (err, doc) =>{
        if(err){
            res.json({
                "status": "error",
                "message": "could get the transfer"
            })
        }
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

module.exports.getAll = getAll
module.exports.create = create
module.exports.getOne = getOne