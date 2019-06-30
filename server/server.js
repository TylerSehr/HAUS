
const express = require('express');
require('dotenv').config();

const app = express();
const fs = require('fs');
const https = require('https')
const path = require('path')
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const settingsRouter = require('./routes/settings.router')

const certOptions = {
  key: fs.readFileSync(path.resolve('./server/server.key')),
  cert: fs.readFileSync(path.resolve('./server/server.crt'))
}

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/settings', settingsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });

const server = https.createServer(certOptions, app).listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}`);
  
});