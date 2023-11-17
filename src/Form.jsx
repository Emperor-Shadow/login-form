import { useState } from "react";
import google from "./assets/google.svg";
export default function Form() {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [value, setValue] = useState('');
    var email = document.querySelector('.error-msg');
    function check (e) {
        e.preventDefault();
        setValue(e.target.value)
        
        if ( e.target.value.match(emailRegex)) {
            // console.log('matchjk');
            email.innerText = "";

        } else {
            // console.log('no match');
            email.innerText = "invalid email";
        }
    }
    

  return (
    <div className="md:w-full w-full rounded h-full md:p-10 p-0 form">
        <h1 className="text-xl font-semibold login-header">Login</h1>

            <div className="form-group">
                <div className="email">
                     <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email address" 
                        value = {value} 
                        className="border border-gray-400 dark:bg-white focus:border-gray-600 mt-10 email-field p-4 w-full rounded focus:outline-none "
                        onChange={e=>{check(e)}}
                        id="email"/>
                        <span className="text-xs font-semibold error-msg text-red-500 inline-block relative top-{-10px}"></span>
                </div>
               <div className="password relative">
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    className="mt-5 p-4 w-full rounded focus:outline-none border border-gray-400 focus:border-gray-600" 
                    id="password" 
                    />
                    <i className="fas fa-eye absolute text-blue-400 cursor-pointer"></i>
               </div>
                
            </div>

            <div className="form-actions w-full py-5 flex justify-between items-center">
                    <a href="#" className="green text-sm">Forgot password?</a>
                    <button className="px-6 py-3 login-btn text-white focus:outline-none rounded dark:bg-red-900">Login</button>
            </div>

            <hr className="w-full"/>

            <p className="pt-2 pb-5 text-center w-full text-xs">or login with</p>

            <div className="social-actions flex justify-between items-center">
                    <a href="#" className="flex cursor-pointer items-center justify-center py-2 px-4  focus:outline-none rounded  hover:shadow-xl">
                        <i className="fab fa-facebook text-blue-600 text-2xl mr-2"></i>
                        Facebook
                    </a>

                    <a href="#" className="flex cursor-pointer items-center justify-center py-3 px-4 focus:outline-none rounded hover:shadow-xl">
                       <img src= {google} alt="" className="h-6 mr-2" />
                        Google
                    </a>
            </div>
      </div>
        
  )
}

