import './styles/App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Posts from './components/Posts';
import Post from './components/Post'
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
          <Route path = '/posts/:id' element={<Post />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
