import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Adashboard from './pages/Adashboard'
import Auth from './pages/Auth'

import Home from './pages/Home'
import Hotelsview from './pages/Hotelsview'
import Udashboard from './pages/Udashboard'
import Footer from './Components/Footer'
import Header from './Components/Header'
function App() {


  return (
    <>
    <Header></Header>
     <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/register' element={<Auth insideRegister/>}/>
<Route path='/admindashboard' element={<Adashboard/>}/>
<Route path='/userdashboard' element={<Udashboard/>}/>
<Route path='/viewhotel' element={<Hotelsview/>}/>
<Route path='/*' element={<Navigate to={'/'}/>}/>
     </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
