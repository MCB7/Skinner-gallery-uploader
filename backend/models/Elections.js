

const electionSchema = {
  electionName: String,
  State: Array,
}
 
const Election = mongoose.model("Election", electionSchema);

module.exports = Election;