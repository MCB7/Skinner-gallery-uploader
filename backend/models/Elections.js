const mongoose = require("mongoose");

const electionSchema = {
  type: String,
  States: Array,
}
 
const Election = mongoose.model("Election", electionSchema);

module.exports = Election;