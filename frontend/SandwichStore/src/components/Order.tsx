import { Button, Container, Snackbar, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreProvider';

export const Order: React.FC = ({}) => {
  
  const { state, dispatch } = useContext(StoreContext);
  
  return (
    <Container  sx={{ mt: 15, mb: 20 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "40px", mb: 5 }}>
        ORDER
      </Typography>
      {
        state.orders.map(
          order => {
            console.log(order);
            return (
              <>
                <Typography>
                  {order._id} --- {order.status}
                </Typography>
                <Button variant='contained'>
                  Abc
                </Button>
              </>
            )
          }
        )
      }
      <Snackbar
          open={state.snackOpen}
          onClose={() => dispatch({ type : "close-snackbar" })}
          message= {state.snackMessage}
        />
    </Container>
  );
}