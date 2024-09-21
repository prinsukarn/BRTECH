const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ msg: "Please fill in all fields" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_LOGIN,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.RECIPIENT,
    subject: `Message from ${name}`,
    html: `<h3>Contact Details</h3>
           <ul>
             <li>Name: ${name}</li>
             <li>Email: ${email}</li>
             <li>Phone: ${phone}</li>
           </ul>
           <h3>Message</h3>
           <p>${message}</p>`,
  };

  try {
    await smtpTransporter.sendMail(mailOptions);
    res.status(200).json({ msg: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error sending message" });
  }
});

module.exports = router;
