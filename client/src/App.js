import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/screens/Home'
import GameDetails from './components/screens/GameDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games/:id' element={<GameDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
