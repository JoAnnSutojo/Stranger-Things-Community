// node modules import
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

// custom modules import
import { connectDB } from './helpers/dbConnect.js';
import testRouter from './routes/testRouter.js';
import userRouter from './routes/userRouter.js';
import postMessageRouter from './routes/postMessageRouter.js';
import storyRouter from './routes/storyRouter.js';

const server = express();

// loading environment variable
dotenv.config();

// using
server.use(cors()); // version 0 : enabling sharing with other servers
server.use(express.json()); // accessing the request body

// using the routes
server.use('/test', testRouter);
server.use('/user', userRouter);
server.use('/posts', postMessageRouter);
server.use('/stories', storyRouter);

// connecting to our db
connectDB();
// event handling
mongoose.connection.on('open', () => {
    console.log('Connected to DB');
});
mongoose.connection.on('error', (error) => {
    console.log('Connection to MongoDB has failed', error.message);
});


// defining  a PORT variable
const PORT = process.env.PORT;

// listening to the PORT, and running the server
server.listen(PORT, () => console.log(`Server is listening to port ${PORT} and running`));
