import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt.jsx";
import Backdrop from "./Backdrop.jsx";
import CameraRig from "./CameraRig.jsx";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;

// import React, { useEffect } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { Environment, Center } from "@react-three/drei";
// import Shirt from "./Shirt.jsx";
// import Backdrop from "./Backdrop.jsx";
// import CameraRig from "./CameraRig.jsx";

// const CanvasModel = () => {
//   const { gl } = useThree(); // Access the WebGL renderer

//   useEffect(() => {
//     const canvas = gl.domElement; // Get the canvas element

//     const handleContextLost = (event) => {
//       event.preventDefault();
//       console.error("WebGL context lost");

//       // Optionally notify the user
//       alert("WebGL context lost. Please reload the page.");

//       // Force the renderer to lose context
//       gl.forceContextLoss();
//       gl.context = null;
//     };

//     const handleContextRestored = () => {
//       console.log("WebGL context restored");

//       // Re-initialize or restore the scene, if needed
//       // e.g., initScene();
//     };

//     canvas.addEventListener("webglcontextlost", handleContextLost, false);
//     canvas.addEventListener(
//       "webglcontextrestored",
//       handleContextRestored,
//       false
//     );

//     // Clean up event listeners on component unmount
//     return () => {
//       canvas.removeEventListener("webglcontextlost", handleContextLost);
//       canvas.removeEventListener("webglcontextrestored", handleContextRestored);
//     };
//   }, [gl]);

//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 0, 0], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       className="w-full max-w-full h-full transition-all ease-in"
//     >
//       <ambientLight intensity={0.5} />
//       <Environment preset="city" />
//       <CameraRig>
//         <Backdrop />
//         <Center>
//           <Shirt />
//         </Center>
//       </CameraRig>
//     </Canvas>
//   );
// };

// export default CanvasModel;
