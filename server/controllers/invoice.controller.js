const Invoice = require('../models/Invoice.model');

exports.submitInvoice = async (req, res) => {
  const invoiceData = req.body;

  // Convert items from string to array
  invoiceData.items = JSON.parse(invoiceData.items);

  // Convert date strings to Date objects
  invoiceData.dateIssued = new Date(invoiceData.dateIssued);
  invoiceData.dateDue = new Date(invoiceData.dateDue);

  // Create a new invoice with the data
  const invoice = new Invoice(invoiceData);

  try {
    // Save the invoice to the database
    const savedInvoice = await invoice.save();
    res.json({ message: 'Invoice submitted successfully', invoice: savedInvoice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit invoice' });
  }
};

