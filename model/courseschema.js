const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const CourseSchema=new Schema(
    {
        Name:{
            type:String,
            required:true,
        },
        Duration:{
            type:String,
            required:true,
        },
        Fees:{
            type:String,
            required:true,
        },
    }
);
module.exports=mongoose.model("Course",CourseSchema);
