import express from "express";
import {
  getTicket,
  getAllTickets,
  addTicket,
  deleteTicket,
  updateTicket,
  searchTicketsByTitle
} from "../data/ticket.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tickets = await getAllTickets();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ticket = await getTicket(req.params.id);
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const ticket = req.body;
    const result = await addTicket(ticket);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const result = await deleteTicket(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const ticket = { ...req.body, _id: req.params.id };
    const result = await updateTicket(ticket);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/search/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const tickets = await searchTicketsByTitle(title);
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
