const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 3003;
const cors = require("cors");
const connectDB = require("./config/db");
// Routes variable
const mainRoutes = require("./routes/mainRoutes");
const gameRoutes = require("./routes/gameRoutes");

// use .env file in config folder
dotenv.config({ path: "./config/.env" });

// connect to Database
connectDB();

app.use(cors());

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Routes where the Server is listening
app.use("/", mainRoutes);
app.use("/newGame", gameRoutes);

// Listen to Database
app.listen(port, () => console.log(`Server running on port ${port}`));
