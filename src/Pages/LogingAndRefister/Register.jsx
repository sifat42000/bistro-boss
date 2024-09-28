import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Authprovider';
import axios from 'axios';  // Make sure to import axios
import GoogleButton from './GoogleButton';

const Register = () => {
    const TypeRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { createUser } = useContext(AuthContext);
    
    const from = location.state?.from?.pathname || '/';

    // Captcha Engine Load করার জন্য useEffect ব্যবহার করা হয়েছে
    useEffect(() => {
        loadCaptchaEnginge(6); // এখানে ৬ সংখ্যার ক্যাপচা থাকবে
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                
                const userInfo = { name, email };
                
                // User data backend এ পাঠানোর জন্য axios ব্যবহার করা হচ্ছে
                axios.post('http://localhost:5000/Users', userInfo)
                    .then(res => {
                        console.log(res.data.insertedId, 'user added to database');
                    })
                    .catch(error => {
                        console.error('Error adding user to the database:', error);
                    });
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });
    };

    const handleCaptha = () => {
        const userInput = TypeRef.current.value;  // Captcha input field থেকে মান নেওয়া হচ্ছে
        if (validateCaptcha(userInput)) {
            setDisabled(false);  // Captcha সঠিক হলে বাটন সক্রিয় হবে
        } else {
            setDisabled(true);  // সঠিক না হলে বাটন নিষ্ক্রিয় থাকবে
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />  {/* Captcha এর জন্য Template */}
                            </label>
                            <input type="text" ref={TypeRef} placeholder="Type here" name="Captcha" className="input input-bordered" required />
                            <button type="button" onClick={handleCaptha} className="btn btn-outline btn-xs mt-3">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" disabled={disabled} className="btn btn-primary">Register</button>
                        </div>
                        <div className='flex'>
                        <p>Already have an account? <Link className="btn btn-link" to='/loging'>Log in</Link></p>
                        <p className='pt-3 right-3'><GoogleButton></GoogleButton></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
