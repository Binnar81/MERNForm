const Invoice = require('../models/Invoice.model');

exports.submitInvoice = async (req, res) => {
  const {
    companyName, address1, address2, city, state, zip, phone, client,
    clientAddress1, clientAddress2, clientCity, clientState, clientZipCode, clientPhone,
    dateIssued, dateDue, currency, invoiceNumber, referenceNumber, items, notes, terms,
  } = req.body;

  const itemsArray = JSON.parse(items);

  const invoice = new Invoice({
    companyName,
    address1,
    address2,
    city,
    state,
    zip,
    phone,
    client,
    clientAddress1,
    clientAddress2,
    clientCity,
    clientState,
    clientZipCode,
    clientPhone,
    dateIssued: new Date(dateIssued),
    dateDue: new Date(dateDue),
    currency,
    invoiceNumber,
    referenceNumber,
    items: itemsArray,
    notes,
    terms,
    file: req.file ? req.file.path : '',
  });

  try {
    await invoice.save();
    res.json({ message: 'Invoice submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit invoice' });
  }
};
