import { Box, Fab } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { ImageSlider } from '../../components/ImageSlider';
import LoginModal from '../../components/LoginModal';
import Navbar from '../../components/Navbar';
import { StoreMenu } from '../../components/StoreMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Product } from '../../components/Product';


export const ProductPage: React.FC = ({}) => {
  let product = useParams();

  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <LoginModal />
      <Product id={product.id ? product.id : ""}/>
      <Fab
        variant="extended"
        sx={{ mr: 3, mb: 2, position: "fixed", bottom: "0px", right: "0px" }}
      >
        <ShoppingCartIcon/>
        Cart
      </Fab>
    </Box>
  );
}