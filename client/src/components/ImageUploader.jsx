import React, { useState } from "react";

const ImageUploader = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        if (onUpload) {
          onUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-yellow-500 px-4 py-2 rounded text-white"
      >
        Upload Image
      </label>
      {preview && (
        <img src={preview} alt="Preview" className="mt-2 w-32 rounded-lg" />
      )}
    </div>
  );
};

export default ImageUploader;
