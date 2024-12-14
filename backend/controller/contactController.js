import Contact from '../models/contact.js'; // Adjust the path as necessary

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the request body
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const response = { name, email, message };
    await Contact.create(response);
    return res.status(200).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ message: "Message not delivered", error: error.message });
  }
};