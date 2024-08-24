import React, { useEffect, useState } from 'react';

import PopulersMenu from './PopulersMenu';
import Sectiontittle from '../../SectionTitle/Sectiontittle';


const PopulerMenu = () => {
    const [menu,SetMenu] = useState([])

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const PopulerItems = data.filter(item => item.category === "popular")
            SetMenu(PopulerItems)
            console.log(menu)
        })
    },[])
    return (
        <section className='mb-20'>
            <Sectiontittle 
            heading='From our menu'
            subHeading='Cheak it out'
            ></Sectiontittle>

            <div className='grid grid-cols-2 gap-8'>
                {
                    menu.map(item => <PopulersMenu
                    key={item._id}
                    item={item}
                    ></PopulersMenu>)
                }
            </div>
            
        </section>
    );
};

export default PopulerMenu;