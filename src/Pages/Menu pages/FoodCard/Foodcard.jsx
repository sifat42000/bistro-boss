import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authprovider";
import Swal from "sweetalert2";
import axios from "axios";


const Foodcard = ({item}) => {
    const {name,price,recipe,image,_id} = item
    const {user} = useContext(AuthContext)
    const  nevigate = useNavigate()
    const location = useLocation()

   const  handleClick = (food) =>{
    
    if(user && user.email){
      const  CartItem ={
       menuId: _id,
       email : user.email,
       name,
       price,
       image
      }
      axios.post('http://localhost:5000/Cart', CartItem)
      .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name}has been added`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    else{
      Swal.fire({
        title: "Please loging first",
        text: "If you login then you ADD CART",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Loging"
      }).then((result) => {
        if (result.isConfirmed){
          nevigate('/loging' , {state:{from:location}})
        }
        
      });
    } 
   }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 top-4  px-2">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions flex flex-col items-center">
            <Link >
            <button onClick={() => handleClick(item)} className="btn btn-outline ">ADD TO CART</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Foodcard;