import axios from "axios";
import React, { useState } from "react";

function Card({ title, pdfUrl, onDownload, permission, cardImageUrl }) {
  // State to manage the selected file
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // Function to handle file download
  const handleDownload = () => {
    onDownload(pdfUrl);
  };

  // Function to handle file change
  const handleFileChange = (e) => {
    // Update the file state with the selected file
    setFile(e.target.files[0]);
  };

  // Function to upload the file
  const uploadFile = async (e) => {
    e.preventDefault();
    if (file) {
      // Create FormData object and append the file and fileName to it
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", pdfUrl);

      // Set feedback message
      setUploadStatus("Uploading...");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        // Send a POST request to the server with the file data
        const res = await axios.post(
          `http://localhost:5000/PDF/${pdfUrl}`,
          formData
        );
        console.log(res);
        setFile(null);
        setUploadStatus("File uploaded successfully!");
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md mx-4 flex flex-col">
      <div className="p-4 flex items-center flex-col-reverse">
        <div className=" h-52 w-72 mt-4 flex-grow">
          <img
            src={cardImageUrl}
            aria-labelledby="cardTitle"
            className="object-cover object-center h-52 w-72"
          />
        </div>

        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </div>
      <div className=" p-4 border-t bg-gray-200 border-gray-300 mt-auto">
        <div className="flex justify-center">
          <button
            className=" bg-blue-500 text-white rounded-full px-4 py-2 font-semibold focus:outline-none"
            onClick={handleDownload} // Fix to call handleDownload
          >
            Download
          </button>
        </div>

        {permission === "Password" && ( // Render file upload input only if permission matches
          <form
            onSubmit={uploadFile}
            className="flex flex-col items-center justify-center space-y-4 mt-5"
          >
            <label
              htmlFor="fileInput"
              className="relative w-48 h-auto px-4 py-2 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300"
            >
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                disabled={!permission}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <span className="flex items-center justify-center text-white">
                {file ? file.name : "Choose File"}
              </span>
            </label>
            <button
              type="submit"
              className="w-48 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:bg-blue-600"
            >
              {uploadStatus || "Upload"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Card;
