import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { LinearProgress } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" p={3}>
      <Box width="100%" mr={3}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  }
});

export default function LinearWithValueLabel() {
  const [bar, setBar] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={bar} />
    </div>
  );
}
