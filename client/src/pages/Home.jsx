// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import state from "../store/index.js";
// import { useSnapshot } from "valtio";
// import { CustomButton } from "../components";
// import {
//   headContainerAnimation,
//   headContentAnimation,
//   headTextAnimation,
//   slideAnimation,
// } from "../config/motion.js";

// const Home = () => {
//   const snap = useSnapshot(state);
//   return (
//     <AnimatePresence>
//       {snap.intro && (
//         <motion.section className="home" {...slideAnimation("left")}>
//           <motion.header {...slideAnimation("down")}>
//             <img
//               src="./threejs.png"
//               alt="logo"
//               className="w-8 h-8 object-contain"
//             />
//           </motion.header>

//           <motion.div className="home-content" {...headContainerAnimation}>
//             <motion.div {...headTextAnimation}>
//               <h1 className="head-text">
//                 LET'S <br className="xl:block hidden" /> DO IT.
//               </h1>
//             </motion.div>
//             <motion.div
//               {...headContentAnimation}
//               className="flex flex-col gap-5"
//             >
//               <p className="max-w-md font-normal text-gray-600 text-base">
//                 Create your unique and exclusive shirt with our brand-new 3D
//                 customization tool.<strong>Unleash your imagination</strong>
//                 {""} and define your own style.
//               </p>
//               <CustomButton
//                 type="filled"
//                 title="Customize It"
//                 handleClick={() => (state.intro = false)}
//                 customStyles="w-fit px-4 py-2.5 font-bold text-sm"
//               />
//             </motion.div>
//           </motion.div>
//         </motion.section>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Home;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import state from "../store/index.js";
import { useSnapshot } from "valtio";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion.js";
import ThemeToggle from "@/components/ThemeToggle.jsx";
import App from "@/components/Carousel.jsx";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home max-h-screen overflow-y-auto no-scrollbar"
          {...slideAnimation("left")}
        >
          <ThemeToggle />
          {/* <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header> */}
          <br />

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="lg:text-9xl font-extrabold text-orange-500">
                LET'S <br className="xl:block hidden" /> CUSTOMIZE
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md text-1xl text-gray-600 text-lg">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <br />
              <br />
              <h2 className=" text-5xl font-bold text-amber-500">
                Why Choose Us?
              </h2>
              <ul className="  list-disc pl-5 space-y-4 text-gray-600 text-2xl">
                <li>
                  <strong>Personalized to Perfection </strong>
                </li>
                <li>
                  <strong>Effortless Customization </strong>
                </li>
                <li>
                  <strong>Print with Precision </strong>
                </li>
                <li>
                  <strong>Versatile Styles for Every Occasion </strong>
                </li>
                <li>
                  <strong>Bulk Orders & Team Apparel </strong>
                </li>
              </ul>
              <br />
              <br />

              <h2 className="text-4xl font-bold text-orange-500">
                Our Goal: "AI-Powered 3D Swag"
              </h2>
              <p className=" text-lg text-gray-600 ">
                Our mission is to empower users with an interactive and dynamic
                3D Swag Customization App that blends cutting-edge AI with
                immersive 3D technology. Whether you're an individual looking to
                personalize your <strong>virtual swag</strong> or a brand aiming
                to create <strong>unique merchandise</strong> , our platform
                offers a seamless experience.
              </p>
              <br />

              <ul className="list-disc pl-5 space-y-4 text-gray-600 text-lg">
                <li>
                  Digital-first design approach reduces the carbon footprint of
                  physical prototyping.
                </li>
                <li>
                  {" "}
                  Made in India initiative supports local talent, technology,
                  and innovation.
                </li>
                <li>
                  {" "}
                  Encouraging responsible swag creation by promoting on-demand
                  and sustainable merchandising.
                </li>

                <li> Experience smooth animations with Framer Motion</li>
              </ul>

              <br />
              <p className=" text-2xl text-gray-600 ">
                Join us in shaping the future of sustainable, AI-driven swag
                customization—because creativity should never come at the
                planet’s expense. 🌏
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

              {/* <App /> */}
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
