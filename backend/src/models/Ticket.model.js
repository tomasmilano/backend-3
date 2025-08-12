import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    code: { type: String, unique: true },
    purchase_datetime: { type: Date, default: Date.now },
    amount: Number,
    purchaser: String, // correo del usuario.
});

export const TicketModel = mongoose.model('Ticket', ticketSchema);
