

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/bgFixedBanner/Footer";
import Nav from "../Pages/bgFixedBanner/Nav";




const Main = () => {
    const location = useLocation();
    const NoNavAndFooter = location.pathname.includes('loging')
    return (
        <div>
            {NoNavAndFooter || <Nav></Nav>}
        <Outlet></Outlet>
        <p >{NoNavAndFooter || <Footer></Footer>}</p>
        
            
        </div>
    );
};

export default Main;