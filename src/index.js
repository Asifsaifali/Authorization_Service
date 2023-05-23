const express = require("express");
const { PORT } = require("./config/configServer");
const app = express();

const bodyparser = require("body-parser");

const setupServer = () => {
 
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

setupServer();
