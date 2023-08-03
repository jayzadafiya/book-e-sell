// import React from 'react'
// import {  BsCart } from 'react-icons/bs'
// import { Link } from 'react-router-dom';
// import './Header.css'
// import { FaSearch } from 'react-icons/fa';


// function Header() {
//     return (
//         <>
//             <div className="Main">
//                 <div className='Header'>
//                     <div className='logo' title='Tatvasoft'>
//                         <Link to='/' style={{ textDecoration: 'none' }}></Link>
//                     </div>
//                     <div className="nav">
//                         <div className="top-right">
//                             <ul className="top-nav">
//                                 <Link to="/login" style={{ textDecoration: 'none' }}> <li> Login</li></Link>
//                                 {/* <li>Login </li> */}

//                                 <span>|</span>
//                                 <Link to="/register" style={{ textDecoration: 'none' }}><li>Register</li></Link>
//                                 {/* <li>Register </li> */}
//                             </ul>
//                             <ul>

//                                 <button className='card-btn' >
//                                     <div className='card-btn-in'>
//                                         {/* <img src={cart} alt="cart" /> */}
//                                         <BsCart />
//                                         <p>0</p>
//                                     </div>
//                                     <div style={{ color: 'rgb(65,65,65)' }}>Cart</div>
//                                 </button>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='search'>
//                     <div className='header-search'>
//                         <div className='header-search-area'>
//                             <input className="placeholder" type="text" placeholder='What are you looking for...' />
//                             <button type='submit' className='btn1'><FaSearch className='len' />Search</button>
//                             <button type='submit' className='btn2'>Cancel</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Header

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    InputBase,
    makeStyles,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    appBar:{
        backgroundColor: 'transparent',
    },
    logo: {
        width: 190,
        paddingLeft: 70,
    },
    nav: {
        flex: 1,
    },
    topRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 50,
    },
    topNav: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 15,
        listStyle: 'none',

    },
    separator: {
        color: '#f14d54',
    },
    cardBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        backgroundColor: 'transparent',
        border: '1px solid gray',
        borderRadius: 3,
        width: 90,
        height: 30,
        cursor: 'pointer',
    },
    cardBtnIn: {
        display: 'flex',
        alignItems: 'center',
        color: '#fa0324',
        gap: 5,
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent: 'center',
    },
    topNavLi: {
        fontFamily: 'Roboto',
        position: 'relative',
        fontSize: 14,
        paddingLeft: 10,
        color: '#f14d54',
        paddingRight: 10,
        cursor: 'pointer',
        textDecoration: 'none',
    },
    search: {
        backgroundColor: '#f4f4f4',
    },
    headerSearchArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 20,
    },
    placeholder: {
        width: 422,
        height: 40,
        color: 'rgb(33, 33, 33)',
        borderRadius: 4,
        border: '1px solid black',
        fontSize: 16,
        paddingLeft: 15,
    },
    btn1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        color: 'white',
        backgroundColor: '#80bf32',
        border: '1px solid #80bf32',
        borderRadius: 4,
        height: 40,
        fontSize: 16,
        width: 129,
        textAlign: 'center',
        cursor: 'pointer',
    },
    len: {
        fontSize: 20,
    },
    btn2: {
        color: 'white',
        padding: 3,
        backgroundColor: '#f14d54',
        border: '1px solid #f14d54',
        borderRadius: 4,
        height: 40,
        fontSize: 16,
        width: 129,
        cursor: 'pointer',
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <div className={classes.logo} title="Tatvasoft">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="h6" noWrap>
                            Tatvasoft
                        </Typography>
                    </Link>
                </div>
                <div className={classes.nav}>
                    <div className={classes.topRight}>
                        <ul className={classes.topNav}>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <li className={classes.topNavLi}>Login</li>
                            </Link>
                            <span className={classes.separator}>|</span>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <li className={classes.topNavLi}>Register</li>
                            </Link>
                        </ul>
                        <ul>
                            <Button className={classes.cardBtn}>
                                <div className={classes.cardBtnIn}>
                                    <ShoppingCart />
                                    <p>0</p>
                                </div>
                                <div style={{ color: 'rgb(65,65,65)' }}>Cart</div>
                            </Button>
                        </ul>
                    </div>
                </div>
            </Toolbar>
            <div className={classes.search}>
                <div className={classes.headerSearchArea}>
                    <InputBase
                        className={classes.placeholder}
                        placeholder="What are you looking for..."
                    />
                    <Button type="submit" className={classes.btn1}>
                        <FaSearch className={classes.len} />
                        Search
                    </Button>
                    <Button type="submit" className={classes.btn2}>
                        Cancel
                    </Button>
                </div>
            </div>
        </AppBar>
    );
}

export default Header;
