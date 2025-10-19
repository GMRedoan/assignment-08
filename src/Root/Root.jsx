 import React from 'react';
import Navbar from '../components/Header/Navbar';
import Banner from '../components/Header/Banner';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
 
 const Root = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
 };
 
 export default Root;