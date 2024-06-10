import jwt from "jsonwebtoken";

async function auth(req, res, next) {
  try {
    const token = req.header("Authentication");
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload);
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
}

export default auth;