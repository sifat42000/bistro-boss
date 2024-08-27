import React from 'react';
import PopulersMenu from './Pages/bgFixedBanner/PopulersMenu';
import CoverOne from './Pages/Menu pages/CoverOne';
import { Link } from 'react-router-dom';

const MenuCategory = ({item,coverImg,tittle}) => {
    return (
       <section>
          {tittle && <CoverOne img={coverImg} 
               tittle={tittle}
               ></CoverOne>} 
         <div className='grid grid-cols-2 gap-8'>
                {
                    item.map(item => <PopulersMenu
                    key={item._id}
                    item={item}
                    ></PopulersMenu>)
                }
            </div>

            <div className='text-center'> 
            <Link to={`/order/${tittle}`}>
            <button className="btn btn-outline">Order your favourite food</button>
            </Link>
            </div>
       </section>
    );
};

export default MenuCategory;