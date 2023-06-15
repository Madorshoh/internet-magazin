import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Categoriy from './components/category/Categoriy'
import Home from './pages/Home/Home'
import Search,{ MyContext } from './components/search/Search'
import Savatcha from './pages/savatcha/Savatcha'
import Sevimli from './pages/sevimlilar/Sevimli'
import Login from './pages/Login page/Login'

function App() {

  return (
    <Search>
      <MyContext.Consumer>
        {(x)=>{
          return(
            <>
              <Header/>
              <Routes>
                <Route index element={<Home/>} />
                <Route path='/categoriy/:name' element={<Categoriy/>}/>
                <Route path='/sevimli' element={<Sevimli/>}/>
                <Route path='/savatcha' element={<Savatcha/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>
              
            </>
          )
        }}
      </MyContext.Consumer>
    </Search>
  )
}

export default App
