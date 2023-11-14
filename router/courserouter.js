const express=require("express");
const router=express.Router()
const Coursecontroller=require('../controller/coursecontroller')
router.post('/addCUR',Coursecontroller.addcur)
router.get('/getCUR',Coursecontroller.getCur)
router.get('/getCURById/:id',Coursecontroller.getCurById)
router.put('/updateCURById/:id',Coursecontroller.UpdateCurById)
router.delete('/deleteCURById/:id',Coursecontroller.deleteCurById)
module.exports=router;