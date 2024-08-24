import React, { useEffect, useState } from 'react';

import CheapRecomends from './CheapRecomends';
import Sectiontittle from '../../SectionTitle/Sectiontittle';



const CheapRecomend = () => {

    const [menu,setMenu] = useState([])
    const [slice,Setslice] = useState(6)

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const SaladItem = data.filter(item => item.category === 'salad')
            setMenu(SaladItem)
        })
    },[])

    return (
        <section>
            <Sectiontittle
            heading='Chef Recommends'
            subHeading='Should try'
            >

            </Sectiontittle>

            <div className='grid grid-cols-3 gap-10'>
               {
                menu.slice(0, slice).map(item => <CheapRecomends
                    key={item._id}
                    item={item}
                ></CheapRecomends>)
               }
            </div>
            <div className='text-center mb-16'>
            
                 <div className={slice === menu.length && 'hidden'}>
                <button className='btn btn-outline btn-primary' onClick={() => Setslice(menu.length)} >Show All Carts</button>
                </div> 


            </div>
            
        </section>
    );
};

export default CheapRecomend;