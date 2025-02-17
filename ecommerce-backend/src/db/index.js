import mongoose from 'mongoose'
import { DB_NAME } from '../constent.js'


// connected to Mongo Db data base 
const ConnectDb = async () => {
  // console.log(process.env.MONGODB_URL);
  
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
      // { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log(`\n MONGODB connected !! DB HOST : ${connectInstance.connection.host}`);
  } catch (error) {
    console.log(`DB->index.js \n Mongoose Connection FAILED : `, error);
    process.exit(1)
  }
}

export default ConnectDb