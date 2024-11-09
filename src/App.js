import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage';
import Footer from './components/Uitily/Footer';
import LoginPage from './pages/Auth/LoginPage';
import NavBarLogin from './components/Uitily/NavBarLogin';
import AllCategoryPage from './pages/Category/AllCatergoryPage';
import Register from './pages/Auth/Register';
function App() {
  return (
    <div className='font'>
    <NavBarLogin/>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AllCatergoryPage" element={<AllCategoryPage />} />
      </Routes>
       </BrowserRouter>
       <Footer />
   </div>
  );
}

export default App;
