import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  registerContainer: {
    marginTop: theme.spacing(4),
    width: '80%',

  },
  breadcrumb: {
    justifyContent: 'center',
    display: 'flex',
    padding: 0,
    listStyle: 'none',
    alignItems: 'center',
  },
  breadcrumbItem: {
    padding: '35px 3px',
  },
  loginText: {
    color: '#f14d54',
  },
  headerName: {
    textAlign: 'center',
    fontFamily: 'roboto',
    color: '#414141',
    paddingBottom: 25,
  },
  account: {
    marginBottom: theme.spacing(6),
  },
  accountHeading: {
    fontFamily: 'roboto',
    color: '#414141',
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: "bold",
    fontStyle: "bold"
  },
  accountText: {
    color: '#838383',
    fontFamily: 'roboto-light',
    fontSize: '18px',
    padding: theme.spacing(2, 0),
  },
  infoText: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  personalInfoInput: {
    width: '100%',
    height: '40px',
    marginBottom: theme.spacing(4),
  },
  infoText1: {
    display: 'flex',
    flexDirection: 'column',
  },
  emailInput: {
    width: '100%',
    height: '40px',
    marginBottom: theme.spacing(6),
  },
  passwordInput: {
    width: '100%',
    height: '40px',
    marginBottom: theme.spacing(4),
  },
  registerButton: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '20px',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
    border: 'none',
    cursor: 'pointer',
    width: '136px',
    height: '45px',
  },
  passwordMargin: {
    marginTop: theme.spacing(2),
  },
  error:{
    color:"red"
  },
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .matches(/^(?=.*[A-Z])/, 'Password must contain at least one uppercase letter'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Register = () => {
  const classes = useStyles();

  const handleSubmit = (values) => {
    console.log('Form submitted with values:', values);
  };

  return (
    <Container component="div" className={classes.registerContainer}>
      <div >
        <ol className={classes.breadcrumb}>
          <li className={classes.breadcrumbItem}>
            <p>Home</p>
          </li>
          <li className={classes.breadcrumbItem}>
            <p>&gt;</p>
          </li>
          <li className={`${classes.breadcrumbItem} ${classes.loginText}`}>
            <p>Login</p>
          </li>
        </ol>
      </div>

      <h1 className={classes.headerName}>
        Login or Create an Account
      </h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >

        <Form >
          <div className={classes.account}>
            <Typography variant="h2" className={classes.accountHeading}>
              Personal Information
            </Typography>
            <hr />
            <Typography color="textSecondary" className={classes.accountText}>
              Please enter the following information to create your account.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>First Name *</Typography>
                <Field
                  type="text"
                  name="firstName"
                  as={TextField}
                  variant="outlined"
                  className={classes.personalInfoInput}
                  fullWidth

                />
                <ErrorMessage name="firstName" component="div" className={classes.error} />
              </Grid>
              <Grid item xs={6}>
                <Typography>Last Name *</Typography>
                <Field
                  type="text"
                  name="lastName"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  className={classes.personalInfoInput}
                />
                <ErrorMessage name="lastName" component="div" className={classes.error}  />
              </Grid>
              <Grid item xs={12}>
                <Typography>Email Address *</Typography>
                <Field
                  className={classes.emailInput}
                  fullWidth
                  type="email"
                  name="email"
                  as={TextField}
                  variant="outlined"
                />
                <ErrorMessage name="email" component="div" className={classes.error} />
              </Grid>
            </Grid>
            <Typography variant="h5" className={classes.accountHeading}>
              Login Information
            </Typography>
            <hr />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Password *</Typography>
                <Field
                  type="password"
                  name="password"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  className={classes.passwordInput}
                  />
                <ErrorMessage name="password" component="div" className={classes.error} />
              </Grid>
              <Grid item xs={6}>
             
                <Typography>Confirm Password *</Typography>
                <Field
                  type="password"
                  name="confirmPassword"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  className={classes.passwordInput}
                />
                <ErrorMessage name="confirmPassword" component="div" className={classes.error} />

              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.registerButton}
            >
              Register
            </Button>
          </div>
        </Form>
      </Formik>

    </Container>
  );
}

export default Register;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required('First Name is required'),
//   lastName: Yup.string().required('Last Name is required'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required')
//     .matches(/^(?=.*[A-Z])/, 'Password must contain at least one uppercase letter'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

// const Register = () => {
//   const handleSubmit = (values) => {
//     console.log('Form submitted with values:', values);
//   };

//   return (
//     <div>
//       <h1>Register Page</h1>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div className={classes.account}>
//             <Typography variant="h2" className={classes.accountHeading}>
//               Personal Information
//             </Typography>
//             <hr />
//             <Typography color="textSecondary" className={classes.accountText}>
//               Please enter the following information to create your account.
//             </Typography>
//             <div>
//               <Typography>First Name *</Typography>
//               <Field
//                 type="text"
//                 name="firstName"
//                 as={TextField}
//                 variant="outlined"
//               />
//               <ErrorMessage name="firstName" component="div" />
//             </div>

//             <div>
//               <Typography>Last Name *</Typography>
//               <Field
//                 type="text"
//                 name="lastName"
//                 as={TextField}
//                 variant="outlined"
//               />
//               <ErrorMessage name="lastName" component="div" />
//             </div>

//             <div>
//               <Typography>Email Address *</Typography>
//               <Field
//                 type="email"
//                 name="email"
//                 as={TextField}
//                 variant="outlined"
//               />
//               <ErrorMessage name="email" component="div" />
//             </div>

//             <div>
//               <Typography>Password *</Typography>
//               <Field
//                 type="password"
//                 name="password"
//                 as={TextField}
//                 variant="outlined"
//               />
//               <ErrorMessage name="password" component="div" />
//             </div>

//             <div>
//               <Typography>Confirm Password *</Typography>
//               <Field
//                 type="password"
//                 name="confirmPassword"
//                 as={TextField}
//                 variant="outlined"
//               />
//               <ErrorMessage name="confirmPassword" component="div" />
//             </div>

//             <Button type="submit" variant="contained" color="primary">
//               Register
//             </Button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default Register;
