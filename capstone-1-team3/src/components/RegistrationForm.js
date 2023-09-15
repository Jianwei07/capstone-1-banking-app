import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import {
  FormControlLabel, Checkbox, Grid, Avatar, Typography, createTheme, FormHelperText,
  ThemeProvider, Container, Box, CssBaseline, TextField, Button
} from '@mui/material';

// Profile 
// email, password, fName, lName, nric, address, birthDate, contactNumber

const defaultTheme = createTheme();

const schema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and be at least 8 characters long'
    ),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  birthDate: yup.date().required('Date of Birth is required'),
  contactNumber: yup.string().required('Phone Number is required'),
  nric: yup
    .string()
    .required('NRIC is required')
    .matches(/^[A-Za-z]\d{7}[A-Za-z]$/, 'NRIC must start and end with a letter and contain 9 alphanumeric characters'),
  address: yup.string(),
});

function RegistrationForm(props) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (props.profileList[data.email]){
      reset();
      alert("Sign up failed, there is an existing account with the same email. "); 
      
    } else {
      props.handleRegister(data);
      reset();
      alert(
        "Your registration is successful! You will be redirected to login now."
      );
      navigate("/login");
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container sx={{
        margin: "0 0 0 0",
        minWidth: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center"
      }}>
        <CssBaseline />
        <Box
          sx={{
            maxWidth: "sm",
            minHeight: "100vh",
            marginY: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {/* <Container maxWidth="sm"> */}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" >
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      autoFocus
                      label="First Name"
                      variant="outlined"
                      error={!!errors.fName}
                      helperText={errors.fName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      error={!!errors.lName}
                      helperText={errors.lName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      variant="outlined"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="nric"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="NRIC"
                      variant="outlined"
                      error={!!errors.nric}
                      helperText={errors.nric?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="birthDate"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Date of Birth"
                        inputVariant="outlined"
                        slotProps={{ textField: { variant: 'outlined', error: !!errors.birthDate, helperText: errors.birthDate?.message } }}
                        disableFuture
                        sx={{ minWidth: "100%" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Address"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>

                <Controller
                  name="contactNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <PhoneInput

                      inputStyle={
                        errors.contactNumber ? {
                          width: '100%',
                          height: '56px',
                          padding: '10px',
                          paddingLeft: "50px",
                          fontSize: '14px',
                          border: '1px solid red',
                          borderRadius: '4px'
                        } :
                          {
                            width: '100%',
                            height: '56px',
                            padding: '10px',
                            paddingLeft: "50px",
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                          }}
                      country={'sg'}
                      {...field}
                    />
                  )}
                />
                <FormHelperText error={true} sx={{ ml: "14px" }}>{!!errors.contactNumber && errors.contactNumber?.message}</FormHelperText>

              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="password"
                      label="Password"
                      variant="outlined"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="passwordConfirmation"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      variant="outlined"
                      error={!!errors.passwordConfirmation}
                      helperText={errors.passwordConfirmation?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>

            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} >
              Sign Up
            </Button>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <Link to={"/login"}>Already have an account? Sign in</Link>
            </Box>
          </form>
          {/* </Container> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RegistrationForm;
