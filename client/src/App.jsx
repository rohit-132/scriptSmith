import Canvas from "./Canvas/index.jsx";
import Customizer from "./pages/Customizer.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Customizer from "./pages/Customizer.jsx";
// import SuggestionPage from "./pages/SuggestionPage.jsx";
// import Canvas from "./Canvas/index.jsx";

// function App() {
//   return (
//     <Router>
//       <main className="app transition-all ease-in">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/customizer"
//             element={
//               <>
//                 <Canvas />
//                 <Customizer />
//               </>
//             }
//           />
//           <Route path="/suggestions" element={<SuggestionPage />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import CanvasModel from "./Canvas"; // Import the correct component
// import Customizer from "./pages/Customizer.jsx";
// import Home from "./pages/Home.jsx";

// function App() {
//   return (
//     <main className="app transition-all ease-in">
//       <Home />
//       <CanvasModel /> {/* Make sure CanvasModel is used here */}
//       <Customizer />
//     </main>
//   );
// }

// export default App;
