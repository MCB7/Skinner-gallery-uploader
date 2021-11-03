const passport = require("passport");
 module.exports = (app)=>{
//scope gives us access to the scope and were grabbing the profile and email
    app.get(
        '/auth/google',
        passport.authenticate('google',{
            scope:['profile', 'email']
        })
    )
    //passportt autthenticate handles the callback
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        //  where the request will be redirected to
        (req,res)=>{
            res.redirect("/surveys")
        }
    )

    app.get('/api/currentuser',(req,res)=>{
        res.send(req.user);
    })

    app.get('/api/logout',(req,res)=>{
        req.logout()
        //auttomatically included with passport, it takes the cookie and kills the id in the cookie.
        res.redirect('/')
         //this should return no user
    })
    
}
