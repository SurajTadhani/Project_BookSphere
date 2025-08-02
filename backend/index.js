import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js';
import contactRoute from './routes/contact.js';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

// PORT
const PORT = process.env.PORT || 4000;

// Use Express

const allowedOrigins = [
  "http://localhost:5173",  // ✅ Allow frontend during local development
  "https://project-book-sphere.vercel.app"  // ✅ Allow production frontend
];

app.use(cors({
  origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error("Not allowed by CORS"));
      }
  },
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  credentials: true 
}));

// ✅ Handle Preflight (OPTIONS) requests
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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
