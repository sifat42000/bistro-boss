import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Sectiontittle from '../../SectionTitle/Sectiontittle';


const Testmonial = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section>
            <Sectiontittle
                heading='TESTIMONIALS'
                subHeading='What Our Clients Say'
            ></Sectiontittle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(revieww => <SwiperSlide
                        key={revieww._id}
                    >
                        <div className='m-24'>

                           <div className='pl-96 mb-10'>
                           <Rating
                                style={{ maxWidth: 180 }}
                                value={revieww.rating}
                                readOnly
                            />
                           </div>

                            <p className='mb-4'>{revieww.details}</p>
                            <p className='text-yellow-600 text-2xl text-center'>{revieww.name}</p>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>




        </section>
    );
};

export default Testmonial;  