import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { ImageSlider } from "../../components/ImageSlider";
import { StoreMenu } from "../../components/StoreMenu";
import LoginModal from "../../components/LoginModal";
import { Box, Fab } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const StoreFront: React.FC = ({}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <LoginModal />
      <ImageSlider />
      <StoreMenu />
      <Fab
        variant="extended"
        sx={{ mr: 3, mb: 2, position: "fixed", bottom: "0px", right: "0px" }}
      >
        <ShoppingCartIcon/>
        Cart
      </Fab>
    </Box>
  );
};
