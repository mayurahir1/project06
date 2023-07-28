import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Properties from './Properties'
import Team from './Team'
export default function RouterContainer() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Properties' element={<Properties />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Team' element={<Team />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
