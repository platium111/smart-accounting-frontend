import React from "react";
// import { Formik, FormikProps, Form, Field } from 'formik';

// export class MyForm extends React.Component {
//    handleSubmit = (values: [], {
//       props = this.props,
//       setSubmitting
//     }) => {

//     //process form submission here
//     //done submitting, set submitting to false
//     setSubmitting(false);
//     return;
//   }
//    render() {

//     return(
//         <>
//       <Formik
//         initialValues={{
//             first_name: '',
//             email: '',
//             gender: ''
//         }}
//         validate={(values) => {
//            let errors: any[] = [];

//            //check if my values have errors
//            return errors;
//         }}
//         onSubmit={handleSubmit}
//         render={formProps: FormikProps => {
//            return(
//               <Form>
//                 <Field ... />
//                 <Field ... />
//                 <Field ... />
//                 <button
//                   type="submit"
//                   disabled={formProps.isSubmitting}>
//                      Submit Form
//                 </button>
//               </Form>
//            );
//        }}
//       />
//       </>
//       );
//    }
// }
