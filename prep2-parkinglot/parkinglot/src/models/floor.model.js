
const mongoose  =  require('mongoose')

const FloorSchema = new mongoose.Schema({
    floorNo : {type:Number ,required : true},
    spotNo : {type : Number , required : true}
}) 

module.exports = mongoose.model("floor",FloorSchema)
