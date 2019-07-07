import * as React from "react";
import { Formik, withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SelectExpand from "../engine/SelectExpand";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "@material-ui/pickers";
import { useState } from "react";
import * as CONSTANTS from "../constants";
import { buildErrorMsg } from "../utils/string";

interface ICustomerForm {
  fullName?: string;
  phoneNo?: string;
  dateOfBirth?: string;
  addressDetail?: string;
  city?: string;
  dateReturnMoney?: string;
  lendingMoney?: number;
  facebookAddress?: string;
  fatherPhone?: string;
  motherPhone?: string;
}

interface OtherProps {
  title?: string;
}

interface MyFormProps {
  initialFullName?: string;
  initialPhoneNo?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  button: {
    margin: theme.spacing(2)
  },
  input: {
    display: "none"
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 300
  }
}));

const CustomerForm = (props: OtherProps & FormikProps<ICustomerForm>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    title
  } = props;

  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Grid spacing={2} container>
      <Paper className={classes.root}>
        <h1>{CONSTANTS.TITLE_NEW_CUSTOMER_FORM}</h1>

        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={8}>
              <TextField
                label={CONSTANTS.FULL_NAME}
                margin="normal"
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                name="fullName"
                error={!!errors.fullName && !!touched.fullName}
                helperText={
                  errors.fullName && touched.fullName && errors.fullName
                }
              />
              {/* {errors.fullName && touched.fullName ? (
                <div className={classes.root}>{errors.fullName}</div>
              ) : null} */}
              <TextField
                label={CONSTANTS.PHONE_NO}
                type="tel"
                margin="normal"
                className={classes.textField}
                name="phoneNo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNo}
                error={!!errors.phoneNo && !!touched.phoneNo}
                helperText={errors.phoneNo && touched.phoneNo && errors.phoneNo}
              />
            </Grid>
            <Grid item xs={8}>
              <DatePicker
                label={CONSTANTS.DATE_OF_BIRTH}
                className={classes.textField}
                name="dateOfBirth"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateOfBirth}
              />
              <TextField
                label={CONSTANTS.ADDRESS_DETAIL}
                margin="normal"
                className={classes.textField}
                name="addressDetail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.addressDetail}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label={CONSTANTS.CITY}
                margin="normal"
                className={classes.textField}
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              <DatePicker
                label={CONSTANTS.DATE_RETURN_MONEY}
                margin="normal"
                className={classes.textField}
                name="dateReturnMoney"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateReturnMoney}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label={CONSTANTS.LENDING_MONEY}
                type="number"
                margin="normal"
                className={classes.textField}
                name="lendingMoney"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lendingMoney}
              />
              <TextField
                label={CONSTANTS.FACEBOOK_ADDRESS}
                margin="normal"
                className={classes.textField}
                name="facebookAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.facebookAddress}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label={CONSTANTS.FATHER_PHONE}
                margin="normal"
                type="tel"
                className={classes.textField}
                name="fatherPhone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fatherPhone}
                error={!!errors.fatherPhone && !!touched.fatherPhone}
                helperText={
                  errors.fatherPhone &&
                  touched.fatherPhone &&
                  errors.fatherPhone
                }
              />
              <TextField
                label={CONSTANTS.MOTHER_PHONE}
                margin="normal"
                type="tel"
                className={classes.textField}
                name="motherPhone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.motherPhone}
                error={!!errors.motherPhone && !!touched.motherPhone}
                helperText={
                  errors.motherPhone &&
                  touched.motherPhone &&
                  errors.motherPhone
                }
              />
            </Grid>
            <Grid item xs={8}>
              <SelectExpand />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
            disabled={isSubmitting || !!errors.fullName}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

const AddNewCustomer = withFormik<MyFormProps, ICustomerForm>({
  mapPropsToValues: (props: MyFormProps) => ({
    fullName: props.initialFullName || "",
    phoneNo: props.initialPhoneNo || ""
  }),

  validationSchema: Yup.object().shape({
    fullName: Yup.string()
      .required(
        buildErrorMsg(CONSTANTS.ERROR_TYPE_INPUT.REQUIRED, CONSTANTS.FULL_NAME)
      )
      .min(
        5,
        buildErrorMsg(CONSTANTS.ERROR_TYPE_INPUT.LENGTH, CONSTANTS.FULL_NAME, 5)
      ),
    phoneNo: Yup.string().matches(
      CONSTANTS.PHONE_REGEX,
      buildErrorMsg(CONSTANTS.ERROR_TYPE_INPUT.VALID, CONSTANTS.PHONE_NO)
    ),
    fatherPhone: Yup.string().matches(
      CONSTANTS.PHONE_REGEX,
      buildErrorMsg(CONSTANTS.ERROR_TYPE_INPUT.VALID, CONSTANTS.FATHER_PHONE)
    ),
    motherPhone: Yup.string().matches(
      CONSTANTS.PHONE_REGEX,
      buildErrorMsg(CONSTANTS.ERROR_TYPE_INPUT.VALID, CONSTANTS.MOTHER_PHONE)
    )
  }),

  handleSubmit(
    { fullName, dateOfBirth }: ICustomerForm, // { props, setSubmitting, setErrors }
    { props, setSubmitting, setErrors }
  ) {
    console.log(fullName, dateOfBirth);
  }
})(CustomerForm);

export default AddNewCustomer;
