// Import required modules
import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Get the current file path and derive the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist'))); // Serve static files

// Serve index.html on any request (fallback route)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Set up Nodemailer transporter
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

// Email route for contact form
app.post("/api/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

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

// Order route
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

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Order Confirmation",
    html: `
      <h1>New Order Confirmation</h1>
      <p><strong>Pickup Location:</strong> ${pickupAddress}</p>
      <p><strong>Dropoff Location:</strong> ${dropoffAddress}</p>
      <p><strong>Total Distance:</strong> ${totalDistance} miles</p>
      <p><strong>Package Weight:</strong> ${packageWeight} kg</p>
      <p><strong>Package Size:</strong> ${packageSize}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>Client Name:</strong> ${uname}</p>
      <p><strong>Client Number:</strong> ${unumber}</p>
    `,
  };

  try {
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

// Export app for Vercel serverless function
export default app;
