import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js';
import contactRoute from './routes/contact.js';
import bodyParser from 'body-parser';

dotenv.config();

// PORT
const PORT = process.env.PORT || 4000;

// Use Express
const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
const MongoDb = process.env.MongoDb_Url;

mongoose.connect(MongoDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully.......');
}).catch((error) => {
  console.log('Error:', error);
});

app.use(bodyParser.json());

// Define Routes
app.use('/book', bookRoute);
app.use('/user', userRoute);
app.use('/api', contactRoute);

app.get("/", (req,res) => {
  res.status(200).json({
    message : "Hello"
  })
})

// Use the contact route



// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
