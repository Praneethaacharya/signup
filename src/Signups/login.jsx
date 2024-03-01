
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const validation = (values) => {
    let errors = {}
    if(!values.name)
    {
        errors.name = "Name cannot be empty" ;
    }
    else if(values.name.length < 5)
    {
        errors.name = "Name must contain at least 5 characters";
    }
    else if(!values.password)
    {
        errors.password = "Password cannot be empty" ;
    }
    else if(values.password.length < 8)
    {
        errors.password = "Password must contain at least 8 characters";
    }
    return errors;
}

const Login = () => {
    const [values, setValues] = useState({
        name:'',
        password: ''
    })

    const [errors, setError] = useState({
        name:'',
        password:''
    })

    function handleChange(e) {
        setValues({...values, [e.target.name]:e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        setError(validation(values));
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
        <p className="text-light-3 small-medium md:base-regular mt-2 text-3xl pb-14">Welcome back! Please Enter your Account Details </p>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-indigo-300 rounded-lg p-6'>
        <label htmlFor='username' className='text-2xl pb-4'>Username</label>
        <input name='name' type="text" className='h-16 w-72 border-2 border-zinc-900 rounded-md bg-indigo-400' value={values.name} onChange={handleChange} required/><br/>
        {errors.name && <p className='text-red-600'>{errors.name}</p>}
        <label htmlFor='password' className='text-2xl pb-4'>Password</label>
        <input name='password' type="password" className='h-16 w-72 border-2 border-zinc-900 rounded-md bg-indigo-400'  value={values.password} onChange={handleChange} required/><br/>
        {errors.password && <p className='text-red-600'>{errors.password}</p>}
        <button type="submit" className="text-black bg-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-10 w-40">Login</button>
        <p>Create an account?
      <Link to='/sign-up' className='text-yellow-400'>Sign up</Link>
      </p>
      </form>
    </div>
  )
}

export default Login
