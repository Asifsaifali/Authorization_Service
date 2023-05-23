const { User } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something wrong in repository");
      console.log(error);
    }
  }

  async destroy(userId) {
    try {
      const resp = await User.destroy({
        where: {
          id: userId,
        },
      });
      return resp;
    } catch (error) {
      console.log("Something wrong in repository");
      console.log(error);
    }
  }

  async getUser(userId) {
    try {
      const resp = await User.findByPk(userId);
      return resp;
    } catch (error) {
      console.log("Something wrong in repository");
      console.log(error);
    }
  }
  async update(userId) {
    try {
      const resp = await User.update(userId, {
        where: {
          id: userId,
        },
      });
      return resp;
    } catch (error) {
      console.log("Something wrong in repository");
      console.log(error);
    }
  }

  async getAll() {
    try {
      const resp = await User.findAll();
      return resp;
    } catch (error) {
      console.log("Something wrong in repository");
      console.log(error);
    }
  }
}

module.exports = UserRepository;
