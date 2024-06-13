const router = require("express").Router();
const User = require("./Models/User"); // Make sure the path is correct
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
    try {
        // Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Save user and respond
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (err) {
        console.error("Error during user registration:", err);
        res.status(500).json(err);
    }
});

// Login (you can implement this later)

module.exports = router;