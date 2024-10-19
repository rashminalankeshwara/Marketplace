const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const productRoutes = require('./routes/products');
app.use('/api', productRoutes);

