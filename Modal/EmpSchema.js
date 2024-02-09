//importing mongoose
const mongoose = require("mongoose")


const empSchema = new mongoose.Schema({
    empID:{
        type:String,
        require:true,
        unique:true
    },
    empName:{
        type:String,
        require:true
    },
    empEmail:{
        type:String,
        require:true,
        unique:true
    },
    empDesig:{
        type:String,
        require:true
    },
    empAddress:{
        type:String,
        require:true
    }
})

//create model
const employees = mongoose.model("employees",empSchema)

//export the model
module.exports = employees