import './App.css';
import About from './components/About';
import Booking from './components/Booking';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './components/Signin';
import Home from './components/Home';
import Signup from './components/Signup';
import Signout from './components/Signout';
import { Card } from 'react-bootstrap';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
         <Header/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Menu' element={<Menu/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/booking' element={<Booking/>}/>
           <Route path='/signin' element={<Signin/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/signout' element={<Signout/>}/>
           <Route path='/search' element={<Search/>}/>
           <Route path='/card' element={<Card/>}/>
         </Routes>
         <Footer/>
       </BrowserRouter>
    </div>
  );
}
export default App;
