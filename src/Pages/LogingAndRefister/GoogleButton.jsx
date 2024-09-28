import { useContext } from 'react';
import Google from '../../assets/home/google.jpg'
import { AuthContext } from '../../Authprovider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleButton = () => {
    const {GoogleUser} = useContext(AuthContext)
    const navigare = useNavigate()
  
    const handleGoogle = () =>{
        GoogleUser()
        .then(result =>{
            console.log(result);
            const userInfo={
                email : result.user?.email,
                name : result.user?.displayName
            }
            axios.post('http://localhost:5000/Users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigare('/')
            })
        })

    }

    return (
        <div>
            <div>
                <button onClick={handleGoogle}>
                    <img className='h-7 w-8' src={Google}></img>
                </button>
            </div>
            
        </div>
    );
};

export default GoogleButton;