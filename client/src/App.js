import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/screens/Home'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
