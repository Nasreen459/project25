import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import HomeScreen from './Screen/HmeScreen/homeScreen';
import { Routes,Route } from 'react-router-dom';
import Products from './Screen/Products/products';
import Footer from  './Component/Footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/Products' element={<Products/>}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
