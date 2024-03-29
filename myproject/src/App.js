import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';



import AllSweets from './feature/sweets/AllSweets';
import AllButtonsSweet from './feature/sweets/buttons/AllButtonsSweet';
import SweetDetails from './feature/sweets/SweetDetails.js';
import BasketItems from './basket/basketItems.js';
import Order from './basket/Order.js';
import Login from './feature/user/Login.js';
import SignUp from './feature/user/SignUp.js';
import NavBar from './feature/NavBar/NavBar.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserLoginInState } from './feature/user/userSlice.js';
import GuestNavBar from './feature/NavBar/GuestNavBar.js';
import MyOrders from './order/MyOrders.js';
import ManagerNavBar from './feature/NavBar/ManagerNavBar.js';




function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    let user = localStorage.getItem("currentUser");
    if (user) {
      dispatch(saveUserLoginInState(JSON.parse(user)));
    }
  }, [])

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="allSweets" element={<AllSweets />}>
          <Route path="sweetDetails/:id" element={<SweetDetails />} />
          {/* <Route path='smallCart' element={<DialogSmallCart />} /> */}
          {/* </Route> */}
          {/* <Route path='smallCart' element={<DialogSmallCart />} /> */}

        </Route>
        <Route path='basket' element={<BasketItems />} />
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />
        {/* <Route path='order' element={<Order />} /> */}
        <Route path='myOrders' element={<MyOrders />} />
      </Routes>


      <AllButtonsSweet />
    </>
  );
}

export default App;
