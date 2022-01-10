import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContactUs from './Components/ContactUs';
import Header from './Components/Header';
import Home from './Components/Home';
import PageNotFound from './Components/PageNoteFound';
import Students from './Components/Students';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='students' element={<Students/>}/>
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
