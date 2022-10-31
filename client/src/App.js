import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="" element="">
            Home
          </Route>
          <Route path="" element="">
            Rollercoasters
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
