const Course=require("../model/courseschema")
module.exports={
    addcur:async(req,res)=>{
        const{Name,Duration,Fees}=req.body;
        try{
            const result=await Course.create({
                Name,
                Duration,
                Fees
            });
            res.status(200).json({result});
        }
        catch(err){
            res.status(400).json({err});
        }
    },
getCur:async(req,res)=>{
    const id=req.params.id
    try{
        const result2=await Course.find()
          res.status(200).json({result2});
    }
    catch(err){
    res.status(400).json({err});
    }
},
getCurById:async(req,res)=>{
    const id=req.params.id
    try{
        const result2=await Course.findById(id)
        res.status(200).json({result2});
    }
    catch(err){
        res.status(400).json({err});
    }
},
UpdateCurById:async(req,res)=>{
    const id=req.params.id
    try{
        const result2=await Course.findByIdAndUpdate(id,{Name:req.body.Name})
        res.status(200).json({result2});
    }
    catch(err){
        res.status(400).json({err});
    }
},
deleteCurById:async(req,res)=>{
    const id=req.params.id
    try{
         const data=await Course.findByIdAndDelete(id)
         res.status(200).json("success");
    }
   catch(err){
       res.status(400).json({err});
  }
}}

