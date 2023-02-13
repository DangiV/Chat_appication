import route from "./Routes/Routes.js";
import dotenv from "dotenv";
import path from "path";
import "./Db/Connection.js";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io"; //replaces (import socketIo from 'socket.io')
const app = express();
dotenv.config({
  path: path.resolve("./.env"),
});
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

const port = process.env.PORT;

io.on("connection", (socket) => {
  // //console.log("sockets",socket)
  //   getApiAndEmit(socket);
  socket.on("disconnect", () => {
    //console.log("Disconnected");
  });
  socket.on("private_send_message", (data) => {
    console.log(data)
     socket.to(data.senderid).emit("receive_message1", data.inputdata);
  });
});

const getApiAndEmit = (socket) => {
  const response = "response you need";
  socket.emit("FromAPI", response);
};

app.use(cors());
app.use(express.json());
app.use(route);

httpServer.listen(port, function () {
  console.log("Running on : ", port);
});
