
import { getThankYouEmail } from '../helpers/getThankYouEmail.js';
import { sendMail } from '../helpers/sendMail.js';
import Contact from '../models/contact.js'; 

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the request body
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const response = { name, email, message };
    await Contact.create(response);

    
    res.status(200).json({ message: "Message sent successfully!" });
    const userEmail = response.email;
    console.log("Sending email to:", userEmail);
    await sendMail(userEmail, "Thank You  we contact you soon", "", getThankYouEmail(name));
    console.log("Email function executed!");

  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ message: "Message not delivered", error: error.message });
  }
};