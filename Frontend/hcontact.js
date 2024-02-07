const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for your data
const contactDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const ContactData = mongoose.model('ContactData', contactDataSchema);

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    // Create a new ContactData instance with the submitted data
    const contactData = new ContactData({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    // Save the form data to the database
    await contactData.save();

    res.status(201).send('Form data saved successfully!');
  } catch (err) {
    res.status(500).send('Error saving form data');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
