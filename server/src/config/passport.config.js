const passport = require("passport");
const GmailStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();

passport.use(
  new GmailStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_CLIENT,
      callbackURL: "http://localhost:3001/auth/google/callback",
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // done(error, id)
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
