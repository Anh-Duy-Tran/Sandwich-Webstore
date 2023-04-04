import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from "../icons/logo.svg";
import { Button, SxProps, Theme } from '@mui/material';
import { StoreContext } from '../context/StoreProvider';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const LoginButtonStyle : SxProps<Theme> = {
  color : "white",
  fontSize: "15px",
  ml: "auto",
  backgroundColor : "black",
  "&:hover": {
    backgroundColor : "black",
    textDecoration: "underline #FFFFFF"
  }
}
export default function Navbar() {

  const { state, dispatch } = React.useContext(StoreContext);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10
  });

  const handleLogin = () => dispatch({type: "open-login"});

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: trigger ? "rgba(255,255,255,0.7)" : "transparent"}}>
          <Toolbar>
            <img src={Logo} style={{ width: "200px" }} ></img>
            <Button sx={LoginButtonStyle} onClick={handleLogin}>Login</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}