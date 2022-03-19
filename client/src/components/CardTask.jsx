import axios from 'axios';
import FormData from 'form-data'
import image from '../acheivement.png'

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Dialog,
  Box
} from "@mui/material";
import { useState } from "react";
import SyncIcon from '@mui/icons-material/Sync';

import { TaskDescription } from "./TaskDescription";
import { useLocation } from "react-router-dom";

const API_KEY = 'deoPEKz2iCCW7DofJauYornO4v1s4M8W';

const http = axios.create({
  baseURL: "https://api.starton.io/v2",
  headers: {
      "x-api-key": API_KEY,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
  },
})

export const CardTask = (props) => 
{
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log('isOpen =>', isOpen)
    setIsOpen(!isOpen)
  };

  const location = useLocation();
  const isFreelance = location.pathname.includes('freelance');

  // // The image variable should be a buffer
  // async function storeOnIpfs() {
  //   let data = new FormData();
  //   data.append("file", image, 'acheivement');
  //   data.append("isSync", "true");
    
  //   const ipfsImg = await http.post("/pinning/content/file", data, {
  //       maxBodyLength: "Infinity",
  //       headers: { "Content-Type": `multipart/form-data; boundary=${data._boundary}` },
  //   });
  //   return ipfsImg.data;
  // }

  const finishTask = (addressCompany, addressFreelance, cid) => {
    http.post('/smart-contract/binance-testnet/0x9E9Ceb302C24d7602C7a56a0A0AD80e67989891c/call',
        {
            "functionName": 'safeMint',
            "signerWallet": addressCompany,
            "speed": "low",
            "params": [
                  addressFreelance,
                `https://ipfs.io/ipfs/${cid}`
            ],
    
        }).then(response => { console.log('safeMint', response.data) })
  }

  const handleFinish = async () => {
    const addressCompany = '0x59985Ce450b1BFD4De9B2A6e062436E7147fa580';
    const addressFreelance = '0x29eD4c7B22654460E0C20a642159B64282aB0C83';

    // const res = await storeOnIpfs();
    const cid = 'QmR1Wfw7S3YsW9uF61DL3vSw4qTdmYjmdvQbMSLNq6WxN8'; 

    finishTask(addressCompany, addressFreelance, cid);
  }

  const handleAccept = () => {
    console.log('handleAccept')
  }

  return (
    <Box>
      <Card sx={{ maxWidth: 356 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>

        {props.state === 'todo' && 
          <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            size="medium"
            color="secondary"
            onClick={handleOpen}
          >
            SHOW
          </Button>

          {isFreelance
            ?
          <Button variant="contained" size="medium" color="success" onClick={handleAccept}> ACCEPT </Button> 
            :
            <Button
            size="medium"
            variant="contained"
            color="info"
            onClick={handleOpen}
          >
            MODIFY
          </Button>
          }

           <Button variant="contained" size="medium" color="error">
            {isFreelance ? 'DECLINE' : 'REMOVE' }
          </Button>
        </CardActions>
        }

        {props.state === 'in progress' && 
          <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            size="medium"
            color="secondary"
            onClick={handleOpen}
          >
            SHOW
          </Button>

          {isFreelance
            ?
          <Button variant="contained" size="medium" color="success" onClick={handleFinish}> FINISH </Button> 
            :
            <Button
            size="medium"
            variant="contained"
            color="warning"
            onClick={handleOpen}
          >
            <SyncIcon /> In Progress
          </Button>
          }
        </CardActions>
        }

      {props.state === 'done' && 
          <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            size="medium"
            color="secondary"
            onClick={handleOpen}
          >
            SEE MORE
          </Button>

          <Button variant="contained" size="medium" color="grey" onClick={handleAccept}> 🎉 Done </Button> 
        </CardActions>
        }
        
      </Card>

      <Dialog open={isOpen} onClose={handleOpen}>
        <TaskDescription 
          title={props.title}
          criteria={props.criteria}
          price={props.price}
          estimation={props.estimation}
          description={props.description}
        />
      </Dialog>
    </Box>
  );
}