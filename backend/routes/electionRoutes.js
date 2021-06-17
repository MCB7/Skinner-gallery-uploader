// const express = require("express");
// //const { default: Candidate } = require("../frontend/src/components/Candidates");

// const ElectionRouter = express.Router();
// const Candidate = require("../models/candidateModel");

// router.route("api/create").post((req,res) => {
//     const name = req.body.name;
//     const bio = req.body.content;
//     const newCandidate = new Candidate({
//         name,
//         bio
//     });

//     newCandidate.save();
// })


// router.route("api/elections").get((req, res) => {
//     Candidate.findAll()
//         .then(foundelections => res.json(foundelections))
//         res.send(foundelections)
// })

// module.exports = ElectionRouter;

const Election = require("../models/Elections");
module.exports = (app)=>{

// app.put("/create")((req,res) => {
//     const name = req.body.name;
//     const bio = req.body.content;
//     const newCandidate = new Candidate({
//         name,
//         bio
//     });

//     newCandidate.save();
// })


app.get("/api/elections", (req, res) => {
  console.log(req.query,'herererererewegoooo')
  Election.find()
      
      .then(foundElections => res.send(foundElections))
})


}
