const User = require('../../../models/User');

const getAll = (req, res) => {
    User.find({}, (err, docs)=>{
        if(err){
            res.json({
                "status": "error",
                "message": "could get all the users"
            })
        }
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "users": docs
                }
            })
        }
    }).sort( { balance: -1 } )
}

const getCurrent = (req, res) => {
    let currentUserId = req.user;
    User.find({_id: currentUserId}, (err, doc) =>{
        if(err){
            res.json({
                "status": "error",
                "message": "could not find a user with id " + currentUserId
            })
        }
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "user": doc
                }
            })
        }
    })
}

const updateBalance = (req, res) => {
        let currentUserId = req.user._id;
        let balanceUpdate;
        if(req.user.balance <100){
            balanceUpdate = 100;
        }
        if(req.user.balance > 100){
           balanceUpdate = req.user.balance + 20
        }
        User.findByIdAndUpdate({_id: currentUserId}, {balance: balanceUpdate}, (err, doc) => {
            if(!err){
                res.json({
                    "status" : "updated",
                    "data" : {
                        "user": doc,
                        "message": "balance updated"
                    }
                })
            }
            if(err){
                res.json({
                    "status" : "error",
                    "data" : {
                        "message": error
                    }
                })
            }
        })  
}

module.exports.getAll = getAll
module.exports.getCurrent = getCurrent
module.exports.updateBalance = updateBalance