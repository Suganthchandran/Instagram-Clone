import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Login from './pages/Login'
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import CreatePost from './pages/AddPost'
import Sidebar from './components/Sidebar'
import InstagramHome from './pages/Home'

function App() {
  return (
    <div>
      <SignedIn>
          <Navbar/>
        <InstagramHome/>
        <Navbar/>
      </SignedIn>

      <SignedOut>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path='*' element={<Login/>} />
              <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
      </SignedOut>
        
    </div>
  )
}

export default App
