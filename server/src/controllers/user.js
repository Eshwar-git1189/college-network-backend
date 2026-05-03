const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");

const cookieOptions = {
  httpOnly: true,
  secure: false, // Set to true in production
  sameSite: "Lax", // set None in production
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.loginThroughGmail = async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    let userExist = await User.findOne({ email });

    if (!userExist) {
      userExist = await User.create({
        googleId: sub,
        email,
        f_name: name,
        profilePic: picture,
      });
    }
    let jwttoken = jwt.sign(
      { userId: userExist._id },
      process.env.JWT_PRIVATE_KEY,
    );
    res.cookie("token", jwttoken, cookieOptions);
    res.status(200).json({
      user: userExist,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Google login failed",
      message: err.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password, f_name } = req.body;

    // Check if user already exists
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        error: "User already exists with this email",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // Create user
    const newUser = new User({
      email,
      password: hashedPassword,
      f_name,
    });

    await newUser.save();

    return res.status(201).json({
      success: "Yes",
      message: "User registered successfully",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist && (await bcryptjs.compare(password, userExist.password))) {
      let jwttoken = jwt.sign(
        { userId: userExist._id },
        process.env.JWT_PRIVATE_KEY,
      );
      res.cookie("token", jwttoken, cookieOptions);
      return res.json({
        message: "Logged in successfully",
        success: "true",
        userExist,
      });
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    const isExist = await User.findById(req.user._id);
    if (!isExist) {
      return res.status(400).json({ error: "User Doesnt exist" });
    }
    const updateData = await User.findByIdAndUpdate(isExist._id, user);

    const userData = await User.findById(req.user._id);
    res.status(200).json({
      message: "User updated successfully",
      user: userData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await User.findById(id);
    if (!isExist) {
      return res.status(400).json({ error: "No Such User Exist" });
    }
    return res.status(200).json({
      message: "User fetched successfully",
      user: isExist,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.logout = async (req, res) => {
  res
    .clearCookie("token", cookieOptions)
    .json({ message: "Logged out successfully" });
};
