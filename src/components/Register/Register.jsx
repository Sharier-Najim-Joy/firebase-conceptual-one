import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const navigate = useNavigate();
    const [error,setError] =useState('');


    const {registerUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        console.log(name,photo,email,password,confirm_password);

        if(password.length<6){
            setError('password must be 6 characters')
            return; 
        }
        if(password !== confirm_password){
            setError('password does not match')
            return;
        }
        if(!/^(?=.*\d)(?=.*[^\w\s])(?=.*[a-zA-Z]).*$/.test(password)){
            setError('password must be number,symbol and word')
            return;
        }

        setError('')

        // firebase register
        registerUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
            setError('email-already-in-use')
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm_password" placeholder="confirm-password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            error && <small className="text-red-700">{error}</small>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p>Already have an account? please <span className="text-blue-800 underline"><Link to={'/login'}>Login</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;