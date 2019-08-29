require('dotenv').config(); // Import our .env

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const middleware = require('./middleware/middleware');
const userRoutes = require('./routes/user');

const { NODE_ENV, PORT, MONGO_URI } = process.env;

const app = express();

if (NODE_ENV === 'production') {
  app.use(middleware.ensureHttps);
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Mongo connected...'))
  .catch(err => console.log('Mongo err: ', err));

// Middleware
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());

app.use(userRoutes);

app.use(express.static(path.join(__dirname, './dist')));

// Fallback to UI for invalid route
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const port = PORT || 3001;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🔥 Server is listening on PORT:${port}`);
});
