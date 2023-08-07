import React from 'react';
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
}));

const Register = () => {
  const classes = useStyles();

  const submithandler = (e) => {
    e.preventDefault();
    // Add your submit logic here
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
      <form onSubmit={submithandler}>
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
              <TextField
                label="First Name *"
                variant="outlined"
                fullWidth
                required
                className={classes.personalInfoInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name *"
                variant="outlined"
                fullWidth
                required
                className={classes.personalInfoInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address *"
                variant="outlined"
                fullWidth
                required
                className={classes.emailInput}
              />
            </Grid>
          </Grid>
          <Typography variant="h5" className={classes.accountHeading}>
            Login Information
          </Typography>
          <hr />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Password *"
                variant="outlined"
                fullWidth
                type="password"
                required
                className={classes.passwordInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Confirm Password *"
                variant="outlined"
                fullWidth
                type="password"
                required
                className={classes.passwordInput}
              />
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
      </form>
    </Container>
  );
}

export default Register;
