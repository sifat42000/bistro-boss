import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Authprovider';
import { FaCartShopping  } from 'react-icons/fa';

const Nav = () => {

    const { user, Logout } = useContext(AuthContext);


    const handlelogout = () => {
        Logout()
            .then(() => {
                console.log('User LogOut Successfull')
            })
            .catch(error => {
                console.error(error)
            })
    }


    const Navlinks = <>


        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order Shop</NavLink></li>
        {/* <li className='pl-4'><NavLink>
            <button className="h-[20px] p-1 text-xs ">
            Inbox
                <div className="badge badge-secondary  ml-2 ">+99</div>
            </button>
        </NavLink></li> */}
        <li className='ml-4'>
            <NavLink to="/inbox" className="flex items-center">
                <button className="bg-transparent hover:bg-gray-200 h-[20px] p-1 text-sm">
                <FaCartShopping></FaCartShopping>
                    <div className="badge badge-secondary ml-2 text-[10px] p-1">+99</div>
                </button>
            </NavLink>
        </li>

        {
            user ?
                <li>
                    <button onClick={handlelogout} className=' text-white'>LogOut</button>
                </li> :
                <li><NavLink to="loging">Loging</NavLink></li>
        }
        <li><NavLink to="register">Register</NavLink></li>



    </>

    return (
        <>

            <div className="navbar  fixed z-10 bg-opacity-30 bg-black text-white   max-w-[1088px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {Navlinks}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default Nav;