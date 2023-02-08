import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Bg from './components/Bg'
import Home from './Routes/Home'
import Drinks from './Routes/Drinks'
import Food from './Routes/Food'

function App() {
  

  return (
    <div className="App">
      {/* <Header></Header>
      <Title></Title>
      <Bg></Bg> */}
      {/* <Banner></Banner> */}
      {/* <ImageHome></ImageHome> */}

      <BrowserRouter>
        <Bg></Bg>
        <Routes>
          <Route path='/skybarvaldivia/' element={ <Home></Home> }></Route>
          <Route path='/skybarvaldivia/drinks/' element={ <Drinks></Drinks> }></Route>
          <Route path='/skybarvaldivia/food/' element={ <Food></Food> }></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
