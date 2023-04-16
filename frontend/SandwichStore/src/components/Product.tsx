import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { StoreContext } from "../context/StoreProvider";

interface ProductProps {
  id: string;
}

export const Product: React.FC<ProductProps> = ({ id }) => {
  const { state, dispatch } = useContext(StoreContext);

  const sandwich = state.sandwiches.find((s) => s._id === id);

  return sandwich ? (
    <Container
      sx={{
        mt: 15,
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gap: 2,
      }}
    >
      <Box
        component="img"
        sx={{
          height: "90vh",
          objectFit: "cover",
          width: "100%",
        }}
        alt={sandwich.name}
        src={sandwich.image}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>

        <Typography variant="h2" sx={{ mb: 5 }}>
          {sandwich.name}
        </Typography>

        <Typography variant="h5">
          {sandwich.description}
        </Typography>

      </Box>
    </Container>
  ) : null;
};
