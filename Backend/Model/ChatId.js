import mongoose from "mongoose";

const ChatId = mongoose.Schema({
    userid : {
        type : String,
        required : true,

    }
}) 

const chatId = mongoose.model("Chat", ChatId);

export default chatId;s