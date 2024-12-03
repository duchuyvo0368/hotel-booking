const mongoose = require('mongoose');

// MongoDB connection string
const uri = "mongodb+srv://voh67983:KU1xFHUuNRFUDbRV@cluster0.tl6g7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully!"))
.catch(err => console.error("MongoDB connection error:", err));

// Define a schema
const commentSchema = new mongoose.Schema({
  productId: String,
  content: String,
  image: String,
  userId: String,
  star: Number,
});

// Create a model
const Comment = mongoose.model('Comment', commentSchema);

// Express app example
const express = require('express');
const app = express();

app.use(express.json());

// Add comment route
app.post('/add_comment', async (req, res) => {
  try {
    const { productId, content, image, userId, star } = req.body;

    // Create a new comment
    const newComment = new Comment({ productId, content, image, userId, star });
    await newComment.save();

    res.status(201).json({
      message: "Comment added successfully!",
      comment: newComment,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
