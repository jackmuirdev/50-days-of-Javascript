const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up storage for video uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Handle video upload
app.post('/upload', upload.single('videoFile'), (req, res) => {
  const videoFile = req.file;
  if (videoFile) {
    // Handle the uploaded video, save it to a folder, etc.
    // For simplicity, we'll just send back the video data as a response.
    res.send({ success: true, videoData: videoFile.buffer.toString('base64') });
  } else {
    res.status(400).send({ success: false, message: 'No video file received.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
