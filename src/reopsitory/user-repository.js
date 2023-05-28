const { User, Role } = require("../models/index");
const ValidateError = require("../utils/validate-error");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if(error.name==='SequelizeValidationError'){
        throw new ValidateError(error)
      }
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

  async getUserById(userId) {
    try {
      const resp = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return resp;
    } catch (error) {
      console.log("Something wrong in repository");
      console.log(error);
    }
  }

  async getByEmail(emailId) {
    try {
      const resp = await User.findOne({
        where: {
          email: emailId,
        },
      });
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

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const role = await Role.findOne({
        where: {
          name: 'ADMIN',
        },
      });
      return user.hasRole(role);
    } catch (error) {
      console.log("Something wrong in repository");
      console.log(error);
    }
  }
}

module.exports = UserRepository;
