import { Box, Button } from "@mui/material";
import { AddTask } from "../components/AddTask";
import { ListTask } from "../components/ListTask";
import { useState } from 'react'
import { data } from '../data'

export const Company = () => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [isListingTask, setIsListingTask] = useState(true);

  const handleCreatingTask = () => {
    setIsCreatingTask(!isCreatingTask)
    setIsListingTask(!isListingTask);
  }
  const handleListingTask = () => {
    setIsListingTask(!isListingTask)
    setIsCreatingTask(!isCreatingTask);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        {isListingTask && (
          <Button onClick={handleCreatingTask} variant="contained">
            Create a New task
          </Button>
        )}

        {isCreatingTask && (
          <Button onClick={handleListingTask} variant="contained">
            Show my Task's
          </Button>
        )}
      </Box>

      {isCreatingTask && <AddTask handleListingTask={handleListingTask} />}
      {isListingTask && <ListTask data={data} />}
    </Box>
  );
};
