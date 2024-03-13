const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// POST request to submit an invoice
router.post('/submit', upload.single('file'), invoiceController.submitInvoice);

module.exports = router;
