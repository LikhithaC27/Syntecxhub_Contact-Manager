const Contact = require("../models/Contact");

// GET all contacts
exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// POST new contact
exports.createContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};
