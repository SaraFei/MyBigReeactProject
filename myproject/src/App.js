import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';



import AllSweets from './feature/sweets/AllSweets';
import AllButtonsSweet from './feature/sweets/buttons/AllButtonsSweet';
import SweetDetails from './feature/sweets/SweetDetails.js';
import BasketItems from './basket/basketItems.js';
import Order from './basket/Order.js';
function App() {

  return (
    <>

      <Routes>
        <Route path="allSweets" element={<AllSweets />}>
          <Route path="sweetDetails/:id" element={<SweetDetails />} />
        </Route>
        <Route path='basket' element={<BasketItems />} />
        <Route path='order' element={<Order />} />
      </Routes>


      <AllButtonsSweet />
    </>
  );
}

export default App;
