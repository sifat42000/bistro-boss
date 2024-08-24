import React from 'react';

import pic1 from '../../assets/home/featured.jpg'
import Sectiontittle from '../../SectionTitle/Sectiontittle';


const BgfixedBanner = () => {
    return (
        <div
            className="hero h-[600px] mb-20 bg-fixed"
            style={{
                backgroundImage: "url(https://i.ibb.co/6sSy9Jp/featured.jpg)",
            }}>
                
            <div className="hero-overlay bg-opacity-60"></div>
            
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                <section>
                        <Sectiontittle
                        heading='FROM OUR MENU'
                        subHeading='Cheak it out'
                        ></Sectiontittle>
                    </section>

                    <div className='flex gap-8 p-12'>
                        <div>
                           <img className='h-[350px] w-[1450px]'  src={pic1}></img>
                        </div>
                        <div>
                            <p className='text-2xl'>March 20, 2023</p>
                            <p className='text-2xl'>Where can i get some?</p>  
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BgfixedBanner;