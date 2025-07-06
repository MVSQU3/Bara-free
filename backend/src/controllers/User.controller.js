import User from "../models/User.Model.js";

export const profile = async (req, res) => {
  try {
    const id = req.user.userId;
    const user = await User.findById(id);
    return res.json(user);
  } catch (error) {
    console.log("profile error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const UserInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select([
      "nom",
      "prenom",
      "age",
      "numero",
      "email",
      "compte",
      "profile",
    ]);

    return res.json(user);
  } catch (error) {
    console.log("UserInfo error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({ compte: "freelance" });
    return res.json({ message: "liste des Utilisateur", user });
  } catch (error) {
    console.log("register error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    return res.json(user);
  } catch (error) {
    console.log("register error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
