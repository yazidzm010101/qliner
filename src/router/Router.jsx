import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '~/pages/Home'
import { ROUTE_PATH } from './path'

function Router() {
  return (
    <Routes>
        <Route element={<Home/>} path={ROUTE_PATH.index}/>
    </Routes>
  )
}

export default Router