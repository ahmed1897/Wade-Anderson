const path = require("path");
const express = require("express");
const fs = require("fs").promises; // Use fs.promises for promises-based file operations
const app = express();
const cors = require("cors");
const fileupload = require("express-fileupload");

const publicPath = path.join(__dirname, "PDF");

// Set up middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Replace with the origin of your client application
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware for file upload
app.use(fileupload());

// Middleware for serving static files
app.use(express.static("files"));
app.use(express.static(publicPath));

// Route for handling PDF downloads
app.get("/PDF/:pdfName", async (req, res) => {
  const pdfName = req.params.pdfName;
  const filePath = path.join(publicPath, pdfName);

  try {
    // Check if file exists
    await fs.access(filePath, fs.constants.F_OK);
    // Check if file is a regular file
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) {
      console.error("Specified path is not a file");
      return res.status(400).send("Specified path is not a file");
    }

    // Proceed with download
    res.download(filePath, pdfName, (err) => {
      if (err) {
        console.error("Failed to download file:", err);
      } else {
        console.log("File downloaded successfully");
      }
    });
  } catch (err) {
    console.error("File does not exist:", err);
    return res.status(404).send("File not found");
  }
});

// Route for file upload
app.post("/PDF/:pdfName", async (req, res) => {
  const newpath = path.join(__dirname, "PDF"); // Define the destination folder for file uploads
  const file = req.files.file; // Access the uploaded file using req.files.file
  const filename = req.params.pdfName; // Access the specified filename from the request parameters

  try {
    await file.mv(`${newpath}/${filename}`); // Move the uploaded file to the destination folder
    res.status(200).json({ message: "File Uploaded", code: 200 }); // Send a success response if file upload is successful
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "File upload failed", code: 200 }); // Send an error response if file upload fails
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
