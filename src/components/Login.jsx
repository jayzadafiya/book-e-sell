import React, { useState } from 'react';
import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '80%',
    margin: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerName: {
    textAlign: 'center',
    fontFamily: 'roboto',
    color: '#414141',
    paddingBottom: 25,
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
  account: {
    width: '100%',
    margin: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
  },
  newCustomer: {
    width: '45%',
    paddingRight: 10,
  },
  login_main: {
    marginTop:50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  register: {
    width: '45%',
    paddingLeft: 20,
    paddingRight: 10,
  },
  heading: {
    fontFamily: 'roboto',
    color: '#414141',
    fontSize: 20,
    paddingBottom: 20,
    fontWeight:"bold" ,
    fontStyle:"bold"
  },
  paragraph: {
    color: '#838383',
    fontSize: 18,
    fontFamily: 'roboto-light',
    padding: '15px 0',
  },
  textField: {
    width: '100%',
    marginBottom: 30,
  },
  createBtn: {
    width: 250,
    height: 45,
    color: 'white',
    fontSize: 20,
    backgroundColor: 'red',
    border: 'none',
    marginTop: 165,
    marginBottom: 165,
    cursor: 'pointer',
    '&:hover': {
      color: "red",
    },
  },
  loginBtn: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 20,
    border: 'none',
    cursor: 'pointer',
    width: 100,
    height: 45,
    marginTop: 33,

    '&:hover': {
     color:"red",
    },
  },
 
}));

const Login = () => {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [details,setDetails]=useState({
    email:"",
    password:""

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  const handleChange=(e,property)=>{
    setDetails({
      ...details,
      [property]:e.target.value
    })
  }

  return (
    <div className={classes.container}>
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
      <div className={classes.account}>
        <h1 className={classes.headerName}>Login or Create an Account </h1>
        <div className={classes.login_main}>
          <div className={classes.newCustomer}>
            <Typography variant="h2" className={classes.heading}>
              New Customer
            </Typography>
            <hr />
            <p className={classes.paragraph}>Registration is free and easy.</p>
            <ul>
              <li>Faster checkout</li>
              <li>Save multiple shipping addresses</li>
              <li>View and track orders and more</li>
            </ul>
            <Button type="submit" className={classes.createBtn}>
              Create an Account
            </Button>
          </div>
          <div className={classes.register}>
            <Typography variant="h2" className={classes.heading}>
              Registered Customer
            </Typography> 
            <hr />
            <p className={classes.paragraph}>
              If you have an account with us, please log in.
            </p>
            <form onSubmit={handleSubmit}>
              <div className={classes.textField}>
                <Typography>Email Address *</Typography>
                <TextField
                  type="email"
                  id="email"
                  inputRef={emailRef}
                  required
                  variant="outlined"
                  onChange={(e)=>handleChange(e,"email")}
                />
              </div>
              <div className={classes.textField}>
                <Typography>Password *</Typography>
                <TextField
                  type="password"
                  id="password"
                  inputRef={passwordRef}
                  required
                  variant="outlined"
                  minLength={8}
                  onChange={(e) => handleChange(e, "password")}

                />
              </div>
              <Button type="submit" className={classes.loginBtn} >
                Login
              </Button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
