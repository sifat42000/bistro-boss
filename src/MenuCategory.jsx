import React from 'react';
import PopulersMenu from './Pages/bgFixedBanner/PopulersMenu';
import CoverOne from './Pages/Menu pages/CoverOne';

const MenuCategory = ({item,coverImg,tittle}) => {
    return (
       <section>
         {tittle && <CoverOne img={coverImg} 
               tittle="Our Menu"
               ></CoverOne>}
         <div className='grid grid-cols-2 gap-8'>
                {
                    item.map(item => <PopulersMenu
                    key={item._id}
                    item={item}
                    ></PopulersMenu>)
                }
            </div>
       </section>
    );
};

export default MenuCategory;