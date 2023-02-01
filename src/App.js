
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import PageNotFound from './Shared/PageNotFound/PageNotFound';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:ServicesId' element={<ServicesDetails></ServicesDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}> </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
