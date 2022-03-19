import { Box } from "@mui/material";
import { ListTask } from '../components/ListTask'
import { data } from '../data'

export const Freelance = () => {

  return (
    <Box>
      <Box>
        <ListTask data={data} isFreelance={true} />
      </Box>
    </Box>
  );
};
