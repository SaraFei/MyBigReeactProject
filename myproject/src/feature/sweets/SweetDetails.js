
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux"
import { useState } from "react";

import { addProductToClient } from "../../basket/basketSlice";
import DialogSmallCart from "../../basket/DialogSmallCart";



const SweetDetails = () => {
    let [isClick, setIsClick] = useState(false);
    let dispatch = useDispatch();
    let location = useLocation();
    let sweet = location.state;

    const showSmallCart = () => {
        setIsClick(true);
    }
    if (!sweet) {
        return <div style={{ backgroundColor: "red", position: "fixed", width: "100vw", height: "100vh" }}>No sweet found!</div>; // or any other fallback UI
    }


    return (
        <div style={{ position: 'fixed', top: 0, width: "100vw", height: "100vh", backgroundColor: "white", fontFamily: "fantasy",marginTop:"100px" }}>
             <div style={{ marginLeft: '50%', marginTop: '10%' }}>
            פרטי מוצר:
            <img src={sweet.imgSweet} /></div>
            <h1>{sweet.sweetName}</h1>

<div style={{backgroundColor:'red'}}>
            <button onClick={() => {
                dispatch(addProductToClient(sweet));
                showSmallCart();
            }} >הוסף לסל</button></div>
            {isClick && <DialogSmallCart setIsClick={setIsClick} isClick={isClick}/>}
            <Link to={"/basket"}>
                <input type="button" value="מעבר לסל הקניות" />
            </Link>

        </div>

    );

}

export default SweetDetails;