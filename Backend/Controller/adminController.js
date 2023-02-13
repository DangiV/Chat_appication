import { generateToken } from "../auth.js";
import AdminModel from "../Model/AdminModel.js";
import bcrypt from 'bcrypt'


//User Register controllwer 


export const AdminSignup = async (req, res) => {
    const { fname, lname, number, email, password } = req.body;
    // //console.log(req.body.password)
    const hashPassword = await bcrypt.hash(req.body.password, 10)

    // //console.log(req.body)
    try {
        const avilable = await AdminModel.findOne({ email: email })
        if (avilable) {
            res.status(400).json("User email already exists")
        }
        else {
            const userData = AdminModel.create({ fname: fname, lname: lname, email: email, password: hashPassword , number: number })
            res.status(200).json({"message":"User registered successfully"})
        }
    } catch (error) {
        //console.log(error);
    }
}


//User Login controller 


export const AdminSignin = async (req,res) =>{
    const {email , password} = req.body

    try {
        const validUser = await AdminModel.findOne({email : email})
        // //console.log(password,  validUser.password)
        const password1 = await bcrypt.compare(password,  validUser.password)
        {
            if(password1){
             let Newtoken =    generateToken(validUser)

             const newtokrn = {
                token : Newtoken,
             }

            //  localStorage.setItem("Token :- ",token)
            
                res.status(200).json(newtokrn)
            }
            else{
                res.status(400).json("Invalid user email or password")
            }
        }
    } catch (error) {
        //console.log(error);
    }
}