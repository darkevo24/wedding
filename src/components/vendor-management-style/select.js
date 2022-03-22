import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  return (
    <Box sx={{ minWidth: 110 }}>
      <FormControl fullWidth>
        <InputLabel className="outline-none" style={{ color:"#DBA8A1" }} id="demo-simple-select-label">Wedding Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="outline-none"
        >
        </Select>
      </FormControl>
    </Box>
  );
}