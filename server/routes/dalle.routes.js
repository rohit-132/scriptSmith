// // import express from "express";
// // import * as dotenv from "dotenv";
// // import { Configuration, OpenAIApi } from "openai";

// // dotenv.config();

// // const router = express.Router();

// // // Set up OpenAI API configuration
// // const config = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// // const openai = new OpenAIApi(config);

// // // Route to handle GET requests
// // router.get("/", (req, res) => {
// //   res.status(200).json({ message: "Hello from DALL.E Routes" });
// // });

// // // Route to handle POST requests
// // router.post("/", async (req, res) => {
// //   try {
// //     const { prompt } = req.body;

// //     // Check if the prompt is provided
// //     if (!prompt) {
// //       return res.status(400).json({ message: "Prompt is required" });
// //     }

// //     // Request to OpenAI API
// //     const response = await openai.createImage({
// //       prompt,
// //       n: 1,
// //       size: "1024x1024",
// //       response_format: "b64_json",
// //     });

// //     const image = response.data.data[0].b64_json;

// //     res.status(200).json({ photo: image });
// //   } catch (error) {
// //     console.error("Error generating image:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Something went wrong", error: error.message });
// //   }
// // });

// // export default router;

// import OpenAI from "openai"; // ✅ Correct import
// import express from "express";
// import * as dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// // ✅ Fix OpenAI Initialization
// const openai = new OpenAI({
//   apiKey:
//     "Make sure to watch the entire video in order get the FREE API - https://youtu.be/FNM8D3Nd-Ok",
//   baseURL: "https://api.sree.shop/v1", // ✅ Use your custom API URL
// });

// // ✅ Route to Generate Images
// router.post("/", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const response = await openai.images.generate({
//       model: "dall-e-3",
//       prompt,
//       n: 1,
//       size: "1024x1024",
//     });

//     res.status(200).json({ imageUrl: response.data[0].url });
//   } catch (error) {
//     console.error("OpenAI API error:", error);
//     res.status(500).json({ error: "Failed to generate image" });
//   }
// });

// export default router;
