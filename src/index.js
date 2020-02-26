const express = require('express');
const mongoose = require('mongoose');

const { mongoDb_username, mongoDb_password } = require('../keys');

const app = express();

const mongoUri = `mongodb+srv://${mongoDb_username}:${mongoDb_password}@cluster0-podpp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
