import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Authprovider';


const Loging = () => {

    const {loginUser} = useContext(AuthContext)

    const from = location.state?.from?.pathname || '/'

    const TypeRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    const Nevigate = useNavigate();
     
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLoging = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

      
        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            Nevigate('/')
            // Setsuccessloging('Congratulations! You have successfully logged in')
            // {
            //   successLoging.map(user =><Personalroute user={user} key={user.id}></Personalroute>) 
            // }

        })
        .catch(error => {
            console.error(error.message)
            // Seteroorloging(error.message)
        })

    }

    const handleCaptha = () =>{
        const Ref = TypeRef.current.value;
        if(validateCaptcha(Ref)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }


    return (


        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoging} className="card-body">
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
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={TypeRef} placeholder="Type here" name='Captha' className="input input-bordered" required />
                            <button onClick={handleCaptha}  className="btn btn-outline btn-xs mt-3">Validate</button >
                           
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                        <p>You don't have a account? <Link className="btn btn-link" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Loging;

// <Helmet>
// <title>Bistro Boos | Loging</title>
// <link rel="canonical" href="https://www.tacobell.com/" />
// </Helmet>