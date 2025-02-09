// import express from "express";
// import * as dotenv from "dotenv";
// import cors from "cors";

// import dalleRoutes from "./routes/dalle.routes.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json({ limig: "50mb" }));

// app.use("/api/v1/dalle", dalleRoutes);

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from DALL.E" });
// });

// app.listen(8080, () => console.log("Server has started on port 8080"));

import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js"; // ✅ Import Chat API Routes

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Default Route (✅ Fixes "Cannot GET /" issue)
app.get("/", (req, res) => {
  res.send(
    "🚀 Welcome to the OpenAI Chat API! Use /api/chat to send messages."
  );
});

// Use Chat Route
app.use("/api", chatRoutes); // ✅ Now available at `/api/chat`

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
