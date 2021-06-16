
const Candidate = require("../models/Candidates");
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


app.get("/api/candidates", (req, res) => {
  console.log(req.query,'herererererewegoooo')
  Candidate.find()
      .then(foundCandidates => res.send(foundCandidates))
})


}
