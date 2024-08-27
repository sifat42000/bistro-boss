import Foodcard from "./Pages/Menu pages/FoodCard/Foodcard";


const Ordermap = ({item}) => {
    return (
        <div className="grid grid-cols-3 gap-16">
        {
            item.map(item => <Foodcard
            item={item} key={item._id}></Foodcard>)
        }
        </div>
    );
};

export default Ordermap;