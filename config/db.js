const mongoose = require('mongoose');
const config = require('config');
// const db = "mongodb+srv://snowman:19901120snowmanstar@snowman.5ounpff.mongodb.net/test";
const db = "mongodb://localhost:27017/lotto"

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
