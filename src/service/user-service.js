const UserRepository = require("../reopsitory/user-repository");
const jwt=require('jsonwebtoken')
const {JWT_KEY}=require('../config/configServer')

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  async destroy(userId) {
    try {
      const user = await this.userRepository.destroy(userId);
      return user;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  async getuserById(userId){
    try {
      const user=await this.userRepository.getUser({
        attributes:['email','id']
      })
      return user;
      console.log(user)
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  

  }

  async createToken(user){
    try {
      const token=jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
      return token;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  async verifyToken(token){
    try {
      const response=jwt.verify(token,JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }
}

module.exports = UserService;