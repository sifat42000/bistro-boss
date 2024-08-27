import CoverOne from "../../../Menu pages/CoverOne";
import pic1 from '../../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import customhook from "../../../../Custom Hook/customhook";
import { useState } from "react";
import Foodcard from "../../../Menu pages/FoodCard/Foodcard";
import Ordermap from "../../../../Ordermap";
import { useParams } from "react-router-dom";



const Order = () => {
    
    const categorys = ['salad','pizza','soup','dessert','drinks']
    
    const {category} = useParams();
    console.log(category)
    const initialIndex = categorys.indexOf(category)
    const [index,setIndex] =useState(initialIndex)
    const [menu] = customhook();
    
    
    
    const Salad = menu.filter(item => item.category == 'salad')
    const Soup = menu.filter(item => item.category == 'soup')
    const Pizza = menu.filter(item => item.category == 'pizza')
    const Dessert = menu.filter(item => item.category == 'dessert')
    const Drinks = menu.filter(item => item.category == 'drinks')
    return (
        <div>
            <CoverOne img={pic1} tittle="Our shop"></CoverOne>
            <div>
                <Tabs defaultIndex={index} onSelect={(index) =>setIndex(index)}>
                    <div className="text-center mb-20">
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                        
                    </TabList>
                    </div>
                    <TabPanel>
                        <Ordermap item={Salad}></Ordermap>
                    </TabPanel>
                    <TabPanel>
                          <Ordermap item={Pizza}></Ordermap>
                    </TabPanel>
                    <TabPanel>
                           <Ordermap item={Soup}></Ordermap>
                    </TabPanel>
                    <TabPanel>
                           <Ordermap item={Dessert}></Ordermap>
                    </TabPanel>
                    <TabPanel>
                           <Ordermap item={Drinks}></Ordermap>
                    </TabPanel>
                    
                </Tabs>
            </div>

        </div>
    );
};

export default Order;