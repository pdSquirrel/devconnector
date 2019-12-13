import mongoose from 'mongoose';

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
