import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";
import card1img from "../Images/amputee balance-agility-coordination img.jpg";
import card2img from "../Images/amputee pregait-gait img.jpg";
import card3img from "../Images/amputee strengthening-stretching img.jpg";
import card4img from "../Images/arm exercises sitting img.jpg";
import card5img from "../Images/arm exercises supine img.jpg";
import card6img from "../Images/balance exercises img.jpg";
import card7img from "../Images/fall prevention checklist img.jpg";
import card8img from "../Images/hand theraputty exercises img.jpg";
import card9img from "../Images/neck exercises img.jpg";
import card10img from "../Images/shoulder isometric exercises img.jpg";
import card11img from "../Images/sitting exercises img.jpg";
import card12img from "../Images/spinal stabilization exercises complete img.jpg";
import card13img from "../Images/spinal stabilization exercises simple img.jpg";
import card14img from "../Images/standing exercises img.jpg";
import card15img from "../Images/supine exercises img.jpg";
import card16img from "../Images/Total Knee Replacement exercises img.jpg";
import card17img from "../Images/Total knee replacement FAQ img.jpg";
import card18img from "../Images/trochanteric bursitis img.jpg";
import card19img from "../Images/Progress Note img.jpg";

const Body2 = () => {
  const [permission, setPermission] = useState(false);

  // Function to handle permission input change
  const handlePermissionChange = (e) => {
    setPermission(e.target.value);
  };

  // Function to handle file upload
  const handleFileUpload = async (pdfName, selectedFile) => {
    try {
      if (selectedFile && permission) {
        // Send POST request to upload file
        const response = await axios.post(
          `http://localhost:5000/PDF/${pdfName}`,
          selectedFile,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          console.log("File uploaded successfully");
          // Update UI or trigger download if needed
        } else {
          throw new Error("Failed to upload file");
        }
      } else {
        console.error("No file selected");
      }
    } catch (error) {
      console.error("Failed to upload file:", error);
    }
  };

  // Function to handle file download
  const handleDownload = async (pdfName) => {
    try {
      // Send GET request to download file
      const response = await axios.get(`http://localhost:3000/PDF/${pdfName}`, {
        responseType: "blob",
      });

      if (response.status === 200) {
        const blob = response.data;
        if (blob.size > 0) {
          // Create a download link and click it programmatically
          const downloadLink = document.createElement("a");
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = pdfName;
          downloadLink.style.display = "none";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        } else {
          console.error("File does not exist");
        }
      } else {
        throw new Error("Failed to download file");
      }
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <>
      {/* Render permission input */}
      <div className="flex justify-center mt-4 inputgradient">
        <input
          className="mt-1 px-3 py-2 inputgradientinside border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/3 rounded-md sm:text-sm focus:ring-1"
          placeholder="Admin"
          type="text"
          onChange={handlePermissionChange}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-8 svgtry1">
        {/* Render Cards components with different props */}
        <Card
          id="1"
          title="Amputee balance-agility-coordination"
          pdfUrl="Amputee-balance-agility-coordination.pdf"
          cardImageUrl={card1img}
          onDownload={() =>
            handleDownload("Amputee-balance-agility-coordination.pdf")
          }
          onUpload={(selectedFile) =>
            handleFileUpload(
              "Amputee-balance-agility-coordination.pdf",
              selectedFile
            )
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="2"
          title="Amputee pregait-gait"
          pdfUrl="Amputee-pregait-gait.pdf"
          cardImageUrl={card2img}
          onDownload={() => handleDownload("Amputee-pregait-gait.pdf")}
          onUpload={(selectedFile) =>
            handleFileUpload("Amputee-pregait-gait.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="3"
          title="Amputee strengthening-stretching"
          pdfUrl="Amputee-strengthening-stretching.pdf"
          cardImageUrl={card3img}
          onDownload={() =>
            handleDownload("Amputee-strengthening-stretching.pdf")
          }
          onUpload={(selectedFile) =>
            handleFileUpload(
              "Amputee-strengthening-stretching.pdf",
              selectedFile
            )
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="4"
          title="Arm exercises sitting"
          pdfUrl="Arm-exercises-sitting.pdf"
          cardImageUrl={card4img}
          onDownload={() => handleDownload("Arm-exercises-sitting.pdf")}
          onUpload={(selectedFile) =>
            handleFileUpload("Arm-exercises-sitting.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="5"
          title="Arm exercises supine"
          pdfUrl="Arm-exercises-supine.pdf"
          cardImageUrl={card5img}
          onDownload={() => handleDownload("Arm-exercises-supine.pdf")}
          onUpload={(selectedFile) =>
            handleFileUpload("Arm-exercises-supine.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="6"
          title="Balance exercises"
          pdfUrl="Balance-exercises.pdf"
          cardImageUrl={card6img}
          onDownload={() => handleDownload("Balance-exercises.pdf")}
          onUpload={(selectedFile) =>
            handleFileUpload("Balance-exercises.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="7"
          title="Fall prevention checklist"
          pdfUrl="Fall-prevention-checklist.pdf"
          cardImageUrl={card7img}
          onDownload={() => handleDownload("Fall-prevention-checklist.pdf")}
          onUpload={(selectedFile) =>
            handleFileUpload("Fall-prevention-checklist.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="8"
          title="Hand theraputty exercises"
          pdfUrl="Hand-theraputty-exercises.pdf"
          onDownload={() => handleDownload("Hand-theraputty-exercises.pdf")}
          cardImageUrl={card8img}
          onUpload={(selectedFile) =>
            handleFileUpload("Hand-theraputty-exercises.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="9"
          title="Neck exercises"
          pdfUrl="Neck-exercises.pdf"
          onDownload={() => handleDownload("Neck-exercises.pdf")}
          cardImageUrl={card9img}
          onUpload={(selectedFile) =>
            handleFileUpload("Neck-exercises.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="10"
          title="Shoulder isometric exercises"
          pdfUrl="Shoulder-isometric-exercises.pdf"
          onDownload={() => handleDownload("Shoulder-isometric-exercises.pdf")}
          cardImageUrl={card10img}
          onUpload={(selectedFile) =>
            handleFileUpload("Shoulder-isometric-exercises.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="11"
          title="Sitting exercises"
          pdfUrl="Sitting-exercises.pdf"
          onDownload={() => handleDownload("Sitting-exercises.pdf")}
          cardImageUrl={card11img}
          onUpload={(selectedFile) =>
            handleFileUpload("Sitting-exercises.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="12"
          title="Spinal stabilization exercises complete"
          pdfUrl="Spinal-stabilization-exercises-complete.pdf"
          onDownload={() =>
            handleDownload("Spinal-stabilization-exercises-complete.pdf")
          }
          cardImageUrl={card12img}
          onUpload={(selectedFile) =>
            handleFileUpload(
              "Spinal-stabilization-exercises-complete.pdf",
              selectedFile
            )
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="13"
          title="Spinal stabilization exercises simple"
          pdfUrl="Spinal-stabilization-exercises-simple.pdf"
          onDownload={() =>
            handleDownload("Spinal-stabilization-exercises-simple.pdf")
          }
          cardImageUrl={card13img}
          onUpload={(selectedFile) =>
            handleFileUpload(
              "Spinal-stabilization-exercises-simple.pdf",
              selectedFile
            )
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="14"
          title="Standing exercises"
          pdfUrl="Standing-exercises.pdf"
          onDownload={() => handleDownload("Standing-exercises.pdf")}
          cardImageUrl={card14img}
          onUpload={(selectedFile) =>
            handleFileUpload("Standing-exercises.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="15"
          title="Supine exercises"
          pdfUrl="Supine-exercises.pdf"
          onDownload={() => handleDownload("Supine-exercises.pdf")}
          cardImageUrl={card15img}
          onUpload={(selectedFile) =>
            handleFileUpload("Supine-exercises.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="16"
          title="Total Knee Replacement exercises"
          pdfUrl="Total-Knee-Replacement-exercises.pdf"
          onDownload={() =>
            handleDownload("Total-Knee-Replacement-exercises.pdf")
          }
          cardImageUrl={card16img}
          onUpload={(selectedFile) =>
            handleFileUpload(
              "Total-Knee-Replacement-exercises.pdf",
              selectedFile
            )
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />

        <Card
          id="17"
          title="Total knee replacement FAQ"
          pdfUrl="Total-knee-replacement-FAQ.pdf"
          onDownload={() => handleDownload("Total-knee-replacement-FAQ.pdf")}
          cardImageUrl={card17img}
          onUpload={(selectedFile) =>
            handleFileUpload("Total-knee-replacement-FAQ.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="18"
          title="Trochanteric bursitis"
          pdfUrl="Trochanteric-bursitis.pdf"
          onDownload={() => handleDownload("Trochanteric-bursitis.pdf")}
          cardImageUrl={card18img}
          onUpload={(selectedFile) =>
            handleFileUpload("Trochanteric-bursitis.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
        <Card
          id="19"
          title="Progress Note"
          pdfUrl="Progress-Note.pdf"
          onDownload={() => handleDownload("Progress-Note.pdf")}
          cardImageUrl={card19img}
          onUpload={(selectedFile) =>
            handleFileUpload("Progress-Note.pdf", selectedFile)
          }
          permission={permission}
          onPermissionChange={handlePermissionChange}
        />
      </div>
    </>
  );
};

export default Body2;
