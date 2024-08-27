import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverOne from '../Menu pages/CoverOne';
import pic1 from '../../assets/menu/banner3.jpg'
import Sectiontittle from '../../SectionTitle/Sectiontittle';
import MenuCategory from '../../MenuCategory';
import customhook from '../../Custom Hook/customhook';
import pic2 from '../../assets/menu/dessert-bg.jpeg'
import pic3 from '../../assets/menu/pizza-bg.jpg'
import pic4 from '../../assets/menu/salad-bg.jpg'
import pic5 from '../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = customhook();
    const Offerd = menu.filter(item => item.category == 'offered')
    const Salad = menu.filter(item => item.category == 'salad')
    const Soup = menu.filter(item => item.category == 'soup')
    const Pizza = menu.filter(item => item.category == 'pizza')
    const Dessert = menu.filter(item => item.category == 'dessert')
   

    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
               <CoverOne img={pic1} 
               tittle="Our Menu"
               ></CoverOne>
               {/* <MenuCategory coverImg={pic1} 
               tittle="Our Menu"></MenuCategory> */}

         { /* Todays offers */}

                <section className='mb-40'>
           <Sectiontittle
                heading='Todays Offer'
                subHeading='Do dot miss'
            ></Sectiontittle>
            <MenuCategory item={Offerd}></MenuCategory>
           </section> 

           {/* Desserts */}

           {/* <section className='mb-40'>
        <CoverOne coverImg={pic2} tittle={"dessert"}></CoverOne>
               <MenuCategory item={Dessert} ></MenuCategory>
           </section> */}
           <section className='mb-40'>
       
        <MenuCategory item={Dessert} coverImg={pic2} tittle={"dessert"}></MenuCategory>
           </section>

           {/* Pizza */}

           {/* <section className='mb-40'>
             <CoverOne coverImg={pic3} 
               tittle={"pizza"}></CoverOne>

               <MenuCategory item={Pizza} ></MenuCategory>
           </section> */}
           <section className='mb-40'>
             

               <MenuCategory item={Pizza}  coverImg={pic3} 
               tittle={"pizza"}></MenuCategory>
           </section>

           {/* Salads */}

           {/* <section className='mb-40'>
           <CoverOne coverImg={pic4} 
               tittle={"salad"}></CoverOne>

               
               <MenuCategory item={Salad} ></MenuCategory>
           </section> */}
           <section className='mb-40'>
           

               
               <MenuCategory item={Salad} coverImg={pic4} 
               tittle={"salad"}></MenuCategory>
           </section>


           {/* Soup*/}

           {/* <section className='mb-40'>
           <CoverOne coverImg={pic5} 
               tittle={"soup"}></CoverOne>

               <MenuCategory item={Soup}></MenuCategory>
           </section> */}
           <section className='mb-40'>
           

               <MenuCategory item={Soup} coverImg={pic5} 
               tittle={"soup"}></MenuCategory>
           </section>
            </div>

        </div>
    );
};

export default Menu;