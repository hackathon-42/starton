import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../lib/connectors";
import { isNoEthereumObject } from "../lib/errors";

export const Home = () => {
  const { account, active, activate, deactivate } = useWeb3React();

  console.log("account: ", account);

  const handleConnect = () => {
    if (active) {
      deactivate();
      return;
    }

    activate(injected, (error) => {
      if (isNoEthereumObject(error))
        window.open("https://metamask.io/download.html");
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "5%",
        mb: "20%",
      }}
    >
      <Typography variant="h5">Connet your wallet & choose your role</Typography>

      <br />

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="metamask.png" alt="metamask" width={150} />

        <Button sx={{ mt: 4 }} variant="contained" onClick={handleConnect} color={active ? 'error' : 'success' }>
          {active ? "disconnect" : "Connect your MetaMask"}
        </Button>
      </Box>

      {active && (
          <Box
            sx={{
              width: "100%",
              mt: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Typography variant="h5"> Choose your role : </Typography>

            <Box sx={{ mt: 3, display: "flex", flexDirection: "column", width: "450px" }}>
              <Button variant="contained" fullWidth>
                <Link
                  to="/company"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  MANAGER
                </Link>
              </Button>

              <Button variant="contained" fullWidth sx={{ mt: 4 }}>
                <Link
                  to="/freelance"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  WORKER
                </Link>
              </Button>
            </Box>
          </Box>
      )}
    </Box>
  );
};
