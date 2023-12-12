import Porcentagem from './pages/Porcentagem';
import OperFund from './pages/OperFund';
import Home from './pages/Home';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Porcentagem' element={<Porcentagem />}></Route>
          <Route path='/OperFund' element={<OperFund />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
