import express from "express";
import {
  getTicket,
  getAllTickets,
  addTicket,
  deleteTicket,
  updateTicket
} from "../data/ticket.js";

const router = express.Router();

router.get("/tickets", async (req, res) => {
  const tickets = await getAllTickets();
  res.json(tickets);
});

router.get("/tickets/:id", async (req, res) => {
  const ticket = await getTicket(req.params.id);
  res.json(ticket);
});

router.post("/tickets/", async (req, res) => {
  const ticket = req.body;
  const result = await addTicket(ticket);
  res.json(result);
});

router.delete("/tickets/:id", async (req, res) => {
  const result = await deleteTicket(req.params.id);
  res.json(result);
});

router.put("/tickets/:id", async (req, res) => {
  try {
    const ticket = { ...req.body, _id: req.params.id };
    const result = await updateTicket(ticket);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;
