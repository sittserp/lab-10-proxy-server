require('dotenv').config();
// const cors = require('cors');
// const express = require('express');

const app = require('./lib/app.js');

const PORT = process.env.PORT || 3000;

// app.use(cors());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
