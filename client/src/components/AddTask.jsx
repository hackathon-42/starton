import { Typography, Box, TextField, Button } from "@mui/material";

import React from "react";
import { useForm, Controller } from "react-hook-form";

export const AddTask = (props) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // create a new task github
  };


  const DefaultValue =  {
    title: "[FRONT] [REACTJS] Améliorer les performances de rendu de l'application",
    criteria: "La liste des photos de cuisine s'affiche plus rapidement",
    description:
      "Mettre en place un lazy loading au scroll afin d'afficher les photos en quantité limitée progressivement",
    estimation: "1 week",
    price: "2000",
    currency: 'BUSD',
    contact: 'client@chain.com',
    state: 'todo'
  }

  return (
    <Box sx={{ minWidth: '800px', mt: 8 }} >
      <Typography textAlign="center" variant="h2" sx={{ mb: 4 }}>
        Create Task
      </Typography>

      <Box display="flex" flexDirection="column">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column">
            <Controller
              render={({ field }) => (
                <TextField
                  label="Title"
                  variant="outlined"
                  defaultValue={DefaultValue.title}
                  sx={{ ml: "20%", mr: "20%", mb: "3%" }}
                  {...field}
                />
              )}
              name="title"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  multiline
                  label="Criteria"
                  variant="outlined"
                  defaultValue={DefaultValue.criteria}
                  sx={{ ml: "20%", mr: "20%", mb: "3%" }}
                  {...field}
                />
              )}
              name="criteria"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  label="Estimation"
                  variant="outlined"
                  defaultValue={DefaultValue.estimation}
                  sx={{ ml: "20%", mr: "20%", mb: "3%" }}
                  {...field}
                />
              )}
              name="estimation"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  label="Price"
                  variant="outlined"
                  defaultValue={DefaultValue.price}
                  sx={{ ml: "20%", mr: "20%", mb: "3%" }}
                  {...field}
                />
              )}
              name="price"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  multiline
                  minRows={4}
                  label="Description"
                  variant="outlined"
                  defaultValue={DefaultValue.description}
                  sx={{ ml: "20%", mr: "20%", mb: "3%" }}
                  {...field}
                />
              )}
              name="description"
              control={control}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mb: "18px" }}>
              <Button variant="contained" type="submit" sx={{width: "50%", backgroundColor: '#007FFF' }} onClick={props.handleListingTask}>
                CREATE
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
