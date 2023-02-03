import expres, { Router } from 'express'
import { AdminSignin, AdminSignup } from '../Controller/adminController.js';
import { AcceptRequest, DeleteRequest, getalluser ,getFriends,sendRequest,showRequest} from '../Controller/allUserController.js';
import { authoriceToken } from '../auth.js';
const route = Router(expres);

route.get('/',()=>{
    console.log("baba")
})
route.post('/Signup',AdminSignup);
route.post('/Signin',AdminSignin)
route.get('/getalluser',authoriceToken,getalluser)
route.post("/showRequest",authoriceToken,showRequest)
route.post("/sendeRequest",authoriceToken,sendRequest)
route.post("/DeleteRequest",authoriceToken,DeleteRequest)
route.post("/AcceptRequest",authoriceToken,AcceptRequest)
route.get('/getFriends',getFriends)
export default route;