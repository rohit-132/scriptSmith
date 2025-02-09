import { useState, useEffect } from "react";

const EventInput = () => {
  const placeholderText = "Event Suggestions";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const typingSpeed = 150; // Typing speed in ms
    const pauseTime = 1500; // Delay after full text is typed

    const typeWriter = () => {
      if (index < placeholderText.length) {
        setDisplayText(placeholderText.substring(0, index + 1));
        setIndex(index + 1);
      } else {
        setTimeout(() => setIndex(0), pauseTime);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [index]); // Re-run when index changes

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]?.name || null);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex items-center space-x-4">
        {/* Event Input with Typing Effect */}
        <input
          type="text"
          placeholder={displayText}
          className="bg-gray-800 text-white placeholder-gray-400 p-3 rounded-md w-96 shadow-lg 
                     focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
        />

        {/* Image Upload Button */}
        <label htmlFor="imageInput" className="cursor-pointer relative group">
          <img
            src="cloud-computing.png"
            alt="Upload Image"
            className="w-10 h-10 transition-transform transform group-hover:scale-110"
          />
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Display Selected File Name */}
      {selectedFile && (
        <p className="text-sm text-gray-400 mt-2">Selected: {selectedFile}</p>
      )}
    </div>
  );
};

export default EventInput;
