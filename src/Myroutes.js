import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'

const Myroutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cart' element={<Cart />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Myroutes