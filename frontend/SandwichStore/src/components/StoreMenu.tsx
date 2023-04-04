import { Container, Typography } from '@mui/material';

import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreProvider';



export const StoreMenu: React.FC = ({}) => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <Container sx={{ mt: 7, mb: 20 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "40px"  }}>
          MENU
        </Typography>
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
      </Container>
  );
}