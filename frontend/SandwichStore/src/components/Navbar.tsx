import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from "../icons/logo.svg";

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

export default function Navbar() {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: trigger ? "rgba(255,255,255,0.7)" : "transparent"}}>
          <Toolbar>
            <img src={Logo} style={{ width: "200px" }} ></img>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}