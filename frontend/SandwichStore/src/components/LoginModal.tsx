import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StoreContext } from '../context/StoreProvider';

const theme = createTheme();

const LoginButtonStyle = {
  color : "white",
  backgroundColor : "black",
  mt: 3, 
  mb: 2,
  "&:hover": {
    backgroundColor : "black",
    textDecoration: "underline #FFFFFF"
  }
}

const SignIn = ({}) => {

  const handleSubmit = () => {};
  const handleSignup = () => {};

  return (
    <ThemeProvider theme={theme}>
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
          <Typography sx={{fontFamily: 'Futura', }} component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={LoginButtonStyle}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link sx={{ cursor: "pointer" }} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link sx={{ cursor: "pointer" }} onClick={handleSignup} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  bgcolor: 'background.paper',
  p: 4,
};

const LoginModal = () => {

  const { state, dispatch } = React.useContext(StoreContext);

  return (
    <div>
      <Modal
        open={state.openLogin}
        onClose={() => dispatch({ type: "close-login"})}
      >
        <Fade in={state.openLogin}>
          <Box sx={style}>
            <SignIn/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}



export default LoginModal;
