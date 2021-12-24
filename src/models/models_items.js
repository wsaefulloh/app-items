const orm = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")

class Items{
    constructor(){
        this.table = orm.define("items", {
            id:{
                type: DataTypes.INTEGER,
                allowNull:false,
                autoIncrement:true,
                primaryKey: true
            },
            name_item:{
                type: DataTypes.STRING,
                allowNull: false
            },
            stock:{
                type: DataTypes.STRING,
                allowNull: false
            },
            image_item:{
                type: DataTypes.STRING,
                allowNull: true
            },
            username:{
                type: DataTypes.STRING,
                allowNull: true
            },
            createdAt:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            updatedAt:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            timestamps: false
        }
        )
    }

    DeleteData(id_del) {
        return new Promise((resolve,reject) => {
            this.table.destroy({
                where: {
                    id : id_del
                }
            })
            .then(res => {
                resolve('Delete item success')
            }).catch(err => {
                reject(err.message)
            })
        })
    }

    UpdateData(data){
        return new Promise((resolve,reject) => {
            this.table.update({
                name_item : data.name_item,
                stock : data.stock,
                image_item: data.image_item,
                updatedAt : data.updatedAt,
            },{
                where : {
                    id : data.id,
                }
            })
            .then((res) => {
                resolve('Update item success')
            }).catch((err) => {
                reject(err.message)
            })
        })
    }

    AddData(data) {
        return new Promise((resolve,reject) => {
            this.table.create(data)
            .then(res => {
                resolve('Add item success')
            }).catch(err => {
                reject(err.message)
            })
        })
    }

    GetbyUsernameProd(username) {
        return new Promise((resolve,reject) => {
            this.table.findAll({
                where: {
                    username : username
                },
            })
            .then(res => {
                const itemJSON = res
                const dataitem = itemJSON.map((data) => {
                const object = {
                    id_item : data.id,
                    name_item : data.name_item,
                    stock : data.stock,
                    image_item : data.image_item,
                    createdAt : data.createdAt,
                    updatedAt : data.updatedAt
                }
                return object;
            })
                resolve(dataitem)
            }).catch(err => {
                reject(err.message)
            })
        })
    }

}

module.exports = new Items()