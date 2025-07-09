require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const userRouter = require('./api/user/user.router');

const sslOptions = {
  key: fs.readFileSync('./ssl/privkey.pem'),
  cert: fs.readFileSync('./ssl/fullchain.pem'),
};

app.use(express.json());
app.use('/api/users', userRouter);

https.createServer(sslOptions, app).listen(8443, () => {
  console.log('🚀 HTTPS server running on port 8443');
});