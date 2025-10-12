const express = require('express');
const app = express(); // instantiate express

// ! used to parse req.body in express -> put or post
const bodyParser = require('body-parser');

// ! parse JSON data and add it to the request.body object
app.use(bodyParser.json());

// ! activate the server on port 3000
app.listen(3000, () => {
    console.log("Server started at port number 3000");
});

// ! Routes
app.get('/', (req, res) => {
    res.send("hello jee, Kaise ho !");
});

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;

    console.log(name);
    console.log(brand);

    res.send("car delivered successfully.");
});
// ! Linking server with database.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Cars', {
    useNewUrlParser: true,     // ✅ Notice the capital "U"
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully!'))
.catch(err => console.error('❌ MongoDB connection error:', err));
