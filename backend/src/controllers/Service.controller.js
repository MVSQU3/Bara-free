import Service from "../models/Service.Model.js";

export const createService = async (req, res) => {
  try {
    const { title, description, price, tags, userId } = req.body;
    const service = await new Service({
      title,
      description,
      price,
      tags,
      userId: req.user.userId,
    }).save();

    return res.json({ message: "Offre mise en ligne", service });
  } catch (error) {
    console.log("register error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getAllServices = async (req, res) => {
  try {
    const service = await Service.find();
    return res.json(service);
  } catch (error) {
    console.log("register error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await Service.findById(id).populate(
      "userId",
      "nom email numero"
    );
    return res.json(service);
  } catch (error) {
    console.log("register error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
