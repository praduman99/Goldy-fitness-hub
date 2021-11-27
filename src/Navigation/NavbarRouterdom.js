
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Footer from '../Pages/Footer'

import Navbar from '../Navigation/Navbar'

import ScrollToTop from '../ReusableComponents/ScrollToTop'
import Homepage from '../Pages/Homepage';


const NavbarRouterdom = (props) => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Homepage />


            {/* 
            <Footer /> */}
        </Router>
    );
}

export default NavbarRouterdom
