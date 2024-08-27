import React from 'react';

const PopulersMenu = ({item}) => {
   
    const {name,price,recipe,image} = item

    return (
        <div className='flex gap-8'>
            <div>
                <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[120px]' src={image}></img>
            </div>

            <div>
               <div className='flex gap-9'>
                  <p className='text-2xl'>{name}-----</p>
                  <p className='text-yellow-600'>${price}</p>
               </div>
                  <p>{recipe}</p>

            </div>

           

            
        </div>
    );
};

export default PopulersMenu;