const Product = require("../models/Product")
const {StatusCodes} = require("http-status-codes")


const createProduct = async(req,res) => {

    res.send("create product api");

}

const getAllProducts = async(req,res) => {

    res.send("list of  products api");

}

module.exports = {
    createProduct,
    getAllProducts
}