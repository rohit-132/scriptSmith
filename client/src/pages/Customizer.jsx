// import React from "react";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useSnapshot } from "valtio";

// import config from "../config/config.js";
// import state from "../store/index.js";
// import { download, logoShirt, stylishShirt } from "../assets";
// import { downloadTshirtDesign, reader } from "../config/helpers.js";
// import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants.js";
// import { fadeAnimation, slideAnimation } from "../config/motion.js";
// import {
//   CustomButton,
//   AIPicker,
//   ColorPicker,
//   FilePicker,
//   Tab,
// } from "../components";

// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverDemo,
// //   PopoverTrigger,
// // } from "../components/ui/popover.jsx";
// import { PopoverDemo } from "@/components/ui/popoverDemo.jsx";
// import { Label } from "@/components/ui/label.jsx";
// import { ComboboxDemo } from "@/components/ui/combobox.jsx";
// import Chatboxx from "@/components/chatbox.jsx";
// import EventInput from "@/components/SuggetionPage.jsx";

// const Customizer = () => {
//   const snap = useSnapshot(state);

//   const [file, setFile] = useState("");

//   const [prompt, setPrompt] = useState("");

//   const [generatingImg, setGeneratingImg] = useState(false);

//   const [activeEditorTab, setActiveEditorTab] = useState("");

//   const [activeFilterTab, setActiveFilterTab] = useState({
//     logoShirt: true,
//     stylishShirt: false,
//   });

//   const [tshirtImage, setTshirtImage] = useState(null);
//   const [tryOnImage, setTryOnImage] = useState(null);
//   const API_KEY = "SG_723dd1c79a2291d7"; // Replace with your actual API key
//   const API_URL = "https://www.segmind.com/models/try-on-diffusion";

//   const handleFileUpload = async (event) => {
//     const uploadedFile = event.target.files[0];

//     if (!uploadedFile) return;

//     setFile(uploadedFile);

//     // Convert file to data URL
//     const result = await reader(uploadedFile);

//     // Update state with uploaded image
//     state.tshirtImage = result;
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       console.log("📂 Selected File:", file); // Debugging log
//       setTshirtImage(file);
//     } else {
//       console.warn("⚠️ No file selected");
//     }
//   };

//   const tryOnTShirt = async () => {
//     if (!tshirtImage) {
//       console.error("❌ No T-shirt image found in state");
//       alert("Please upload a T-shirt image first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("tshirt", tshirtImage);

//     console.log("📤 Sending file to API:", tshirtImage.name); // Debugging

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`API error: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("📥 API Response:", data); // Debugging

//       if (data.virtualTryOnImage) {
//         setTryOnImage(data.virtualTryOnImage);
//       } else {
//         console.warn("⚠️ No try-on image returned from API");
//       }
//     } catch (error) {
//       console.error("🚨 Virtual Try-On API Error:", error);
//     }
//   };

//   //show tab content depending on the activeTab
//   const generateTabContent = () => {
//     switch (activeEditorTab) {
//       case "colorpicker":
//         return <ColorPicker />;
//       case "filepicker":
//         return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
//       case "aipicker":
//         return (
//           <AIPicker
//             prompt={prompt}
//             setPrompt={setPrompt}
//             generatingImg={generatingImg}
//             handleSubmit={handleSubmit}
//           />
//         );

//       default:
//         return null;
//     }
//   };

//   const handleSubmit = async (type) => {
//     if (!prompt) return alert("Please enter a prompt");

//     try {
//       setGeneratingImg(true);

//       const response = await fetch("http://localhost:8080/api/v1/dalle", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           prompt,
//         }),
//       });

//       const data = await response.json();

//       handleDecals(type, `data:image/png;base64, ${data.photo}`);
//     } catch (error) {
//       alert(error);
//     } finally {
//       setGeneratingImg(false);
//       setActiveEditorTab("");
//     }
//   };

//   // const handleDecals = (type, result) => {
//   //   const decalType = DecalTypes[type];

//   //   state[decalType.stateProperty] = result;

//   //   if (!activeFilterTab[decalType.filterTab]) {
//   //     handleActiveFilterTab(decalType.filterTab);
//   //   }
//   // };

//   const handleDecals = (type, result) => {
//     // Check if type is valid
//     const decalType = DecalTypes[type];

//     if (!decalType) {
//       alert("Invalid decal type: " + type);
//       return; // Exit the function if the decal type is invalid
//     }

//     // Proceed with state update if decalType is valid
//     state[decalType.stateProperty] = result;

//     if (!activeFilterTab[decalType.filterTab]) {
//       handleActiveFilterTab(decalType.filterTab);
//     }
//   };

//   const handleActiveFilterTab = (tabName) => {
//     switch (tabName) {
//       case "logoShirt":
//         state.isLogoTexture = !activeFilterTab[tabName];
//         break;

//       case "stylishShirt":
//         state.isFullTexture = !activeFilterTab[tabName];
//         break;
//       default:
//         state.isLogoTexture = true;
//         state.isFullTexture = false;
//         break;
//     }

//     //after setting the state,  activeFilterTab is updated

//     setActiveFilterTab((prevState) => {
//       return {
//         ...prevState,
//         [tabName]: !prevState[tabName],
//       };
//     });
//   };

//   const readFile = (type) => {
//     reader(file).then((result) => {
//       handleDecals(type, result);
//       setActiveEditorTab("");
//     });
//   };

//   return (
//     <AnimatePresence>
//       {!snap.intro && (
//         <>
//           <motion.div
//             key="custom"
//             className="absolute top-0 left-0 z-10"
//             {...slideAnimation("left")}
//           >
//             <div className="flex items-center min-h-screen gap-5">
//               <div className="editortabs-container tabs ">
//                 {EditorTabs.map((tab) => (
//                   <Tab
//                     key={tab.name}
//                     tab={tab}
//                     handleClick={() => setActiveEditorTab(tab.name)}
//                   />
//                 ))}
//                 {generateTabContent()}
//                 <br />

//                 <div className="flex flex-col">
//                   <CustomButton
//                     type="filled"
//                     title="Download Logo"
//                     handleClick={() => downloadTshirtDesign("logo")}
//                     customStyles="w-80px px-4 py-2.5 font-bold text-sm"
//                   />
//                   <br />
//                   <CustomButton
//                     type="filled"
//                     title="Download Full Design"
//                     handleClick={() => downloadTshirtDesign("full")}
//                     customStyles="w-fit px-4 py-2.5 font-bold text-sm"
//                   />
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="absolute z-10 top-5 right-5 flex flex-col items-end gap-3 mr-4"
//             {...fadeAnimation}
//           >
//             <CustomButton
//               type="filled"
//               title="Go back"
//               handleClick={() => (state.intro = true)}
//               customStyles="w-fit px-4 py-2.5 font-bold text-sm"
//             />

//             {/* Other Components */}
//             <PopoverDemo />
//             <ComboboxDemo />

//             <CustomButton
//               type="filled"
//               title="Sell This"
//               customStyles="w-fit px-4 py-2.5 font-bold text-sm"
//             />

//             {/* Upload Button for Virtual Try-On */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="mb-4"
//             />

//             <CustomButton
//               type="filled"
//               title="Try On T-Shirt"
//               handleClick={tryOnTShirt}
//               customStyles="w-fit px-4 py-2.5 font-bold text-sm"
//             />

//             <div className="customizer-container">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="file-upload-input"
//               />
//               {snap.tshirtImage ? (
//                 <img
//                   src={snap.tshirtImage}
//                   alt="Uploaded T-shirt"
//                   className="tshirt-preview"
//                 />
//               ) : (
//                 <p>No T-shirt uploaded yet.</p>
//               )}
//             </div>

//             {/* Display the Virtual Try-On Result */}
//             {tryOnImage && (
//               <div className="mt-4">
//                 <h3 className="text-sm font-bold">Virtual Try-On Preview:</h3>
//                 <img
//                   src={tryOnImage}
//                   alt="Virtual Try-On Result"
//                   className="w-64 mt-2 rounded-lg shadow-md"
//                 />
//               </div>
//             )}

//             {/* Add spacing below */}
//             <div className="mt-2">
//               <Chatboxx />
//             </div>
//           </motion.div>

//           <motion.div
//             className="filtertabs-container"
//             {...slideAnimation("up")}
//           >
//             {FilterTabs.map((tab) => (
//               <Tab
//                 key={tab.name}
//                 tab={tab}
//                 isFilterTab
//                 isActiveTab={activeFilterTab[tab.name]}
//                 handleClick={() => handleActiveFilterTab(tab.name)}
//               />
//             ))}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Customizer;
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store/index.js";
import { downloadTshirtDesign, reader } from "../config/helpers.js";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants.js";
import { fadeAnimation, slideAnimation } from "../config/motion.js";
import {
  CustomButton,
  AIPicker,
  ColorPicker,
  FilePicker,
  Tab,
} from "../components";

import { PopoverDemo } from "@/components/ui/popoverDemo.jsx";
import { ComboboxDemo } from "@/components/ui/combobox.jsx";
import Chatboxx from "@/components/chatbox.jsx";
import ImageUploader from "@/components/ImageUploader.jsx"; // ✅ Import ImageUploader

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const [tryOnImage, setTryOnImage] = useState(null);
  const [loadingTryOn, setLoadingTryOn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_KEY = "SG_723dd1c79a2291d7"; // Replace with your actual API key
  const API_URL = "https://www.segmind.com/models/try-on-diffusion";

  // 🛠️ Handle Image Upload
  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];

    if (!uploadedFile) return;

    setFile(uploadedFile);
    const result = await reader(uploadedFile); // Convert to Base64
    state.uploadedImage = result; // Store image in state

    console.log("📂 Uploaded Image:", result);
  };

  // 🛠️ Handle Virtual Try-On
  const tryOnTShirt = async () => {
    if (!snap.uploadedImage) {
      alert("Please upload a T-shirt image first.");
      return;
    }

    setLoadingTryOn(true);
    setErrorMessage("");

    try {
      const base64Image = snap.uploadedImage.startsWith("data:image")
        ? snap.uploadedImage
        : `data:image/png;base64,${snap.uploadedImage}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ tshirtImage: base64Image }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("✅ Virtual Try-On API Response:", data);

      if (data.virtualTryOnImage) {
        setTryOnImage(data.virtualTryOnImage);
      } else {
        throw new Error("No image returned from API.");
      }
    } catch (error) {
      console.error("🚨 Virtual Try-On API Error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoadingTryOn(false);
    }
  };

  // 🎨 Generate Tab Content
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);
      const response = await fetch("http://localhost:8000/api/v1/dalle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error("Failed to fetch image from API");

      const data = await response.json();
      handleDecals(type, `data:image/png;base64, ${data.photo}`);
    } catch (error) {
      console.error("🚨 DALL·E API Error:", error);
      alert(error.message);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    if (!decalType) {
      alert("Invalid decal type: " + type);
      return;
    }

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    if (tabName === "logoShirt") {
      state.isLogoTexture = !activeFilterTab[tabName];
    } else if (tabName === "stylishShirt") {
      state.isFullTexture = !activeFilterTab[tabName];
    }

    setActiveFilterTab((prevState) => ({
      ...prevState,
      [tabName]: !prevState[tabName],
    }));
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* 🎨 Left Panel: Editor */}
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen gap-5">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}

                {/* 🖼️ Download Buttons */}
                <div className="flex flex-col mt-4">
                  <CustomButton
                    type="filled"
                    title="Download Logo"
                    handleClick={() => downloadTshirtDesign("logo")}
                  />
                  <CustomButton
                    type="filled"
                    title="Download Full Design"
                    handleClick={() => downloadTshirtDesign("full")}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🔹 Right Panel: Customization */}
          <motion.div
            className="absolute z-10 top-5 right-5 flex flex-col items-end gap-3 mr-4"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go back"
              handleClick={() => (state.intro = true)}
            />

            <PopoverDemo />
            <ComboboxDemo />
            <CustomButton type="filled" title="Sell This" />

            {/* 📤 Upload T-Shirt Image */}
            <ImageUploader />

            {/* 🛠️ Virtual Try-On */}
            <CustomButton
              type="filled"
              title="Try On T-Shirt"
              handleClick={tryOnTShirt}
            />

            {/* 🔄 Loading Indicator */}
            {loadingTryOn && <p>Loading Virtual Try-On...</p>}

            {/* ❌ Error Message */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {/* 🎨 Display Virtual Try-On Result */}
            {tryOnImage && (
              <img
                src={tryOnImage}
                alt="Virtual Try-On Result"
                className="w-64 mt-2 rounded-lg shadow-md"
              />
            )}

            <Chatboxx />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
