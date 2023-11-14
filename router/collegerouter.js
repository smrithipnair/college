const express=require("express");
const router=express.Router()
const Collegecontroller=require('../controller/collegecontroller')
router.post('/addCLG',Collegecontroller.addclg)
router.get('/getCLG',Collegecontroller.getClg)
router.get('/getCLGById/:id',Collegecontroller.getClgById)
router.put('/updateCLGById/:id',Collegecontroller.UpdateClgById)
router.delete('/deleteClgById/:id',Collegecontroller.deleteClgById)
module.exports=router;