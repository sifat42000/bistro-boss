import React from 'react';
import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
             <Helmet>
        <title>Bistro Boos | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <p>My name is menu</p>
            
        </div>
    );
};

export default Menu;