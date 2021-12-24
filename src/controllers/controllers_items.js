const items = {}
const model = require('../models/models_items')
const respone = require('../helpers/respone')
const uploads = require('../helpers/uploadCloud')
const moment = require('moment-timezone')
const jwt = require("jsonwebtoken")

items.addData = async (req, res) => {
    try {
        let user
        const {token_auth} = req.headers
        jwt.verify(token_auth, process.env.JWT_KEYS, (err, decode) => {
            if(err) {
                console.log(err)
            }
            user = decode.user
        })
        let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png'
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        }
        const object = await (req.body)
        const dateString = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        const data = {
            name_item : object.name_item,
            username : user,
            stock : object.stock,
            image_item : urlImage || req.file.path,
            createdAt : dateString,
            updatedAt : dateString
        }
        const result = await model.AddData(data)
        return respone(res, 201, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

items.updateData = async (req, res) => {
    try {
        let urlImage = 'https://res.cloudinary.com/dyli6i0pw/image/upload/v1626704462/product/dummy-img_xc5jlb.png'
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        }
        const object = await (req.body)
        const dateString = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        const data = {
            id : object.id,
            name_item : object.name_item,
            stock : object.stock,
            image_item : urlImage || req.file.path,
            updatedAt : dateString
        }
        const result = await model.UpdateData(data)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

items.removeData = async (req, res) => {
    try {
        const result = await model.DeleteData(req.params.id)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

items.getByUsername = async (req, res) => {
    try {
        const result = await model.GetbyUsernameProd(req.params.username)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

module.exports = items