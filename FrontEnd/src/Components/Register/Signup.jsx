import { useState, useEffect } from "react";
import { postman } from "../../Config/helper";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Signup = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    number: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const paperStyle = { padding: "30px 20px", width: "420px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const labelStyle = { marginTop: "10%" };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      let data = await postman("post", "/Signup", formValues);
      console.log(data);
      alert("User registeed successfully");

      //  formValues("");
      navigate("/Sigin");
    } catch (e) {
      alert("comething went wrong");
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      errors.fname = "first name is required!";
    }
    if (!values.lname) {
      errors.lname = "last name is required!";
    }
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
    if (!values.number) {
      errors.number = "number is required";
    } else if (values.number.length < 10) {
      errors.number = "number must be 10 digit";
    } else if (values.number.length > 10) {
      errors.number = "number cannot exceed more than 10 digit";
    }
    return errors;
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="cation">
              Please fill this form to create account !
            </Typography>
          </Grid>

          <form onSubmit={handleSubmit}>
            {/* <h1>Register Form</h1> */}
            <TextField
              label="first name"
              variant="standard"
              type="text"
              name="fname"
              autoComplete="off"
              placeholder="enter first name"
              value={formValues.username}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.fname}</p>
            <div className="field">
              <TextField
                label="Last Name"
                variant="standard"
                type="text"
                name="lname"
                autoComplete="off"
                placeholder="enter last name"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.lname}</p>

            <TextField
              label="email"
              variant="standard"
              type="text"
              name="email"
              placeholder="enter email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.email}</p>

            <TextField
              label="password"
              variant="standard"
              type="password"
              name="password"
              placeholder="enter password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.password}</p>

            <TextField
              label="number"
              variant="standard"
              // type="number"
              name="number"
              placeholder="enter number"
              value={formValues.number}
              onChange={handleChange}
            />

            <p style={{ color: "red" }}>{formErrors.number}</p>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={labelStyle}
            >
              Sign-Up
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
