import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
// Link, 
import { useForm } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import ReactPhoneInput from 'react-phone-input-material-ui';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp(props) {

  const navigate = useNavigate();
  const { register, getValues, formState: { errors }, reset, handleSubmit } = useForm();

  const validation = {
    email: {
      required: {
        value: true,
        message: 'Email is required.'
      }
    },
    password: {
      required: {
        value: true,
        message: 'Password is required.'
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message: 'Password must have at least 8 characters. It must contain at least a number, a lowercase letter and an uppercase letter.'
      }
    },
    rePassword: {
      required: {
        value: true,
        message: 'Re-enter your password.'
      },
      validate: (value) => value === getValues('password') || 'This does not match the password that you have entered.'
    },
    first: {
      required: false
    },
    last: {
      required: false
    },
    nric: {
      required: false
    },
    address: {
      required: false
    },
    dob: {
      required: false
    },
    contact: {
      required: false
    }
  };




  const OnSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    const data = new FormData(event.currentTarget);
    props.handleRegister(data);
    reset();
    alert('Your registration is successful! You will be redirected to login now.');
    navigate('/login');
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(OnSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register('first', validation.first)}
                />
                {errors.first && <p>{errors.first?.message}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  {...register('last', validation.last)}
                />
                {errors.last && <p>{errors.last?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register('email', validation.email)}
                />
                {errors.email && <p>{errors.email?.message}</p>}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="nric"
                  label="NRIC"
                  name="nric"
                  autoComplete="NRIC"
                  {...register('nric', validation.nric)}
                />
                {errors.nric && <p>{errors.nric?.message}</p>}
              </Grid>

              

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>

                  <DatePicker label="Date of Birth"

                    {...register('dob', validation.dob)} />
                  
                </LocalizationProvider>
                {errors.dob && <p>{errors.dob?.message}</p>}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                  {...register('address', validation.address)}
                />
                {errors.address && <p>{errors.address?.message}</p>}
              </Grid>

              <Grid item xs={12} sm={6}>
                
                <ReactPhoneInput
                  defaultCountry={'sg'}
                  component={TextField}
                  id='contact'
                  {...register('contact', validation.contact)}

                />
                {errors.contact && <p>{errors.contact?.message}</p>}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('password', validation.password)}
                />
                {errors.password && <p>{errors.password?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="Re-enter Password"
                  type="password"
                  id="repassword"
                  autoComplete="re-enter-password"
                  {...register('rePassword', validation.rePassword)}
                />
                {errors.rePassword && <p>{errors.rePassword?.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
