const mongoose=required('mongoose');
const dns = required("dns")
dns.setServer(["8.8.8","8.8.4.4"])
const connectDB = async () => {
  try {
    
    await mongoose.connect('mongodb+srv://sirishaamara24:sirisha6281088042@cluster0.tzhsey4.mongodb.net/');
    
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
