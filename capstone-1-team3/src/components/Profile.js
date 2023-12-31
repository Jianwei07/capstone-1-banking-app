import React from "react";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import {
  Grid, Avatar, Typography, createTheme, FormHelperText,
  ThemeProvider, Container, Box, CssBaseline, TextField, Button
} from '@mui/material';

const defaultTheme = createTheme();

const schema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required'),
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

function Profile(props) {
  const navigate = useNavigate();
  const { currentProfile, handleProfileUpdate, setIsLoggedIn } = props;
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: currentProfile.email[0],
      address: currentProfile.profile.address,
      fName: currentProfile.profile.fName,
      lName: currentProfile.profile.lName,
      nric: currentProfile.profile.nric,
      contactNumber: currentProfile.profile.contactNumber,
      password: currentProfile.profile.password,
      birthDate: dayjs(currentProfile.profile.birthDate),
    }
  });

  // Profile 
  // email, password, fName, lName, nric, address, birthDate, contactNumber

  const onSubmit = (data) => {
    console.log(data);
    handleProfileUpdate(data);
    alert("Your update has been saved. You can proceed to log out Now.");

  };

  const handleLogOut = () => {
    navigate("/");
    setIsLoggedIn(false);
    alert("Thank you for banking with us! You are now logged out.");
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
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h5" >
            Profile
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fName"
                  control={control}
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
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Email (Cannot be changed)"
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
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="password"
                      label="New Password"
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
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="password"
                      label="Confirm New Password"
                      variant="outlined"
                      error={!!errors.passwordConfirmation}
                      helperText={errors.passwordConfirmation?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} >
              Update
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleLogOut}
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>


  );
}

export default Profile;
