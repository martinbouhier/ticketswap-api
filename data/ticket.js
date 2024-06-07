import { ObjectId } from "mongodb";
import connectToDB from "./connection.js";

const COLLECTION_TICKETS="tickets";

export async function getAllTickets() {
  const clientmongo = await connectToDB();

  const tickets = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_TICKETS)
    .find()
    .toArray();

  return tickets;
}

export async function getTicket(id) {
  const clientmongo = await connectToDB();

  const response = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_TICKETS)
    .findOne({ _id: new ObjectId(id) });

  return response;
}

export async function addTicket(ticket) {
  const clientmongo = await connectToDB();

  const response = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_TICKETS)
    .insertOne(ticket);

  return response;
}

export async function updateTicket(ticket) {
  const clientmongo = await connectToDB();
  const query = { _id: new ObjectId(ticket._id) };
  const newValues = {
    $set: {
      title: ticket.title,
      date: ticket.date,
      description: ticket.description,
      image: ticket.image,
      phone: ticket.phone,
      price: ticket.price
    },
  };

  const response = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_TICKETS)
    .updateOne(query, newValues);
  return response;
}

export async function deleteTicket(id) {
  const clientmongo = await connectToDB();

  const response = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_TICKETS)
    .deleteOne({ _id: new ObjectId(id) });
  return response;
}


export async function searchTicketsByTitle(title) {
  const clientmongo = await connectToDB();
  const regex = new RegExp(title, 'i'); // 'i' para que sea case-insensitive
  const tickets = await clientmongo
    .db(process.env.DB_NAME)
    .collection(COLLECTION_TICKETS)
    .find({ title: { $regex: regex } })
    .toArray();

  return tickets;
} 