import './App.css'
import { City } from './components/City'
import { Routes, Route } from 'react-router-dom'
import { AddCity } from './components/AddCity'
import { UpdateCity } from './components/UpdateCity'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<City />}></Route>
        <Route path="/add-city" element={<AddCity />}></Route>
        <Route path="/update-city/:id" element={<UpdateCity />}></Route>
      </Routes>
    </div>
  )
}

export default App
