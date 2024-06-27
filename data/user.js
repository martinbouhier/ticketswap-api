import connectToDB from "./connection.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const COLLECTION_NAME = "users";

export async function getUser(userName) {
  const clientmongo = await connectToDB();

  const user = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_NAME)
    .findOne({  username: userName
    })
  return user;
}

export async function validateUserData(user) {
  if (!user.username) {
    throw new Error("Username is required");
  }
  if (!user.password) {
    throw new Error("Password is required");
  }
}

export async function addUser(user) {
  const clientmongo = await connectToDB();

  const user_founded = await getUser(user.username);

  if (user_founded) {
    throw new Error( user.username + " ya existe");
  }
  await validateUserData(user);
  user.password = await bcryptjs.hash(user.password, 10);

  const result = clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_NAME)
    .insertOne(user);

  return result;
}

export async function findByCredential(username, password) {
  const clientmongo = await connectToDB();

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
  if (!process.env.SECRET_KEY) {
    throw new Error("Secret key is not defined - contact the administrator");
  }
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  return token;
}
