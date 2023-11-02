const passport = require("passport");

exports.googleAuth = passport.authenticate("google", {
  scope: ["email", "profile"],
});

exports.authRedirect = passport.authenticate("google", {
  successRedirect: "/auth/protected",
  failureRedirect: "/auth/google/failure",
});
