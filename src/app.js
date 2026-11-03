import express from "express";
import cors from "cors";

import movieRoutes from "./routes/movieRoutes.js";
import actorRoutes from "./routes/actorRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import relationRoutes from "./routes/relationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Movie Platform API is running!",
  });
});

app.use("/api/movies", movieRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/relations", relationRoutes);

export default app;
