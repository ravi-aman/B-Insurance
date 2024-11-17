const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore');
const xlsx = require('xlsx');
const fs = require('fs');

const firebaseConfig = {
    apiKey: "AIzaSyCRupCOFKr8xnqkAN168sugq8Mr1Uwz_6Q",
    authDomain: "teak-environs-292114.firebaseapp.com",
    projectId: "teak-environs-292114",
    storageBucket: "teak-environs-292114.firebasestorage.app",
    messagingSenderId: "452312508779",
    appId: "1:452312508779:web:381f76467fef54989f842e",
    measurementId: "G-RX0Q10FBMV"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const app = express();
const PORT = 5137;

app.use(cors());
app.use(express.json());

app.post('/submit-form', async (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);

    try {
        const docRef = await addDoc(collection(db, 'formData'), formData);
        console.log("Data stored successfully in Firestore, Doc ID:", docRef.id);
        
        //email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tiwariravikant04@gmail.com',
                pass: 'xxnn xqhr vxjl vtos'
            }
        });

        const mailOptions = {
            from: 'tiwariravikant04@gmail.com',
            to: formData.email,
            subject: 'Form Submission Successful',
            text: `Dear ${formData.name},\n\nYour form has been successfully submitted!\n\nThank you!\n\nBest regards,\nYour Team`
        };

        const sendemail = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to', formData.email);

        const filePath = './formData.xlsx';
        let workbook;

        if (fs.existsSync(filePath)) {
            workbook = xlsx.readFile(filePath);
            const worksheet = workbook.Sheets['FormData'];
            const existingData = xlsx.utils.sheet_to_json(worksheet);

            existingData.push(formData);
            const newWorksheet = xlsx.utils.json_to_sheet(existingData);
            workbook.Sheets['FormData'] = newWorksheet;
        } else {
            workbook = xlsx.utils.book_new();
            const worksheet = xlsx.utils.json_to_sheet([formData]);
            xlsx.utils.book_append_sheet(workbook, worksheet, 'FormData');
        }

        xlsx.writeFile(workbook, filePath);
        console.log('Excel file updated successfully!');

        res.status(200).json({ success: true, message: 'Form submitted and email sent successfully!' });
    } catch (error) {
        console.error('Error during form submission:', error);

        if (error.message.includes('email')) {
            res.status(400).json({ success: false, message: 'Email sending failed. Please check the email address.' });
        } else {
            res.status(500).json({ success: false, message: 'Internal server error. Please try again later.' });
        }
    }
});
-
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });

