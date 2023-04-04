import React, { useContext } from 'react'
import Navbar from '../../components/Navbar';
import { Container, Typography } from '@mui/material';
import { ImageSlider } from '../../components/ImageSlider';
import { StoreContext } from '../../context/StoreProvider';



export const StoreFront: React.FC = ({}) => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <>
      <Navbar/>
      <ImageSlider/>
      <Container sx={{height: "1000px" }}>
        {
          state.sandwiches.map(
            sandwich => {
              console.log(sandwich);
              return (
                <>
                  <Typography>
                    {sandwich.name}
                  </Typography>
                </>
              )
            }
          )
        }
        <Typography>
          Cua hang banh mi Quyen Tran
        </Typography>
      </Container>
    </>
  );
}