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

const getLatestTransfers = (req, res) => {
    Transfer.find({ $or: [ { from: req.user.username }, { to: req.user.username } ] }, (err, docs)=>{
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
                    "transfers": docs,
                    "user": req.user
                }
            })
        }
    }).sort({date: -1}).limit(4)
}

const transferHistory = (req, res) => {
    Transfer.find({ $or: [ { from: req.user.username }, { to: req.user.username } ] }, (err, docs)=>{
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
                    "transfers": docs,
                    "user": req.user
                }
            })
        }
    }).sort({date: -1})
}

const create = (req, res) => {
    let transfer = new Transfer()
    transfer.from = req.user.username
    transfer.to = req.body.to
    transfer.IMDollars = req.body.IMDollars
    transfer.date = Date.now();
    transfer.reason = req.body.reason
    transfer.message = req.body.message

    User.find({username: req.user.username}, (err, sender) =>{
        if(sender[0].balance >= transfer.IMDollars){
            User.find({username: transfer.to}, (err, receiver) =>{
                if(receiver[0] != null){
                    if(receiver[0].username == sender[0].username){
                        res.json({
                            "status": "error",
                            "message": "You cannot send money to yourself"
                        })
                    } else {
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

                        transfer.save((err, doc) =>{
                            if(err){
                                res.json({
                                    "status": "error",
                                    "message": "There went something wrong processing this transfer!"
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
                } else {
                    res.json({
                        "status": "error",
                        "message": "The user you are trying to send IMDollars to was not found"
                    })
                }
            });
        } else {
            res.json({
                "status": "error",
                "message": "Insufficient balance"
            })
        }
    });
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
module.exports.create = create;
module.exports.getOne = getOne;
module.exports.getLatestTransfers = getLatestTransfers;
module.exports.transferHistory = transferHistory;