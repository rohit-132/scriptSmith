import { useState, useEffect } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [placeholderText, setPlaceholderText] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [requests, setRequests] = useState({
    faizan: false,
    shlok: false,
  });

  const placeholder = "Event Suggestions";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < placeholder.length) {
        setPlaceholderText(placeholder.substring(0, index + 1));
        index++;
      } else {
        index = 0;
      }
      setTimeout(typeWriter, 200);
    };
    typeWriter();
  }, []);

  // Price slider initialization
  useEffect(() => {
    const slider = document.getElementById("price-range-slider");
    if (slider) {
      noUiSlider.create(slider, {
        start: [140, 300],
        range: { min: 500, max: 2000 },
        connect: true,
        tooltips: true,
        step: 1,
        pips: { mode: "count", values: 5, density: 10 },
        format: {
          to: (value) => "₹" + Math.round(value),
          from: (value) => Number(value.replace("₹", "")),
        },
      });
    }

    return () => {
      if (slider) slider.noUiSlider?.destroy();
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const sendRequest = (user) => {
    setRequests((prev) => ({ ...prev, [user]: true }));
  };

  const toggleSize = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: prev[productId] === size ? null : size,
    }));
  };

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 min-h-screen">
      {/* Theme Toggle */}
      <div className="flex justify-start items-center p-4">
        <button
          onClick={toggleTheme}
          className="bg-white-800 text-white p-2 rounded-full"
        >
          <img
            id="themeIcon"
            src={isDarkMode ? "moon.png" : "sun.png"}
            alt="Toggle Theme"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Search & Upload */}
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder={placeholderText}
            className="bg-gray-800 text-white placeholder-gray-400 p-3 rounded-md w-96 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
          />
          <label className="cursor-pointer">
            <img src="cloud-computing.png" alt="Upload" className="w-10 h-10" />
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>
      </div>

      {/* User List */}
      <div
        className="absolute left-0 top-1/2 h-full overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4"
        style={{
          width: 400,
          marginTop: "10%",
          marginLeft: 30,
          transform: "translateY(-50%)",
        }}
      >
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {["faizan", "shlok"].map((user) => (
            <li key={user} className="py-3 sm:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src={user === "faizan" ? "letter-f.png" : "letter-s.png"}
                  className="w-8 h-8 rounded-full"
                  alt="Avatar"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {user === "faizan" ? "Faizan Ahemad" : "Shlok Kulkarni"}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Example@gmail.com
                  </p>
                </div>
                <span
                  className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    user === "faizan"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                      : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300"
                  }`}
                >
                  <span
                    className={`w-2 h-2 me-1 rounded-full ${
                      user === "faizan" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {user === "faizan" ? "Available" : "Busy"}
                </span>
                <button
                  onClick={() => sendRequest(user)}
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    user === "faizan"
                      ? `${
                          requests.faizan ? "bg-black" : "bg-green-500"
                        } text-white`
                      : "bg-red-500 text-white opacity-50 cursor-not-allowed"
                  }`}
                  disabled={user !== "faizan" || requests.faizan}
                >
                  {requests[user]
                    ? "Request Sent"
                    : user === "faizan"
                    ? "Collaborate"
                    : "Unavailable"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Carousel */}
      <div className="flex justify-center mt-4">
        <h2
          className="text-2xl"
          style={{ fontFamily: "calibri", fontSize: 40 }}
        >
          AVAILABLE STYLES
        </h2>
      </div>

      {/* Loading Button */}
      <button
        className="bg-black text-white font-bold py-2 px-4 rounded inline-flex items-center"
        style={{ marginLeft: "42%", marginBottom: 40 }}
        disabled
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        STYLING YOUR EVENT
      </button>

      {/* Products Slider */}
      <section className="px-12">
        {/* Carousel implementation similar to original HTML */}
        {/* Implement using state for active slide and map through products */}
      </section>

      {/* Price Range */}
      <div className="flex justify-center mt-4">
        <h2
          className="text-2xl"
          style={{ fontFamily: "calibri", fontSize: 15, fontWeight: "bold" }}
        >
          YOUR PRICING BUDGET
        </h2>
      </div>
      <div
        id="price-range-slider"
        className="bg-gray-800 sm:my-2 my-2 w-1/4 mx-auto"
        style={{ marginRight: "40%", color: "grey" }}
      />

      <button
        className="bg-black text-white p-3 rounded-md flex items-center justify-center w-1/4 hover:bg-gray-700 transition"
        style={{ width: 110, marginLeft: "65%", marginTop: "-2.5%" }}
      >
        MATCH
      </button>

      {/* Cart Button */}
      <div className="flex justify-center mt-4 relative">
        <button
          className="bg-black text-white p-3 rounded-md flex items-center justify-center hover:bg-gray-700 transition relative"
          style={{ width: 400, marginLeft: "36%" }}
        >
          BUY SELECTED ITEMS ({cartCount})
          <span className="absolute top-0 left-0 w-3 h-3 bg-red-500 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default App;
