import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",        // ← Majuscule pour le modèle
      required: true,     // ← "required", pas "require"
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",        // ← même ici, majuscule
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
