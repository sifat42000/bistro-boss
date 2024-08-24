import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// import pic1 from '../assets/menu/banner3.jpg'
import pic1 from '../../assets/menu/banner3.jpg'
import pic2 from '../../assets/menu/dessert-bg.jpeg'
import pic3 from '../../assets/menu/pizza-bg.jpg'
import pic4 from '../../assets/menu/salad-bg.jpg'
import pic5 from '../../assets/menu/soup-bg.jpg'
import Sectiontittle from '../../SectionTitle/Sectiontittle';


const animation = { duration: 11000, easing: (t) => t }

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
   <section>
    <Sectiontittle 
     subHeading={'From 11am to 10pm'}
     heading={'Order online'}>
     
    </Sectiontittle>
     <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img className='w-[850px] h-[400px]' src={pic1}></img>
      </div>
      <div className="keen-slider__slide number-slide2">
           <img className='w-[850px] h-[400px]' src={pic2}></img>
      </div>
      <div className="keen-slider__slide number-slide3">
          <img className='w-[850px] h-[400px]' src={pic3}></img>
      </div>
      <div className="keen-slider__slide number-slide4">
         <img className='w-[850px] h-[400px]' src={pic4}></img>
      </div>
      <div className="keen-slider__slide number-slide5">
        <img className='w-[850px] h-[400px]' src={pic5}></img>
      </div>
      
    </div>
   </section>
  );
};
