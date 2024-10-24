import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './pages/auth';
import Home from './pages/home';
import SignUp from './pages/signauth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/register" element={<SignUp />} />
          <Route path = "/dashboard" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
