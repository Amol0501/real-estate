// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import About from "./pages/About"
import CreateListing from "./pages/CreateLinsting"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import UpdateListing from './pages/updateListing';

const App = () => {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/sign-in" element = {<SignIn />} />
      <Route path="/sign-up" element = {<SignUp />} />
      <Route path="/about" element = {<About />} />
      <Route element = {<PrivateRoute />}>
        <Route path="/profile" element = {<Profile />} />
        <Route path="/create-listing" element = {<CreateListing />} />
        <Route path='/update-listing/:listingId' element={<UpdateListing />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App