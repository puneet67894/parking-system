const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../model/usermodel");

// POST /api/register
router.post(
    "/",
    asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Please login." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        if (user) {
            res.status(201).json({
                message: "User registered successfully!",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
        } else {
            res.status(500).json({ message: "Error creating user. Please try again." });
        }
    })
);

module.exports = router;