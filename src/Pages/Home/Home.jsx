// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;