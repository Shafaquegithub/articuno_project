import './App.css';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt, FaTruck, FaArrowLeft } from "react-icons/fa";
import Navbar from './components/Navbar';
import Form from './components/Form';
import Payment from './components/Payment';
import Cart from './components/Cart';
import BottomBar from './components/BottomBar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='all_contents_div'>
        <Form />
        <Payment />
        <Cart />
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
