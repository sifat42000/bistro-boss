// import React, { useEffect, useState } from 'react';

import PopulersMenu from './PopulersMenu';
import Sectiontittle from '../../SectionTitle/Sectiontittle';
import customhook from '../../Custom Hook/customhook';
// import Menu from '../Menu/Menu';
import MenuCategory from '../../MenuCategory';


const PopulerMenu = () => {
    // const [menu,SetMenu] = useState([])

    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const PopulerItems = data.filter(item => item.category === "popular")
    //         SetMenu(PopulerItems)
    //         console.log(menu)
    //     })
    // },[])

     const [menu] = customhook();
     const Popular = menu.filter(item => item.category === 'popular')


    return (
        <section className='mb-20'>
            <Sectiontittle 
            heading='From our menu'
            subHeading='Cheak it out'
            ></Sectiontittle>

            {/* <div className='grid grid-cols-2 gap-8'>
                {
                    Popular.map(item => <PopulersMenu
                    key={item._id}
                    item={item}
                    ></PopulersMenu>)
                }
            </div> */}
            <MenuCategory item={Popular}></MenuCategory>
            
        </section>
    );
};

export default PopulerMenu;