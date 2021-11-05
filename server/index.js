const express = require('express')
const mongoose = require("mongoose");

const keys = require("./config/keys")
const passport = require("passport");

require('./models/User');
require('./services/passport')


mongoose.connect(keys.mongoURI),
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  };
const app = express();



require('./routes/Authroutes')(app);

app.get('/', (req,res)=>{
  res.send('hi there')
})

app.listen(5000)