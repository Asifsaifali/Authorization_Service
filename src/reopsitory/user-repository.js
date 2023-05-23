const { User } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something wrong in repo");
      console.log(error)
    }
  }
}

module.exports = UserRepository;
