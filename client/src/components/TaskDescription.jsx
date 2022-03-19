import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Paper,
  Box
} from "@mui/material";

const CardItem = (props) => {
  return (
    <Card sx={{width: "100%", mb: "8px"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.header}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export const TaskDescription = (props) => {
  return (
    <Paper elevation={2} >
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '25px'}}>
        <Typography variant="h3" sx={{mb: "16px"}}>Task Description</Typography>
        <CardItem header={'Title'} content={props.title} />
        <CardItem header={'Estimation'} content={props.estimation} />
        <CardItem header={'Criteria'} content={props.criteria} />
        <CardItem header={'Price'} content={props.price} />
        <CardItem header={'Description'} content={props.description} />
      </Box>
   </Paper>
  )
}