import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import AllSweets from './feature/sweets/AllSweets';
import AllButtonsSweet from './feature/sweets/buttons/AllButtonsSweet';
import SweetDetails from './feature/sweets/SweetDerails';
function App() {

  return (
    <>
      <Router>
        <Routes>
       <Route path="/" element={<AllSweets />}/> 
       <Route path="details/:id" element={<SweetDetails/>}/></Routes>
       </Router>

      <AllButtonsSweet />
    </>
  );
}

export default App;
