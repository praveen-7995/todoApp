const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const todoRoutes = require("./routes/todoRoutes");

require("dotenv").config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
