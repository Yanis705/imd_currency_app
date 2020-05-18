const getAll =  (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "Get leaderboard"
        }
    })
}

module.exports.getAll = getAll