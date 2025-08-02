const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..')));

app.get('/api/energy', (req, res) => {
    res.json({
        voltage: (Math.random() * 5).toFixed(2),       
        current: (Math.random() * 2).toFixed(2),       
        power: (Math.random() * 10).toFixed(2)         
    });
});


app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact message received:', name, email, message);
    res.status(200).send("Thank you for contacting us!");
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
