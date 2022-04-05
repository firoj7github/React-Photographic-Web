import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Package from './components/Package/Package';
import Dashboard from './components/Dashboard/Dashboard';
import Review from './components/Review/Review';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Package' element={<Package></Package>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
