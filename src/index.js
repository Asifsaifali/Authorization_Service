const express = require("express");
const { PORT } = require("./config/configServer");
const app = express();
const apiAuth = require("./routes/index");
const bodyparser = require("body-parser");
const UserService=require('./service/user-service.js')

const setupServer = () => {
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use("/api", apiAuth);

  app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    const userService=new UserService();
    // const result= await userService.createToken({email:"asif@gmil.com",id:1})
    // console.log(result);
    const res='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaWZAZ21pbC5jb20iLCJpZCI6MSwiaWF0IjoxNjg0OTM5MjMyfQ.NtbawUweYix6cQnPQ2SVpWEaMyKgGA5eXR0dvSW084s'
    const resp=await userService.verifyToken(res)
    console.log(resp)
  });
};

setupServer();
