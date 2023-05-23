const UserRepository = require("../reopsitory/user-repository");

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
  async getUser(userId) {
    try {
      const user = await this.userRepository.getUser(userId);
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

  async getAll() {
    try {
      const users = await this.userRepository.getAll();
      return users;
    } catch (error) {
      console.log("Something wrong in service");
      console.log(error);
    }
  }
}

module.exports = UserService;
