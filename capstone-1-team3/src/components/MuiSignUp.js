import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ReactPhoneInput from 'react-phone-input-material-ui';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const defaultTheme = createTheme();

export default function SignUp(props) {
  const navigate = useNavigate();
  const {
    register,
    getValues,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const validation = {
    email: {
      required: {
        value: true,
        message: "Email is required.",
      },
    },
    password: {
      required: {
        value: true,
        message: "Password is required.",
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message:
          "Password must have at least 8 characters. It must contain at least a number, a lowercase letter and an uppercase letter.",
      },
    },
    rePassword: {
      required: {
        value: true,
        message: "Re-enter your password.",
      },
      validate: (value) =>
        value === getValues("password") ||
        "This does not match the password that you have entered.",
    },
    first: {
      required: false,
    },
    last: {
      required: false,
    },
    nric: {
      required: false,
    },
    address: {
      required: false,
    },
    dob: {
      required: false,
    },
    contact: {
      required: false,
    },
  };

  const onSubmit = (data) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    props.handleRegister(data);
    reset();
    alert(
      "Your registration is successful! You will be redirected to login now."
    );
    navigate("/login");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">Sign up</Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField type='text' id="first" label="First Name" name="first" required fullWidth autoFocus {...register('first', validation.first)}/>
                {errors.first && <p>{errors.first?.message}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type='text' id="last" label="Last Name" name="last" required fullWidth {...register('last', validation.last)}/>
                {errors.last && <p>{errors.last?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField type='email' id="email" label="Email Address" name="email" required fullWidth {...register('email', validation.email)}/>
                {errors.email && <p>{errors.email?.message}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type='text' id="nric" label="NRIC" name="nric" fullWidth {...register('nric', validation.nric)}/>
                {errors.nric && <p>{errors.nric?.message}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Date of Birth"/>
                </LocalizationProvider>
                {errors.dob && <p>{errors.dob?.message}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type='text' id="address" label="Address" name="address" fullWidth {...register('address', validation.address)}/>
                {errors.address && <p>{errors.address?.message}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <ReactPhoneInput defaultCountry={'sg'} component={TextField} id='contact'/>
                {errors.contact && <p>{errors.contact?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField type="password" id="password" label="Password" name="password" required fullWidth {...register('password', validation.password)}/>
                {errors.password && <p>{errors.password?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField type="password" id="rePassword" label="Re-enter Password" name="rePassword" required fullWidth {...register('rePassword', validation.rePassword)}/>
                {errors.rePassword && <p>{errors.rePassword?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email."/>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'}>Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
