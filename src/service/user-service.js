const UserRepository=require('../reopsitory/user-repository')

class UserService{
    constructor(){
        this.userRepository=new UserRepository()
    }

    async createUser(data){
        try {
            const user=await this.userRepository.createUser(data)
            return user;
        } catch (error) {
            console.log("Something wrong in service")
            console.log(error)
        }
    }
}

module.exports=UserService