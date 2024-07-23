import{Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Homepage from './pages/Home'
import Edit from './pages/Edit'
function App() {
  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }} >

    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
      </div>
      </div>
  )
}

export default App
