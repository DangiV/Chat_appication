import route from "./Routes/Routes.js";

import  dotenv from 'dotenv'
import path from 'path'
import './Db/Connection.js'
import mongoose from "mongoose";
import cors from "cors"
import { Server } from "socket.io";
const express =require('express')
const io = new Server(server);
io.listen(3000);

dotenv.config({
    path : path.resolve('./.env')
})

console.log(dotenv);

const app  = express();
const port = process.env.PORT;
app.use(cors())
app.use(express.json());
app.use(route);


app.listen(port,  () => {
    console.log(`Server running at http://localhost:${port}`);
  });