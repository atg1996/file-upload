const {StatusCodes} = require("http-status-codes")


const uploadProductImage = async(req,res) => {
console.log(req)
    res.send("upload product image api");

}



module.exports = {
    uploadProductImage
}