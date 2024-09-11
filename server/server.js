// Import required modules
import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path"
import { fileURLToPath } from 'url';
// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Derive the directory name from the file path
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist'))); //client/dist
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Define a simple route
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/api/send", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission from brandons-courier",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  // res.send("hey");
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.post("/api/order", async (req, res) => {
  const {
    pickupAddress,
    dropoffAddress,
    totalDistance,
    packageWeight,
    packageSize,
    price,
    uname,
    unumber,
  } = req.body;

  // Email Content
  const mailOptions = {
    from: process.env.EMAIL_USER, // Replace with your "from" address
    to: process.env.ADMIN_EMAIL, // Replace with the recipient email
    subject: "New Order Confirmation",
    html: `
      <h1>New Order Confirmation</h1>
      <p><strong>Pickup Location:</strong> ${pickupAddress}</p>
      <p><strong>Dropoff Location:</strong> ${dropoffAddress}</p>
      <p><strong>Total Distance:</strong> ${totalDistance} miles</p>
      <p><strong>Package Weight:</strong> ${packageWeight} kg</p>
      <p><strong>Package Size:</strong> ${packageSize}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>client Name:</strong> ${uname}</p>
      <p><strong>client Number:</strong> ${unumber}</p>
    `,
  };

  try {
    // Send Email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res
      .status(200)
      .json({ message: "Order confirmed and email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app