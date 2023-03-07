const mongoose=require("mongoose");
require("colors");

const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery', false);
        const url = process.env.MONGO_URI;
        const conn = mongoose.connect(url,{
          useUnifiedTopology:true,
          useNewUrlParser: true,
        })
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

module.exports= connectDB;