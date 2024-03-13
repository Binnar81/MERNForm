const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  address1: { type: String, required: true },
  address2: String,
  city: { type: String, required: true },
  state: { type: String, required: true, maxlength: 2 },
  zip: { type: String, required: true, maxlength: 5 },
  phone: { type: String, required: true, maxlength: 15 },
  client: { type: String, required: true },
  clientAddress1: { type: String, required: true },
  clientAddress2: String,
  clientCity: { type: String, required: true },
  clientState: { type: String, required: true, maxlength: 2 },
  clientZipCode: { type: String, required: true, maxlength: 5 },
  clientPhone: { type: String, required: true, maxlength: 15 },
  dateIssued: { type: Date, default: Date.now },
  dateDue: { type: Date, required: true },
  currency: { type: String, enum: ['USD', 'EUR', 'GBP'], required: true },
  invoiceNumber: { type: String, required: true, unique: true },
  referenceNumber: String,
  items: [
    {
      itemName: { type: String, required: true },
      itemDescription: String,
      rate: { type: Number, required: true },
      qty: { type: Number, required: true },
      lineTotal: { type: Number, required: true }
    }
  ],
  notes: String,
  terms: String,
 
