import Home from './Home';
import History from './History';
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/historial" Component={History} />
            <Route path="*" Component={NotFound} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
