import AdminModel from "../Model/AdminModel.js";
import RequestModal from "../Model/RequestModal.js";
import FriendModel from "../Model/FriendsModal.js";
import messageModel from "../Model/MessageModel.js";

//Get all user controller
export const getalluser = async (req, res) => {
  let uid = req.User._id;
  try {
    //console.log(uid);
    let data = await RequestModal.find({ senderId: uid });
    data = data.map((d1) => d1.userid);
    data.push(uid);
    const alldata = await AdminModel.find({ _id: { $nin: data } });
    res.json({
      data: alldata,
    });
  } catch (error) {
    console.log(error);
  }
};
export const sendRequest = async (req, res) => {
  let uid = req.User._id;
  let sendid = req.body.sendid;

  //console.log(req.User);

  let data = {
    senderId: uid,
    userid: sendid,
    receiver: req.body.name,
    sendername: req.User.fname + " " + req.User.lname,
  };
  await RequestModal.create(data);
  res.json({
    message: "request send",
  });
};

//Showing request to user how many request he/ she have controller

export const showRequest = async (req, res) => {
  let uid = req.User._id;
  try {
    const alldata = await RequestModal.find({ userid: uid });
    res.json({
      data: alldata,
    });
  } catch (error) {
    console.log(error);
  }
};

//Delete request user controller

export const DeleteRequest = async (req, res) => {
  let uid = req.body.id;
  //console.log({ uid });
  try {
    //console.log(uid);
    let data = await RequestModal.deleteOne({ _id: uid });
    //console.log(data);
    res.json({
      data: "alldata",
    });
  } catch (error) {
    console.log(error);
  }
};

//Accept request of user which he / she recived

export const AcceptRequest = async (req, res) => {
  let uid = req.body.id;
  let id = req.User._id;
  //console.log("user id name is is not worming ", req.User);
  try {
    // let data1 = await RequestModal.deleteOne({_id:id});
    // //console.log("removed id :-");
    let data = await FriendModel.create({
      userid: uid,
      friendId: id,
      fidname: req.body.name,
      uidname: req.User.fname,
      status: true,
    });
    // //console.log(data)
    res.json({
      data: "data inserted",
    });
  } catch (error) {
    console.log(error);
  }
};

//controller to display  friend list on ui

export const getFriends = async (req, res) => {
  try {
    let id = req.User._id;
    let Newdata = await FriendModel.find({
      $or: [{ userid: id }, { friendId: id }],
      userid: {$ne :id},
    });
    res.status(200).json(Newdata);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    let uid = req.User._id;
    let data = await AdminModel.updateOne(
      { _id: uid },
      { $set: { chatId: req.body.chatId } }
    );
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
 export const findchatid=async(req,res)=>{
  let uid = req.User;
  let data=await AdminModel.findOne({_id:req.query.id})
  //console.log(data)
  res.status(200).json(data);
 }


 //insert message to database which user send to anyone

 export const addmessage = async(req,res) =>{
  let uid = req.User._id
  console.log(uid)
  let data=await messageModel.create({
    senderId: req.User._id,
    receverId: req.body.chatId,
    message: req.body.message,
    status: req.body.status
    
  })
  console.log(data)
  res.status(200).json(data);
 }


 // show all message of user which is store in database 

 export const getmessage = async(req,res) => {
  console.log(req)
  let data=await messageModel.create({
    
  })
  console.log(data)
  res.status(200).json(data);
 }
