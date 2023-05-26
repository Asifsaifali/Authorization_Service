const express = require("express");
const { PORT } = require("./config/configServer");
const app = express();
const apiAuth = require("./routes/index");
const bodyparser = require("body-parser");
const db=require('./models/index')



const setupServer = () => {
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use("/api", apiAuth);

  app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    if(process.env.DB_SYNC){
      db.sequelize.sync({alter:true})
    }

    
  });
};

setupServer();
