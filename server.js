const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Connect to the database
connectDb();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);

// View Engine
app.set("view engine", "hbs");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Handlebars Partial Configuration
const hbs = require("hbs");
hbs.registerPartials(path.join(__dirname, "/views/partials"));

// Routes
app.use('/api/register', require("./routes/registerRoutes"));
app.use('/api/login', require("./routes/loginRoutes"));
// app.use("/api/account", require("./routes/accountRoutes"));
// app.use("/api/parking", require("./routes/parkingRoutes"));
// app.use("/api/wallet", require("./routes/walletRoutes"));
// app.use("/api/booking", require("./routes/bookingRoutes"));
// app.use("/api/old-bookings", require("./routes/oldBookingRoutes"));

// Basic Routes
app.get("/", (req, res) => {
    res.send("Backend is Running!");
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});