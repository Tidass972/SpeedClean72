const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
// Configuration pour Netlify
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'dist/images')));
app.use(cors({
  origin: 'http://localhost:3000' // Port du serveur Express
}));
app.use(bodyParser.json());

// Configuration SMTP sécurisée
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Route de soumission de formulaire
app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'Tous les champs sont requis'
      });
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h3 style="color: #2c3e50;">Nouveau message de ${name}</h3>
          <p style="font-size: 16px; color: #34495e;">${message}</p>
          <p style="margin-top: 20px; color: #7f8c8d;">
            Email de contact : <a href="mailto:${email}">${email}</a>
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('Erreur d\'envoi:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erreur interne du serveur'
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur Netlify prêt sur le port ${PORT}`));
