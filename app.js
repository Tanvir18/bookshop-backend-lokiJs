require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/booksRoute');

const app = express();
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
