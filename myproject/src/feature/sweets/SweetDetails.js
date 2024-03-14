
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addProductToClient } from "../../basket/basketSlice";



const SweetDetails = () => {
let dispatch=useDispatch();
    let location=useLocation();
    let sweet = location.state; 

    if (!sweet) {
        return <div   style={{backgroundColor:"red" ,position:"fixed" ,width:"100vw",height:"100vh"}}>No sweet found!</div>; // or any other fallback UI
    }
    
  
    return ( 
    <div style={{backgroundColor:"red" ,position:"fixed" ,width:"100vw",height:"100vh",top:0}}>
        פרטי מוצר:
        <img src={sweet.imgSweet}/>
       <h1>{sweet.sweetName}</h1>
       <button onClick={()=>{dispatch(addProductToClient(sweet))}}>הוסף לסל</button> 
       <Link to={"/basket"}>
        <input type="button" value="מעבר לסל הקניות"/>
       </Link>

       </div>
       
     );
     
}

export default SweetDetails;