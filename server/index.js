import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then ( () => {
        console.log("mongodb is connected");
    }) 
 .catch((err) => {
    console.log("err");
 });

const app = express();
// mdjohnson@123
app.listen(3000, () => {
    console.log("server is running 3000");
});
// mongodb+srv://kumardebananda111:<password>@cluster0.cvn1vov.mongodb.net/
// mongodb+srv://kumardebananda111:mdjohnson@789@cluster0.cvn1vov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



// mongodb+srv://kumardebananda111:KdslvLFUbsw0b0Wo@cluster0.mzle3jy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0