import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/screens/Home'
import GameDetails from './components/screens/GameDetails';
import Cart from './components/screens/Cart'
import Login from './components/screens/Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games/:id' element={<GameDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
