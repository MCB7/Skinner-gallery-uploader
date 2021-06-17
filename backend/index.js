const express = require("express");
require('./models/Candidates');

const mongoose = require("mongoose");
const candidateRoutes = require('./routes/candidateRoute')
const electionroutes = require('./routes/electionRoutes')




mongoose.connect("mongodb+srv://admin:serum@cluster0.9v0ik.mongodb.net/seamayor"),
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  };
  const app = express();
  app.use(express.json());


// app.use("/", require("./routes/candidateRoute"));
candidateRoutes(app)
electionroutes(app)

const PORT = process.env.PORT || 3001
app.listen(PORT, function() {
    console.log("express server is running on port 3001");
})