import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    userid : {
        type : String,
        required : true,

    },
    uidname : {
        type : String,
        required : true,
    },
   friendId:{
    type : String,
    required : true,

   },
   fidname : {
    type : String,
    required : true,
   },
   status :{
    type: Boolean,
    require:true,
   }
}) 

const FriendModel = mongoose.model("Friends", AdminSchema);

export default FriendModel;