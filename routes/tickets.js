import express from "express";
import {
  getTicket,
  getTickets,
  addTicket,
} from "../data/ticket.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tickets = await getTickets();
  res.json(tickets);
});

router.get("/:id", async (req, res) => {
  const ticket = await getTicket(req.params.id);
  res.json(ticket);
});

router.post("/", async (req, res) => {
  const ticket = req.body;
  const result = await addTicket(ticket);
  res.json(result);
});


export default router;
