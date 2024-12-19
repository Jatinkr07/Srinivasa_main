const mongoose = require("mongoose");

const dbConfig = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://Bakchod:Iamphenomenol1@cluster0.qmqhyta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connected!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConfig;
