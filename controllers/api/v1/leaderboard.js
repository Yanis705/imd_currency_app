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

module.exports.getAll = getAll
module.exports.getCurrent = getCurrent