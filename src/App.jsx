import './App.css';
import Home from './Home';
import Historial from './Historial';
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/historial" Component={Historial} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
