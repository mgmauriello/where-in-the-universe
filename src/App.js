import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Space from './pages/space';
import Stars from './components/stars';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Stars />
      <Routes>
        <Route path='/space' element={<Space />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
