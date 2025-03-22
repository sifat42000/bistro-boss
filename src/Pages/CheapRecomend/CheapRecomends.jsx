import React from 'react';

const CheapRecomends = ({item}) => {
    
    const {image,name,recipe} = item 

    return (
        <div className='mb-5 max-w-[590px]'>
            <img className='max-w-[590px]' src={image}></img>
             <div className='text-center max-w-[370px]'>
                <div className='mb-5'>
                <p className='mb-2 font-bold text-2xl'>{name}</p>
                <p>{recipe}</p>
                </div>
                    
                <button className='btn btn-outline'>ADD TO CART</button>  
                </div>      
        </div>
    );
};

export default CheapRecomends;