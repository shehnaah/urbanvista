import React from 'react'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Profile from './pages/Profile'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signout' element={<SignOut/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
