const Webhook = require('../../../models/Webhook');

const getWebhook = (req, res) => {
    Transfer.find({}, (err, docs)=>{
        if(err){
            res.json({
                "status": "error",
                "message": "couldn't get webhooks"
            })
        }
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "webhooks": docs
                }
            })
        }
    })
}

const createWebhook = (req, res) => {
    let webhook = new Webhook()
    webhook.url = "https://hooks.slack.com/services/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"

    if(err){
        res.json({
            "status": "error",
            "message": "couldn't get webhooks"
        })
    }
    if(!err){
        res.json({
            "status": "success",
            "data": {
                "webhook": docs
            }
        })
    }

}
module.exports.getWebhook = getWebhook;
module.exports.createWebhook = createWebhook;
