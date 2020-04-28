const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "get all transfers"
        }
    })
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "post new transfer"
        }
    })
}

const getOne = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "get transfer with id: " + req.params.id
        }
    })
}

module.exports.getAll = getAll
module.exports.create = create
module.exports.getOne = getOne