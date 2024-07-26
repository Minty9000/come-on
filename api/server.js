const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

let products = [];

app.post('/api/data', (req, res) => {
    products.push(req.body);
    res.status(201).json(req.body);
});

app.get('/api/data', (req, res) => {
    res.json(products);
});

app.delete('/api/data/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < products.length) {
        products.splice(index, 1);
        res.status(200).json({ message: 'Deleted successfully' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'contact.html'));
});

app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
