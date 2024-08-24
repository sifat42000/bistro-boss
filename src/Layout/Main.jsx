

import { Outlet } from "react-router-dom";
import Footer from "../Pages/bgFixedBanner/Footer";
import Nav from "../Pages/bgFixedBanner/Nav";




const Main = () => {
    return (
        <div>
            <Nav></Nav>
        <Outlet></Outlet>
        <p ><Footer></Footer></p>
        
            
        </div>
    );
};

export default Main;