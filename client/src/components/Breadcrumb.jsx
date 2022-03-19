import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const Breadcrumb = () => {
  const location = useLocation();

  return (
    <Box role="presentation" onClick={handleClick} sx={{ ml: 1, my: 2, mt: 12 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            sx={{ cursor: 'pointer' }}
            component={Link}
            to="/"
            label="Home"
            icon={<HomeIcon fontSize="small" />}
          />

          {location.pathname === '/freelance'
            &&
          <StyledBreadcrumb
            sx={{ cursor: 'pointer' }}
            component={Link}
            to="/freelance"
            label="Worker"
          />}

          {location.pathname === '/company'
            && 
          <StyledBreadcrumb
            sx={{ cursor: 'pointer' }}
            component={Link}
            to="/company"
            label="Manager"
          />}

        </Breadcrumbs>
      </Box>
  )
}