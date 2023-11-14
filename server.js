const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=4000
const bodyParser=require("body-parser")
const collegeRouter=require('./router/collegerouter')
const courseRouter=require('./router/courserouter')
const signup = require('./validator/signup')
const signin = require('./validator/signin')
app.use(bodyParser.json())
app.use('/College',collegeRouter)
app.use('/Course',courseRouter)
app.listen(port,()=>console.log(`app listening in port ${port}`))
const data={
    collegeName:"STIST",
    email:"stist695582@gmail.com",
    password:"Stist@123",
}
console.log(signup(data))
const data2={
    email:"stist695582@gmail.com",
    password:"Stist@123",
}
console.log(signin(data2))
mongoose.connect(`mongodb+srv://smrithipnair:smrithi1307@smrithiscipy.niwl7ox.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log("mongoose  connected"))
.catch((err)=>console.log("err"))
