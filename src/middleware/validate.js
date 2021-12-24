const respone = require("../helpers/respone")

const checkToken = () => {
    return (req, res, next) => {
        const {token_auth} = req.headers
        if(!token_auth){
            return respone(res, 401, 'login dulu')
        }
        return next()
    }
}

module.exports = checkToken