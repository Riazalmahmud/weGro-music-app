import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./RegistrationComponent.css";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
const RegistrationComponent = () => {
  const { loginWithGoogle, users, createUserWithUserPassword } =
    useContext(AuthContext);
  const { register, watch } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handaleGoogleSignIn = () => {
    loginWithGoogle()
      .then((res) => {
        toast.success("Successfully Logged In");
        window.location.href = "/";
        if (users?.email) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        toast.error(" Logged In failed try again");
      });
  };

  const handleSubmit = (event) => {
	console.log('hello world')
    event.preventDefault();
    const validationErrors = {};

    // Email validation
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
	if(confirmPassword !== password){
		console.log("Please enter")
		return validationErrors.password = "Password Does not match";
	}

    // If there are validation errors, update the state and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If there are no validation errors, proceed with form submission
    createUserWithUserPassword(email, password)
      .then(() => {
        toast.success("Successfully create in");
        if (users?.email) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        toast.error("Logged In failed try again");
      });
  };
  return (
    <div className="hero-section">
      <ToastContainer />
      <div class="container mx-auto ">
        <div class="flex justify-center items-center h-screen px-6">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              }}
            ></div>

            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					value={email}
					onChange={handleEmailChange}
					autofocus
					required
                  />
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
					  value={password}
					  onChange={handlePasswordChange}
					  autofocus
					  required
                    />
                    <p class="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div class="md:ml-2 w-full">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                       type="password"
					   id="confirm-password"
					   value={confirmPassword}
					   onChange={handleConfirmPasswordChange}
					   autofocus
					   required 
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                 
            
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div class="mb-6 text-center">
                  <button
                    onClick={handleSubmit}
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>
                <hr class="mb-6 border-t" />

                <div className="flex flex-col space-y-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-14"></span>
                    <span className="font-normal text-gray-500">
                      or Registration with
                    </span>
                    <span className="h-px bg-gray-400 w-14"></span>
                  </span>
                  <div className="flex flex-col space-y-4">
                    <a
                      onClick={handaleGoogleSignIn}
                      href="#"
                      className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                    >
                      <span>
                        <FcGoogle />
                      </span>
                      <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                        Google
                      </span>
                    </a>
                  
                  </div>
                </div>

                <div class="text-center">
                  <Link
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to={`/login`}
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
