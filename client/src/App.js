import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Details from './pages/Details'
import FormPage from './pages/FormPage'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/formpage" element={<FormPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
