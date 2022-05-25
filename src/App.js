import './styles/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Posts from './components/Posts';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Nav />  
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = '/posts' element={<Posts />} />
          <Route path = '/posts/:id' element={<Posts />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
