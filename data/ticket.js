import { ObjectId } from "mongodb";
import connectToDB from "./connection.js";

export async function getTickets() {
  const clientmongo = await connectToDB();

  const tickets = await clientmongo
    .db("ticket_swap")
    .collection("tickets")
    .find()
    .toArray();

  return tickets;
}

export async function getTicket(id) {
  const clientmongo = await connectToDB();

  const response = await clientmongo
    .db("ticket_swap")
    .collection("tickets")
    .findOne({ _id: new ObjectId(id) });

  return response;
}

export async function addTicket(ticket) {
  const clientmongo = await connectToDB();

  const response = await clientmongo
    .db("ticket_swap")
    .collection("tickets")
    .insertOne(ticket);

  return response;
}

export async function updateTicket(ticket) {
  const clientmongo = await connectToDB();
  const query = { _id: new ObjectId(ticket._id) };
  const newValues = {
    $set: {
      event_name: ticket.first,
      event_datetime: ticket.last,
      event_location: ticket.year,
      ticket_price: ticket.ticket_price,
      event_description: ticket.event_description,
      event_image: ticket.event_image,
      additional_info: ticket.additional_info 
    },
  };

  const response = await clientmongo
    .db("ticket_swap")
    .collection("tickets")
    .updateOne(query, newValues);
  return response;
}

export async function deleteTicket(id) {
  const clientmongo = await connectToDB();

  const response = await clientmongo
    .db("ticket_swap")
    .collection("tickets")
    .deleteOne({ _id: new ObjectId(id) });
  return response;
}
