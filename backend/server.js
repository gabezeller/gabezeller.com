const express = require('express');
const app = express();
// require('dns').setDefaultResultOrder('ipv4first');
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const projectRoutes = require('./routes/projects');

// json support
app.use(express.json());

// cors support
app.use(cors());

app.get('/', (req, res) => {
    res.send('Portfolio API is running!');
});

// routes
app.use('/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

