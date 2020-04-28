const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transfers": []
        }
    })
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "transfer": {
                "from": "Amber",
                "to": "Yanis",
                "IMDollars": 10,
                "reason": "feedback",
                "message": "The design looks much better now, thanks!"
            }
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