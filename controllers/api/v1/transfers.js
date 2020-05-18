const Transfer = require('../../../models/Transfer');
const User = require('../../../models/User');

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
    transfer.from = req.user.username
    transfer.to = req.body.to
    transfer.IMDollars = req.body.IMDollars
    transfer.date = new Date().toLocaleDateString()
    transfer.reason = req.body.reason
    transfer.message = req.body.message

    User.find({username: req.user.username}, (err, sender) =>{
        if(sender[0].balance >= transfer.IMDollars){
            console.log("Balance OK!");
            User.find({username: transfer.to}, (err, receiver) =>{
                if(receiver[0] != null){
                    console.log("User found");
                    let actualBalanceSender = sender[0].balance;
                    let newBalanceSender = actualBalanceSender - transfer.IMDollars;
                    let balanceReceiver = receiver[0].balance;
                    let newBalanceReceiver = balanceReceiver + transfer.IMDollars;
                    let actualTransferCount = sender[0].transferCount;
                    let newTransferCount = actualTransferCount + 1;
                    User.findOneAndUpdate({username: req.user.username}, {balance: newBalanceSender}, (err, doc) => {
                    });
                    User.findOneAndUpdate({username: transfer.to}, {balance: newBalanceReceiver}, (err, doc) => {
                    });
                    User.findOneAndUpdate({username: req.user.username}, {transferCount: newTransferCount}, (err, doc) => {
                    });
                } else {
                    console.log("User not found");
                }
                if(err){
                    console.log(err);
                }
            });
        } else {
            console.log("Insufficient balance!");
        }
    });

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