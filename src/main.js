const express = require("express");
const routing = express.Router();
const users = require("./routes/routes_user")
const respone = require('./helpers/respone')
const auth = require('./routes/routes_auth')
const items = require('./routes/routes_items')
const {cloudConfig} = require("./configs/cloudinary")

routing.use('*',cloudConfig)

routing.use('/login', auth)
routing.use('/login/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('/items', items)
routing.use('/items/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('/users', users)
routing.use('/users/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

module.exports = routing