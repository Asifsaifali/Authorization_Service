const UserRepository = require("../reopsitory/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/configServer");
const bcrypt = require("bcrypt");

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

  async getuserById(userId) {
    try {
      const user = await this.userRepository.getUser(userId);
      return user;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  async signIn(email, plainpassword) {
    try {
      const user = await this.userRepository.getByEmail(email);

      const passMatch = this.checkpassword(plainpassword, user.password);
      if (!passMatch) {
        console.log('Password does not Match');
        throw { error: 'Incorrect Password' };
      }
      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { error: 'Invalid token' };
      }
      const user = await this.userRepository.getUserById(response.id);
      if (!user) {
        throw { error: 'No user with the corresponding token exists' };
      }
      return user.id;
    } catch (error) {
      console.log("Something went wrong in the auth process");
      throw error;
    }
  }
  createToken(user) {
    try {
      const token = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return token;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  checkpassword(plainpassword, encryptedpass) {
    try {
      return bcrypt.compareSync(plainpassword, encryptedpass);
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }

  async isAdmin(userId){
    try {
      return await this.userRepository.isAdmin(userId);
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  } 
}

module.exports = UserService;
