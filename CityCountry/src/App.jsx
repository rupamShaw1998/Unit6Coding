import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AddCity } from './components/AddCity'
import { UpdateCity } from './components/UpdateCity'
import { Home } from './components/Home'
import { AddCountry } from './components/AddCountry'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-city" element={<AddCity />}></Route>
        <Route path="/update-city/:id" element={<UpdateCity />}></Route>
        <Route path="/add-country" element={<AddCountry />}></Route>
      </Routes>
    </div>
  )
}

export default App
