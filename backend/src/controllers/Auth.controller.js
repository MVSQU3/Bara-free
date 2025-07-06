import User from "../models/User.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { nom, prenom, age, email, numero, password, compte } = req.body;
    if (!nom || !prenom || !age || !email || !numero || !password || !compte) {
      return res.json({
        message: `Les champs ${nom}, ${prenom}, ${age}, ${email}, ${numero}, ${password}, ${compte} sont require`,
      });
    }

    if (password.length < 6) {
      return res.json({
        message: "Mot de passe trop court 8 caratère minimum",
      });
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) return res.json({ message: "cet email est dèja utiliser" });

    const hash = await bcrypt.hash(password, 10);
    const user = await new User({ ...req.body, password: hash }).save();

    return res.json({ user });
  } catch (error) {
    console.log("register error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: `Les champs ${email}, ${password} sont require`,
      });
    }
    const user = await User.findOne({ email });
    console.log("log user", user);

    const isValidPassword = bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.json({ message: "mot de passe incorrect" });
    }
    const token = jwt.sign(
      { userId: user._id, nom: user.nom, compte: user.compte },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    return res.json({ message: "Connecté", token });
  } catch (error) {
    console.log("login error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
