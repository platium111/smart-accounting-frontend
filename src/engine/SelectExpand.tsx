import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import * as CONSTANTS from "../constants";
import { Field } from "formik";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 300
  }
}));

const SelectExpand = ({setFieldValue, name} : {setFieldValue: (nameId: string, value: any) => void, name: string}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <InputLabel htmlFor="age-simple">{CONSTANTS.PROPERTY}</InputLabel>
      <Field as="select" name={name}>
        <option value="studentId">{CONSTANTS.PROPERTY_TYPE.STUDENT_ID}</option>
        <option value="bookId">{CONSTANTS.PROPERTY_TYPE.BOOK_ID}</option>
        <option value="idCard">{CONSTANTS.PROPERTY_TYPE.ID_CARD}</option>
      </Field>
    </Box>
  );
};

export default SelectExpand;
