import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from the backend
    const fetchUsers = () => {
        fetch('http://localhost:5000/Users')
            .then(res => res.json())
            .then(data => setUsers(data));
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers(); // Refetch users when the component is mounted
    }, []);

    // Function to make a user admin
    const makeAdmin = (user) => {
        axios.patch(`http://localhost:5000/Users/admin/${user._id}`)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an admin`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    fetchUsers(); // Refetch users after making admin
                }
            });
    };

    // Handle delete user with automatic update after deletion
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/Users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "The user has been deleted.", "success");
                            // Update the local state without refetching
                            setUsers(users.filter(user => user._id !== id)); // Remove the deleted user from the local state
                        }
                    })
                    .catch((error) => console.error("Error deleting user:", error));
            }
        });
    };

    return (
        <div>
            <div className="flex justify-evenly">
                <p className="font-bold">All Users</p>
                <p className="font-bold">Total Users: {users.length}</p> {/* Displays the total number of users */}
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* Table head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td> {/* Display the index number */}
                                    <td>{item.name}</td> {/* User's name */}
                                    <td>{item.email}</td> {/* User's email */}
                                    <td>
                                        {item.role === "admin" ? (
                                            "Admin"
                                        ) : (
                                            <button
                                                onClick={() => makeAdmin(item)}  // Pass the entire user object
                                                className="btn btn-ghost"
                                            >
                                                Make Admin
                                                <FaUser className="text-red-600"></FaUser>
                                            </button>
                                        )}
                                    </td>
                                    <th>
                                        {/* Delete button */}
                                        <button
                                            onClick={() => handleDelete(item._id)}  // Pass the user's _id
                                            className="btn btn-ghost"
                                        >
                                            <FaTrash className="text-red-600" />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Allusers;
