import "dotenv/config";
import express from "express";
import ticketRouter from "./routes/tickets.js";
import usersRouter from "./routes/users.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/tickets", ticketRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
