const UserService=require('../service/user-service')

const userService=new UserService();

const create=async(req,res)=>{
    try {
        const pass=String(req.body.password);
        if(pass.length <5){
            return res.status(500).json({
                message:"Password must be greater than 5 characters",
                success:false,
                err:"Not fullfill the credentials"
            })
        }
        const user= await userService.createUser({
            email:req.body.email,
            password:req.body.password,
        })
        return res.status(200).json({
            data:user,
            messge:"new User created Successfully",
            success:true,
            err:{}
        })    
    } catch (error) {
        console.log(error);
        console.log("Something went wrong in Controller");
        res.status(500).json({
            messge:"Not able to create User",
            success:true,
            data:{},
            err:{error}
        })
    }
  
} 

module.exports={
    create,
}