import mongoose from "mongoose";
mongoose.set('strictQuery',true)


    mongoose.connect("mongodb://localhost:27017",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
         family: 4    
    })

    mongoose.connection.on('connected',()=>{
        console.log("Database connected successfully");
    })

    mongoose.connection.on("error",(error)=>{
        console.log(error);
    })
