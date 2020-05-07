const User = require('../models/User')

const signup = async(req, res, next) => {
    let email = req.body.email
    //let firstName = req.body.firstName
    //let lastName = req.body.lastName
    //let username = req.body.firstName + " " + req.body.lastName
    let password = req.body.password
    const user = new User({username: email})
    await user.setPassword(password)
    await user.save().then(result => {
        res.json({
            "status": "success"
        })
    }).catch(error => {
        res.json({
            "status": "error"
        })
    })
}

const login = async(req, res, next) =>{
    const user = await User.authenticate()(req.body.email , req.body.password).then(result =>{
        res.json({
            "status": "success",
            "data": {
                "user" : result
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