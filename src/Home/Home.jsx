import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Pages/bgFixedBanner/Banner';
import Catagory from '../Pages/bgFixedBanner/Catagory';
import PopulerMenu from '../Pages/bgFixedBanner/PopulerMenu';
import Cheapservice from '../Pages/bgFixedBanner/Cheapservice';
import CheapRecomend from '../Pages/CheapRecomend/CheapRecomend';
import BgfixedBanner from '../Pages/bgFixedBanner/BgfixedBanner';
import Testmonial from '../Pages/bgFixedBanner/Testmonial';


const Home = () => {
    return (
        <div >
            <Helmet>
        <title>Bistro Boos | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <p className='mb-20'><Banner></Banner></p>
            <p className='mb-20'><Catagory></Catagory></p>
            <p><PopulerMenu></PopulerMenu></p>
            <Cheapservice></Cheapservice>
            <CheapRecomend></CheapRecomend>
            <BgfixedBanner></BgfixedBanner>
            <Testmonial></Testmonial>
            
            
        </div>
    );
};

export default Home;