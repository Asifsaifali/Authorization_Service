const userAuthenticted=(req,res,next)=>{
    if(!req.body.email ){
        return res.status(400).json({
            message:"Something went wrong",
            success:false,
            err:'Email missing in the request'
        })
    }
    if(!req.body.password){
        return res.status(400).json({
            message:"Something went wrong",
            success:false,
            err:'Password missing in the request'
        })
    }    
    next();
}


const isAdminAuth=(req,res,next)=>{
  if(!req.body.id){
    return res.status(400).json({
        message:"Something went wrong",
        success:false,
        err:'User id missing in the request'
    })
  }
  next();
}

module.exports={
    userAuthenticted,
    isAdminAuth,
}