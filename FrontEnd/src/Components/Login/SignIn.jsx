import { useState, useEffect } from "react";
import { postman } from "../../Config/helper";
import { useNavigate } from 'react-router-dom';

import { Avatar, Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Signup = () => {
    const initialValues = {
   
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try {
      let details = await postman("post","/Signin",formValues)
      // console.log("Details of user login is : - " , details.data.token);
      alert("Login successfully")
      localStorage.setItem("login", details.data.token)
      navigate('/Deshboard');

    } catch (error) {
     alert("Please Check your email and password"); 
    }


  };

  useEffect(() => {
    let login = localStorage.getItem('login')
    if(login){
      navigate('/Deshboard')
    }
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password cannot exceed more than 10 characters";
    }
   
    return errors;
  };

  const paperStyle = { padding: "30px 20px", width: "420px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const labelStyle = { marginTop: "10%" };


  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign In</h2>
            <Typography variant="cation">
              Please fill this form to create account !
            </Typography>
          </Grid>
          
            <form onSubmit={handleSubmit}>
              {/* <h1>Register Form</h1> */}
                
                  <TextField
                    label="email"
                    variant="standard"
                    type="text"
                    name="email"
                    placeholder="enter email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                <p style={{color:'red'}}>{formErrors.email}</p>

                  <TextField
                    label="password"
                    variant="standard"
                    type="password"
                    name="password"
                    placeholder="enter password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                <p style={{color:'red'}}>{formErrors.password}</p>

                <Button
              type="submit"
              variant="contained"
              color="primary"
              style={labelStyle}
            >
              Sign-In
            </Button>              
            </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
