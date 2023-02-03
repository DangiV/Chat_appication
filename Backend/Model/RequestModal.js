import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    userid : {
        type : String,
        required : true,

    },
   senderId:{
    type : String,
    required : true,

   },
   receiver:{
    type : String,
    required : true,
   },
   sendername:{
    type : String,
    required : true,
   }

//    time:{
//     type : Date,
//     required : true,
//    }


}) 

const RequestModal = mongoose.model("Request", AdminSchema);

export default RequestModal;