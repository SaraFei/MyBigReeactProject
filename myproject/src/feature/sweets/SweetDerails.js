import { useLocation } from "react-router-dom";



const SweetDetails = () => {
    let location=useLocation();
    let sweet = location.state && location.state.singleSweet;
    console.log(sweet); 
    if (!sweet) {
        return <div>No sweet found!</div>; // or any other fallback UI
    }
    
  
    return ( 
        <>
        פרטי מוצר:
        <img src={sweet.imgSweet}/>
        </>
     );
}

export default SweetDetails;