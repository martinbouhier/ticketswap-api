import "dotenv/config";
import express from "express";
import ticketRouter from "./routes/tickets.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/", ticketRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
