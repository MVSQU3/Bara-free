import Message from "../models/Message.Model.js";

export const sendMessage = async (req, res) => {
  try {
    const { senderId, content } = req.body;
    const { id: receiverId } = req.params;
    const message = await new Message({
      senderId: req.user.userId,
      content,
      receiverId,
    }).save();
    res.json(message);
  } catch (error) {
    console.log("Erreur de sendMessage: ", error);
    return res.json({ message: "Intenal server Error" });
  }
};

export const getAllMessage = async (req, res) => {
  try {
    const senId = req.user.userId;
    console.log("log de senId", senId);

    const { recId } = req.params;
    console.log("log de recId", recId);

    const message = await Message.find({
      $or: [
        { senderId: senId, receiverId: recId },
        { senderId: recId, receiverId: senId },
      ],
    }).populate("senderId receiverId", "_id email");
    console.log(message);

    res.json(message);
  } catch (error) {
    console.log("Erreur de getAllMessage: ", error);
    return res.json({ message: "Intenal server Error" });
  }
};
