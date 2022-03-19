import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import LeakRemoveIcon from "@mui/icons-material/LeakRemove";
import { Breadcrumb } from "./Breadcrumb";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { account, active } = useWeb3React();

  const handleClick = () => navigate("/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "#FFF",
          borderBottom: "1px solid rgb(231, 235, 240)",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="black"
          >
             Earn To Code
          </Typography>

          <Button
            size="large"
            edge="start"
            color={active ? "success" : "error"}
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            {active ? (
              <>
                <LeakAddIcon /> Connected - {account.slice(0, 7)}...
              </>
            ) : (
              <>
                <LeakRemoveIcon /> Not Connected
              </>
            )}
          </Button>
        </Toolbar>
      </AppBar>

      <Breadcrumb />

      <hr style={{ borderColor: "rgb(0, 127, 255, 0.1)" }} />
      <br />

      {children}
    </Box>
  );
};
