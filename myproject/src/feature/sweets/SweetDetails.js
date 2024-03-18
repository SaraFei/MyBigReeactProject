
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
        <div style={{ backgroundColor: "red", position: "fixed", width: "100vw", height: "100vh", top: 0 }}>
            פרטי מוצר:
            <img src={sweet.imgSweet} />
            <h1>{sweet.sweetName}</h1>


            <button onClick={() => {
                dispatch(addProductToClient(sweet));
                showSmallCart();
            }} >הוסף לסל</button>
            {isClick && <DialogSmallCart setIsClick={setIsClick} isClick={isClick}/>}
            <Link to={"/basket"}>
                <input type="button" value="מעבר לסל הקניות" />
            </Link>

        </div>

    );

}

export default SweetDetails;