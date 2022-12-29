import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import Card from './components/Card/Card';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/card/:id' element={<Card/>} />
        <Route path='/cart/:id' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} /> 
        <Route path='*' element={<NotFound/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
