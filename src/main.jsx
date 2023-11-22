import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Github, { githubInfoLoader } from './components/github/Github'

    // const router = createBrowserRouter([
    //   {paht: '/', element:<LayOut/>,
    //   children:[
    //     {path:'', element:<Home/>},
    //     {path:'/about', element:<About/>},
    //     {path:'/contact', element:<Contact/>},
    //   ]
    
    // }
    // ])

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<LayOut/>}>
          <Route path='' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user/:userid' element={<User/>} />
          <Route loader={githubInfoLoader}
           path='/github' element={<Github/>} />
        </Route>
      )
    )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
