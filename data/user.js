import getConnection from "./connection.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const COLLECTION_NAME = "users";

export async function getUser(userName) {
  const clientmongo = await getConnection();

  const user = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_NAME)
    .findOne({  username: userName
    })
  return user;
}

export async function addUser(user) {
  const clientmongo = await getConnection();

  const user_founded = await getUser(user.username);

  if (user_founded) {
    throw new Error( user.username + " ya existe");
  }
  user.password = await bcryptjs.hash(user.password, 10);

  const result = clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_NAME)
    .insertOne(user);

  return result;
}

export async function findByCredential(username, password) {
  const clientmongo = await getConnection();

  const user = await clientmongo
    .db(process.env.DB_NAME)
    .collection("users")
    .findOne({ username: username });

  if (!user) {
    throw new Error("Credenciales no validas");
  }

  const isMatch = await bcryptjs.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Credenciales no validas");
  }

  return user;
}

export async function generateAuthToken(user) {
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  return token;
}
