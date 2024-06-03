const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const dataFilePath = './users.json';

// Middleware
app.use(bodyParser.json());

// Read data from file
function readDataFromFile() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Write data to file
function writeDataToFile(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Routes
app.get('/users', (req, res) => {
    const users = readDataFromFile();
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const users = readDataFromFile();
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    const users = readDataFromFile();
    const userIds = users.map(user => user.id);
    const newUserId = Math.max(...userIds, 0) + 1;
    newUser.id = newUserId;
    newUser.createdAt = new Date();
    newUser.updatedAt = new Date();
    users.push(newUser);
    writeDataToFile(users);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const users = readDataFromFile();
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        updatedUser.id = userId;
        updatedUser.updatedAt = new Date();
        users[index] = updatedUser;
        writeDataToFile(users);
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const users = readDataFromFile();
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users.splice(index, 1);
        writeDataToFile(users);
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
