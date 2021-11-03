// if we are in production use the 
if(process.env.NODE_ENV == 'production'){
  console.log(process.env.NODE_ENV)
  console.log('we in the prod')
module.exports = require('./prod')
   
}else{
  console.log('we in the dev')
  module.exports = require('./dev')
  //pull the dev keys in and export them
}
