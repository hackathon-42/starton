import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { CardTask } from "../components/CardTask";

export const ListTask = (props) => {
  return (
    <Box sx={{ margin: "50px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}> {!props.isFreelance ? 'All tasks' : 'Available Tasks'} </Typography>

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {props.data.map(
          ({ title, criteria, description, estimation, price, state }, index) => (
            <Grid item sx={4}>
              <CardTask
                key={index}
                state={state}
                title={title}
                criteria={criteria}
                price={price}
                estimation={estimation}
                description={description}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
