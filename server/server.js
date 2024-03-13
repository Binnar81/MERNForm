const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const invoiceRoutes = require('./routes/invoice.routes');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

// MongoDB connection
mongoose.connect('mongodb+srv://sanjubinny1504:sanjay2001@cluster0.yw2zghi.mongodb.net/Form?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/invoices', invoiceRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
