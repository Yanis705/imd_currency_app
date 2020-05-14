const User = require('../models/User');
const jwt = require("jsonwebtoken");

const signup = async(req, res, next) => {
    let email = req.body.email
    // let firstName = req.body.firstName
    // let lastName = req.body.lastName
    // let username = req.body.firstName + " " + req.body.lastName
    let password = req.body.password
    const user = new User({username: email})
    await user.setPassword(password)
    await user.save().then(result => {
        console.log(result._id)
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, "MyVerySecretWord")

        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error"
        })
    })
}

const login = async(req, res, next) =>{
    const user = await User.authenticate()(req.body.email , req.body.password).then(result =>{
        if(!result.user){
            return res.json({
                "status": "failed",
                "message": "Login failed"
            })
        }
        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
        }, "MyVerySecretWord");

        return res.json({
            "status": "success",
            "data": {
                "token" : token
            }
        })
    }).catch(error =>{
        res.json({
            "status": "error",
            "message": error
        })
    })
}

module.exports.signup = signup
module.exports.login = login