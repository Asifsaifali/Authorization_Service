const express=require('express')
const router=express.Router()

const Auth=require('./v1/index')

router.use('/v1',Auth)

module.exports=router;