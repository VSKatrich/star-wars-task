import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Description from './components/Description'
import ShipDescription from './components/ShipDescription'
import Sidebar from './components/Sidebar'
import { getEpisode } from './api/api'

import './App.css'

function App() {
  const [initialization, setInitialization] = useState(false)
  const [data, setData] = useState({})

  const InitializationApp = () => {
    getEpisode().then(data => {
      setData(data)
      setInitialization(true)
    })
  }

  useEffect(() => {
    InitializationApp()
  }, [])

  if (!initialization) return <h2>WAIT</h2>

  return (
    <div className='container'>
      <Description data={data} />
      <div className='starships'>
        <Sidebar starships={data.starships} />

        <Routes>
          <Route path='ship/:shipId' element={<ShipDescription />} />
          <Route path="*" element={<div>Sorry, this page isn't available. </div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
