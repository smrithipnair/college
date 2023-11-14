const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const CollegeSchema=new Schema({

    Name:{
    type:String,
    required:true,    
    },
    Location:{
        type:String,
        required:true, 
    },
    Phoneno:{
        type:String,
        required:true,
    },
});
module.exports=mongoose.model("College",CollegeSchema);