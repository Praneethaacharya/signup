import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from  './Signups/login.jsx';
import Signup from './Signups/signup.jsx';;

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
