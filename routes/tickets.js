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
  const tickets = await getAllTickets();
  res.json(tickets);
});

router.get("/:id", async (req, res) => {
  const ticket = await getTicket(req.params.id);
  res.json(ticket);
});

router.post("/", auth, async (req, res) => {
  const ticket = req.body;
  const result = await addTicket(ticket);
  res.json(result);
});

router.delete("/:id", auth, async (req, res) => {
  const result = await deleteTicket(req.params.id);
  res.json(result);
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
  const title = req.params.title;
  const tickets = await searchTicketsByTitle(title);
  res.json(tickets);
  }
);

export default router;
