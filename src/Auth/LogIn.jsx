import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';

const LogIn = () => {
      const{logInUser,signWithGoogle}=use(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  const handleLogIn=(e)=>{
    e.preventDefault()
  
    const email=e.target.email.value
    const password=e.target.password.value
    logInUser(email,password)
    .then((res)=>{
      console.log(res.user)
   
   Swal.fire({
     title: "LogIN Successfully!",
     icon: "success",
     draggable: true
   });
      navigate(location.state || '/')
    })
    .catch((err)=>{
      console.log(err.message)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
       
      });
    })

  }
  const handleWithGoogle=()=>{
    signWithGoogle()
    .then((res)=>{
console.log(res.user)
 navigate(location.state || '/')
    })
    .catch((err)=>{
      console.log(err.message)
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
       
      });
    })
  }

    return (
       <div>
            <title>Register</title>
                  <h1 className="text-5xl font-bold text-center my-10 ">LogIN now!</h1>
             <div className="card  md:w-150 shrink-0 shadow-2xl mx-auto">
      <div className="card-body bg-form rounded-2xl ">
       <form onSubmit={handleLogIn}>

         <fieldset className="fieldset ">
          <label className="label text-xl ">Email</label>
          <input type="email" name='email' className="input  bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Email" />
          <label className="label text-xl ">Password</label>
          <input type="password" name='password' className="input   bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" placeholder="Password" />
          <div><a className="link link-hover  ">Forgot password?</a></div>
          <button className="w-full py-3 text-xl rounded-md text-slate-50 btn-active btn-primary mt-4">Log In</button>
          

        </fieldset>
       
       </form>
       {/* Google */}
       <button onClick={handleWithGoogle} className="btn my-2 py-3 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
 <p>Don't have an Account? Please <Link className='text-blue-400 hover:underline' to='/register'>Register now</Link></p>
      </div>
    </div>
        </div>
    );
};

export default LogIn;