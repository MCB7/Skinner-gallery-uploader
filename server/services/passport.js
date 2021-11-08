const passport = require("passport");
const mongoose = require("mongoose")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model('users') ;

passport.serializeUser((user,done)=>{
done(null,user.id)
});
//takes in the user that we saved to the db and serializes the element
// we want fromo it tthe id in this case
passport.deserializeUser((id,done)=>{
User.findById(id)
.then(user=> {done(null,user)})
})
//we deserialize what we had serialized before in this case the id
//adds to the request object as req.user on the server side.


passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
    
   },
   async (accessToken,refreshToken, profile,done )=>{
        const excistingUser = await User.findOne({googleId:profile.id})
        if(excistingUser){
            done(null,excistingUser)
            //first argument of done is the error and the secoond is the user record
            //we already have a record of tthe profile id
        }else{
            console.log(profile)
           const user = await new User({googleId: profile.id}).save()
            done(null,user)
            // this user is returned by mongo andis the prefered cleaner user if you will
        }
        }   
    )
);