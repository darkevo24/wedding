import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqVendor = () => {
  return (
    <div className="w-full bg-bg-serenade px-10 py-10 text-bg-primary">
      <p className="text-3xl">FAQs</p>
      <div className="w-full border-t border-t-bg-primary my-8"></div>
      <Accordion>
        <AccordionSummary
          className=""
          style={{ backgroundColor: "#FCE4D4" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>{"WHAT IS A VENDOR'S REGISTRATION FORM?"}</p>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#FCE4D4" }}>
          <p>
            A vendor registration form is a way to collect information about potential vendors to register them as partners or collaborators for a
            particular event
          </p>
        </AccordionDetails>
      </Accordion>
      <div className="w-full border-t border-t-bg-primary my-8"></div>
      <Accordion>
        <AccordionSummary
          className="text-black"
          style={{ backgroundColor: "#FCE4D4" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>{"WHAT IS A VENDOR'S REGISTRATION FORM?"}</p>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#FCE4D4" }}>
          <p>
            A vendor registration form is a way to collect information about potential vendors to register them as partners or collaborators for a
            particular event
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqVendor;
