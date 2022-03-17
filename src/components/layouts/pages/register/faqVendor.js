import React from "react";
import {AiOutlineUp} from "react-icons/ai";
import {AiOutlineDown} from "react-icons/ai";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqVendor = () => {
  return (
    <div className="w-full bg-bg-serenade px-10 py-10 text-bg-primary">
      <p className="text-3xl">FAQs</p>
      <br></br>
      <div className="w-full h-0.5 bg-bg-primary">
      </div>
      <br></br>
      <Accordion>
        <AccordionSummary
        className=""
        style={{ backgroundColor : "#FCE4D4" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >
            <div className="relative">
        <p className="text-bg-primary text-xl font-bold">WHAT IS A VENDOR'S REGISTRATION FORM?</p>
      </div> 
      </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor : "#FCE4D4" }}>
          <Typography>
          A vendor registration form is a way to collect information about potential vendors to register them as partners or collaborators for a particular event
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br> 
      <div className="w-full h-0.5 bg-bg-primary">
      </div>
      <Accordion>
        <AccordionSummary
        className="text-black"
        style={{ backgroundColor : "#FCE4D4" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >
            <div className="relative">
        <p className="text-bg-primary text-xl font-bold">WHAT IS A VENDOR'S REGISTRATION FORM?</p>
      </div> 
      </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor : "#FCE4D4" }}>
          <Typography>
          A vendor registration form is a way to collect information about potential vendors to register them as partners or collaborators for a particular event
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqVendor;
