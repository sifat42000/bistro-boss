import React from 'react';
import { FaHome, FaRegBookmark, FaSearch, FaShoppingCart, FaStreetView } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  
    const isAdmin = true ;

    return (
        <div className="flex">

            
            {/* Sidebar */}
            <div className="w-64 min-h-screen bg-orange-600">
            <div className='left-[100px]'>
                <p className='font-bold'>BISTRO BOSS</p> 
               
                <p>R e s t u r a n t</p>
            </div>
                <ul className="menu p-4 text-white">
                  {
                    isAdmin? <>
                      <li>
                        <NavLink to="/dashboard/AdminHome" activeClassName="text-yellow-500">
                            <FaHome className="mr-2" /> Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/AddItems" activeClassName="text-yellow-500">
                            <FaShoppingCart className="mr-2" /> Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/ManageItems" activeClassName="text-yellow-500">
                        <FaStreetView> </FaStreetView>
                            Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBooking" activeClassName="text-yellow-500">
                            <FaRegBookmark className="mr-2" /> Manage Booking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/AllUsers" activeClassName="text-yellow-500">
                            <MdOutlinePayment className="mr-2" /> All Users
                        </NavLink>
                    </li>
                    </> 
                    :
                    <>
                      <li>
                        <NavLink to="/dashboard/userHome" activeClassName="text-yellow-500">
                            <FaHome className="mr-2" /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart" activeClassName="text-yellow-500">
                            <FaShoppingCart className="mr-2" /> My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review" activeClassName="text-yellow-500">
                        <FaStreetView> </FaStreetView>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking" activeClassName="text-yellow-500">
                            <FaRegBookmark className="mr-2" /> My Booking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment" activeClassName="text-yellow-500">
                            <MdOutlinePayment className="mr-2" /> Payment History
                        </NavLink>
                    </li>
                    </>
                  }
                    <div className='divider'> </div>
                        <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink></li>
                        <li><NavLink to='/dashboard/menu'>
                        <FaSearch></FaSearch>
                        Menu</NavLink></li>

                   
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
