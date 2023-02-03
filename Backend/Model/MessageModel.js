import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    senderId : {
        type : String,
        required : true,
    },
   receverId:{
    type : String,
    required : true,
   },
   message :{
    type: String , 
   },
   time:{
    type : Date,
    required : true,
   },

   status :{
    type: Boolean,
    require:true,
   }
}) 

const AdminModel = mongoose.model("Messages", AdminSchema);

export default AdminModel;