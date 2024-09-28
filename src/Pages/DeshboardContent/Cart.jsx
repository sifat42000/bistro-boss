import React, { useContext } from 'react';
import { AuthContext } from '../../Authprovider';
import { FaTrash } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Cart = () => {
    // Destructure the cart and setCart from the AuthContext
    const { cart, setCart } = useContext(AuthContext);

    // Calculate the total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/Cart/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        );
                        // Update the cart state by removing the deleted item
                        setCart(cart.filter(item => item._id !== id));
                    }
                })
                .catch(error => {
                    console.error('Error deleting item:', error);
                });
            }
        });
    };

    return ( 
        <div>
            <div className='flex gap-20'>
                <p className='font-bold	text-2xl'>Total orders: {cart.length}</p>
                <p className='font-bold	text-2xl'>Total price: ${totalPrice.toFixed(2)}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => (
                                <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button 
                                            onClick={() => handleDelete(item._id)} 
                                            className="btn btn-ghost">
                                            <FaTrash className='text-red-600' />
                                        </button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
