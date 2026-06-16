const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Atlas conectado");
  } catch (error) {
    console.error("Erro MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;