const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  companyName: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  client: String,
  clientAddress1: String,
  clientAddress2: String,
  clientCity: String,
  clientState: String,
  clientZipCode: String,
  clientPhone: String,
  dateIssued: Date,
  dateDue: Date,
  currency: String,
  invoiceNumber: String,
  referenceNumber: String,
  items: [{ itemName: String, itemDescription: String, rate: Number, qty: Number, lineTotal: Number }],
  notes: String,
  terms: String,
  file: String,
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
