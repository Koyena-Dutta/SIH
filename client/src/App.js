import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import HomePage from './pages/Homepage';

import Login from './pages/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ActiveSlider from './Components/ActiveSlider';



function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Router>
        <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/pages/login" element={<Login />} />
        <Route path="/activeslider" element={<ActiveSlider />} />
        </Routes>
      </Router>

      <Footer />



    </div>
    
  );
}

export default App;
