import './styles/App.css';
import Nav from './components/Nav';
import Home from './components/Home'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />  
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
