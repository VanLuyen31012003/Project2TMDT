import { useState } from "react";
import Apiuser from "../../APi/ApiUser";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
    const [user,setUser]=useState({tendangnhap:"",matkhau:""})
    const navigate =useNavigate()
    const Check=async(e)=>{
        e.preventDefault();  // Ngừng hành vi mặc định của form

        const response = await Apiuser.apiLogin(user)
        if(response.data.data==="Success")
        {
          
           const response1 =await Apiuser.apiusergetname(user)
           localStorage.setItem("tendangnhap",response1.data.data.tendangnhap)
           localStorage.setItem("mataikhoan",response1.data.data.mataikhoan)

            navigate('/home')
        }
        else
           alert("Thất bại")
    }
    const handleinput=(e)=>{       
        const {name,value}=e.target;
        setUser({...user,[name]:value,})
    }
    
    
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Tài khoản
              </label>
              <input
                type="text"
                id="email"
                name="tendangnhap"

                onChange={handleinput}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                name="matkhau"

                onChange={handleinput}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
  
            {/* Login Button */}
            <div className="mb-4">
              <button  onClick={Check}
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
                Login
              </button>
            </div>
            {/* Additional Options */}
            <div className="text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  