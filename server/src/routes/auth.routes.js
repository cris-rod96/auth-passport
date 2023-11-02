const router = require("express").Router();
const auth = require("../controllers/auth.controller");
router.get("/google", auth.googleAuth);
router.get("/google/callback", auth.authRedirect);
router.get("/protected", (req, res) => {
  return res.send(`Welcome ${req.user.displayName}`);
});
module.exports = router;
