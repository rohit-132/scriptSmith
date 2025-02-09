// import React from "react";
// import CustomButton from "./CustomButton";

// const FilePicker = ({ file, setFile, readFile }) => {
//   return (
//     <div className="filepicker-container">
//       <div className="flex-1 flex flex-col">
//         <input
//           id="file-upload"
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <label htmlFor="file-upload" className="filepicker-label">
//           Upload File
//         </label>

//         <p className="mt-2 text-gray-500 text-xs truncate">
//           {file === "" ? "No file selected" : file.name}
//         </p>
//       </div>
//       <div className="mt-4 flex flex-wrap gap-3">
//         <CustomButton
//           type="outline"
//           title="Logo"
//           handleClick={() => readFile("logo")}
//           customStyles="text-xs"
//         />
//         <CustomButton
//           type="filled"
//           title="Full"
//           handleClick={() => readFile("full")}
//           customStyles="text-xs"
//         />
//       </div>
//     </div>
//   );
// };

// export default FilePicker;

import React from "react";
import CustomButton from "./CustomButton";

const presetFiles = [
  {
    name: "Cheetah Pattern",
    url: "DALL·E 2025-02-06 15.32.42 - A professional and stylish T-shirt design featuring cheetah spots. The pattern is sleek, well-defined, and evenly distributed across the fabric, creat.webp",
  },
  {
    name: "Cricket Jersey",
    url: "DALL·E 2025-02-06 15.49.08 - A professional and stylish cricket jersey design. The jersey features a modern, sleek look with dynamic patterns and bold accents. The colors are vibr.webp",
  },
  {
    name: "Floral Pattern",
    url: "DALL·E 2025-02-06 10.17.09 - A minimalistic T-shirt design featuring elegant red and black flowers. The flowers are simple yet stylish, arranged in a balanced and aesthetically pl.webp",
  },
  {
    name: "Star Pattern",
    url: "DALL·E 2025-02-07 15.42.41 - A 3D-rendered T-shirt featuring a star-shaped design at the center, surrounded by a mix of small, medium, and large dots. The design should be modern .webp",
  },
];

const FilePicker = ({ file, setFile, readFile }) => {
  const handlePresetSelection = (fileUrl) => {
    fetch(fileUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], fileUrl.split("/").pop(), {
          type: "image/png",
        });
        setFile(file);
        readFile("full", file); // You may change "full" to "logo" if needed
      })
      .catch((error) => console.error("Error loading preset file:", error));
  };

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      {/* Preset Files Section */}
      <div className="mt-4 flex flex-wrap gap-3">
        {presetFiles.map((preset, index) => (
          <CustomButton
            key={index}
            type="outline"
            title={preset.name}
            handleClick={() => handlePresetSelection(preset.url)}
            customStyles="text-xs"
          />
        ))}
      </div>

      {/* Default Upload Buttons */}
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
