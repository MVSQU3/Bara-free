import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://paulkevinb:cGLBKIh6CjK123zg@cluster0.0l4ycfe.mongodb.net/BaraFree?retryWrites=true&w=majority&appName=Cluster0"
      "mongodb://localhost:27017/BaraFree"
    );
    console.log("Connection à la db reussite");
  } catch (error) {
    console.error("Erreur connexion MongoDB:", error);
    process.exit(1);
  }
};
