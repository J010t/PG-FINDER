// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/user.route.js';
// import authRouter from './routes/auth.route.js';
// import listingRouter from './routes/listing.route.js';
// import cookieParser from 'cookie-parser';
// import path from 'path';


// dotenv.config();

// mongoose.connect(process.env.MONGO)
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// const __dirname = path.resolve();
// const app = express();




// app.use(express.json());
// app.use(cookieParser());

// app.listen(3000, () => {
//     console.log(`Server running on port 3000`);
// });

// // // Update the routes
// app.use('/api/user', userRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);

// // app.use(express.static(path.join(__dirname, '/client/dist')));

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// // })
// app.use((err, req, res, next) => {
//     console.log(err);
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     return res.status(statusCode).json({
//       success: false,
//       statusCode,
//       message,
//     });
// });
// const express = require('express');
// const path = require('path');



// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'build')));

// // Any remaining requests not handled by the above rules will return our
// // custom fallback response, so let's create that now
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/build/index.html'));
// });

// const port = process.env.PORT || 3000;
// app.listen(port);

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });


const __dirname = path.resolve();
const app = express();
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/dist')));
// API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Catch-all handler for single-page app routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Custom error handler
app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({ success: false, statusCode, message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});