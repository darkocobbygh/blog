import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchBar from './pages/SearchBar';
import News from './pages/News';
import AddArticle from './pages/AddArticle';
import IndieBlog from './pages/IndieBlog';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/news' element={<News/>}></Route>
      <Route path='/sports' element={<SearchBar/>}></Route>
      <Route path='add-blog' element={<AddArticle/>}></Route>
      <Route path='blog/:id' element={<IndieBlog/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
