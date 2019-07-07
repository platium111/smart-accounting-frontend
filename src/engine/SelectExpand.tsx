import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import * as CONSTANTS from "../constants";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 300
  }
}));

const SelectExpand = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <InputLabel htmlFor="age-simple">{CONSTANTS.PROPERTY}</InputLabel>
      <Select value={10}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>{CONSTANTS.PROPERTY_TYPE.STUDENT_ID}</MenuItem>
        <MenuItem value={20}>{CONSTANTS.PROPERTY_TYPE.BOOK_ID}</MenuItem>
        <MenuItem value={30}>{CONSTANTS.PROPERTY_TYPE.ID_CARD}</MenuItem>
      </Select>
    </Box>
  );
};

export default SelectExpand;
