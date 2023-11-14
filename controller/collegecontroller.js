const College=require("../model/collegeschema")
module.exports={
    addclg:async(req,res)=>{
        const{Name,Location,Phoneno}=req.body;
        try{
            const result=await College.create({
                Name,
                Location,
                Phoneno
            });
            res.status(200).json({result});
        }
        catch(err){
            res.status(400).json({err});
        }
    },
getClg:async(req,res)=>{
    const id=req.params.id
    try{
        const result2=await College.find()
        res.status(200).json({result2});
    }
    catch(err){
        res.status(400).json({err});
    }
},
    getClgById:async(req,res)=>{
        const id=req.params.id
        try{
            const result2=await College.findById(id)
            res.status(200).json({result2});
        }
        catch(err){
            res.status(400).json({err});
        }
    },
    UpdateClgById:async(req,res)=>{
        const id=req.params.id
        try{
            const result2=await College.findByIdAndUpdate(id,{Name:req.body.Name})

            res.status(200).json({result2});
        }
        catch(err){
            res.status(400).json({err});
        }
    },
    deleteClgById:async(req,res)=>{
        const id=req.params.id
        try{
             const data=await College.findByIdAndDelete(id)
             res.status(200).json("success");
        }
       catch(err){
           res.status(400).json({err});
      }
    }}