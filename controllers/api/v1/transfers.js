const Transfer = require('../../../models/Transfer');

const getAll = (req, res) => {
    Transfer.find({}, (err, docs)=>{
        if(err){
            res.json({
                "status": "error",
                "message": "couldn't get all the transfers"
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
    transfer.date = new Date().toLocaleDateString()
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
    Transfer.find({_id: req.params.id}, (err, doc) =>{
        if(err){
            res.json({
                "status": "error",
                "message": "could not find a transfer with id " + req.params.id
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

module.exports.getAll = getAll;
module.exports.create = create
module.exports.getOne = getOne