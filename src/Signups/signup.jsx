
import { Link } from 'react-router-dom'
import React, { useState } from 'react'


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
    else if(!values.email)
    {
        errors.email = "Email cannot be empty" ;
    }
    else if(values.email.length < 8)
    {
        errors.email = "Email must contain at least 8 characters";
    }
    else if(!values.number)
    {
        errors.number = "Number cannot be empty" ;
    }
    else if(values.number.length < 10)
    {
        errors.number = "Number must contain 10 characters";
    }
    else if(!values.password)
    {
        errors.password = "Password cannot be empty" ;
    }
    else if(values.password.length < 8)
    {
        errors.password = "Password must contain at least 8 characters";
    }
    else if(!values.confirmpassword)
    {
        errors.confirmpassword = "Password cannot be empty" ;
    }
    else if(values.confirmpassword != values.password)
    {
        errors.confirmpassword = "Password does not match";
    }
    return errors;
}

const Signup = () => {
    const [values, setValues] = useState({
        email:'',
        name:'',
        number:'',
        password: '',
        confirmpassword: ''
    })

    const [errors, setError] = useState({
        email: '',
        name: '',
        number: '',
        password: '',
        confirmpassword: ''
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
        <p className="text-light-3 small-medium md:base-regular mt-2 text-3xl pb-4">Welcome back! Please Enter your Account Details </p>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-indigo-300 rounded-lg p-6 px-9'>
        <label htmlFor='email' className='text-2xl '>Email id</label>
        <input name="email" type="email" className='h-12 w-72 border-2 border-zinc-900 rounded-md bg-indigo-400' value={values.email} onChange={handleChange} required/><br/>
        {errors.email && <p className='text-red-600'>{errors.email}</p>}

        <label htmlFor='username' className='text-2xl '>Username</label>
        <input name="name" type="username" className='h-12 w-72 border-2 border-zinc-900 rounded-md bg-indigo-400' value={values.name} onChange={handleChange} required/><br/>
        {errors.name && <p className='text-red-600'>{errors.name}</p>}

        <label htmlFor='phone' className='text-2xl '>Phone number</label>
        <input name="number" type="tel" pattern='[0-9]{10}' className='h-12 w-72 border-2 border-zinc-900 rounded-md bg-indigo-400' value={values.number} onChange={handleChange} required/><br/>
        {errors.number && <p className='text-red-600'>{errors.number}</p>}

        <label htmlFor='password' className='text-2xl '>Password</label>
        <input name="password" type="password" className='h-12 w-72 border-2 border-zinc-900 rounded-md bg-indigo-400' value={values.password} onChange={handleChange} required/><br/>
        {errors.password && <p className='text-red-600'>{errors.password}</p>}

        <label htmlFor='confirmpassword' className='text-2xl '>Confirm Password</label>
        <input name="confirmpassword" type="password" className='h-12 w-72 border-2 border-zinc-900 rounded-md bg-indigo-400' value={values.confirmpassword} onChange={handleChange} required/><br/>
        {errors.confirmpassword && <p className='text-red-600'>{errors.confirmpassword}</p>}

        <button type="submit" className="text-black bg-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-10 w-40">Sign-up</button>
        <p>Already have an account?
      <Link to='/' className='text-yellow-400'>Sign in</Link>
      </p>
      </form>
    </div>
  )
}

export default Signup
