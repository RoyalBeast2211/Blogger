const JWT = require("jsonwebtoken");

const secret = "omkarisgreat";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };
  const token = JWT.sign(payload, secret);

  return token;
}

function validateToken(token) {
  try {
    const payload = JWT.verify(token, secret);
    return payload;
  } catch (error) {
    console.error(error);
    console.log("Token is invalid");
    return null;
  }
}

module.exports = {
  createTokenForUser,
  validateToken,
};
