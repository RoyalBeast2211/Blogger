const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return function (req, res, next) {
    const tokenCookie = req.cookies[cookieName];
    if (!tokenCookie) {
    }
    try {
      const userPayload = validateToken(tokenCookie);
      req.user = userPayload;
    } catch (error) {
      console.error(error);
      return res.clearCookie(cookieName).redirect("/signin");
    }
    next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
