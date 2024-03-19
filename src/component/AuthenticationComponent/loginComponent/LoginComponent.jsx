import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import "./LoginComponent.css"
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from "react-router-dom";
const LoginComponent = () => {
    const {loginWithGoogle, logInWithUserPassword, users} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
   


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
    
        // Email validation
        if (!email) {
          validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          validationErrors.email = 'Invalid email format';
        }
    
        // Password validation
        if (!password) {
          validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
          validationErrors.password = 'Password must be at least 6 characters long';
        }
    
        // If there are validation errors, update the state and prevent form submission
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        // If there are no validation errors, proceed with form submission
        logInWithUserPassword(email, password)
        
       .then(() => {
            toast.success('Successfully logged in');
        if (users?.email) {
          window.location.href = "/";
        }
          })
        .catch((error) => {
            toast.error('Logged In failed try again')});
      };

    const handaleGoogleSignIn = ()=>{
        loginWithGoogle()
        .then(res=> {
             toast.success('Successfully Logged In')
             window.location.href = "/";
        })
        .catch(error=>{
             toast.error(' Logged In failed try again')
        })
      
    }
    return (
  
  <div className='login-section'>

     <ToastContainer />

     <div className="flex items-center min-h-screen p-4  lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Music Bangla</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
          Music Bangla: Dive into the vibrant rhythms and melodies of Bengali tunes.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <a href="#" className="underline">Get Started!</a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />

{errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />

{errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button 
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <a
                onClick={handaleGoogleSignIn}
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span>
                  <FcGoogle />

                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">Google</span>
                </a>
              
              </div>
            </div>

            <div class="text-center">
                            <Link class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to={`/register`}> haven't an account? Registration!</Link>
							
							</div>
          </form>
        </div>
      </div>
    </div>

  </div>
    );
};

export default LoginComponent;