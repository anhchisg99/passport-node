const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: '573281107708-h60ssg41qmncju5mv3fkfqbl5lpvojft.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3003/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null,profile)
  }
));

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})
