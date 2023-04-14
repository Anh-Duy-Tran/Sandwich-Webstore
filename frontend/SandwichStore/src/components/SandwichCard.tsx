import React from "react";
import { Sandwich } from "../context/reducer";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

interface SandwichCardProps {
  item: Sandwich;
}

export const SandwichCard: React.FC<SandwichCardProps> = ({ item }) => {
  
  
  return (
    <Card sx={{ width: "100%", maxWidth: 350, flexGrow: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center"}}>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  )
};
