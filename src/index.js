const express = require("express");
const { PORT } = require("./config/configServer");
const app = express();
const apiAuth = require("./routes/index");
const bodyparser = require("body-parser");
const UserRepository=require('./reopsitory/user-repository')

const setupServer = () => {
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use("/api", apiAuth);

  app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    const userRepo=new UserRepository();
    const result=await userRepo.getUser(4);
    console.log(result);
    
  });
};

setupServer();
