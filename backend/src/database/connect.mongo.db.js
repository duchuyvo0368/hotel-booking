 

const mongoose = require("mongoose");
const logger = require("../middleware/winston.logger");

const connectionString = process.env.MONGO_URI;
mongoose.set("strictQuery", false);

const connectDatabase = async () => {
  try {
     await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connection established to MongoDB database successfully!');
  } catch (error) {
    logger.error('Error connecting to MongoDB: ', error);
  }
};

module.exports = connectDatabase;
