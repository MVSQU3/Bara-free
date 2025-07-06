import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Non autorisé" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    console.log("req.user: ", req.user);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalide" });
  }
};
