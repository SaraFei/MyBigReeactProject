import { useDispatch, useSelector } from "react-redux";
import { addOrderToServer } from "../order/OrderApi"
import { useState } from "react";
import { setCustomerAddress } from "./basketSlice";


const Order = () => {
    let dispatch = useDispatch();
    let basketArr = useSelector(state => state.basketState.basketProductArr);
    let user = useSelector(state => state.userState.currentUser);
    let customerAddress = useSelector(state => state.basketState.customerAddress);
    let [showAddress, setShowAddress] = useState(false);
    const handleAddNewOrder = (e) => {
        let productsDetails = [];
        for (let i = 0; i < basketArr.length; i++) {
            productsDetails[i] = {
                productName: basketArr[i].product.sweetName,
                amount: basketArr[i].amount
            }

        }
        let newOrder = {
            customerAddress: customerAddress,
            productsDetails: productsDetails

        }
        console.log(newOrder.customerAddress + "כתובת");
        console.log(newOrder.productsDetails[0] + "מוצר וכמות");

        addOrderToServer(newOrder, user.token).then(res => {
            console.log(res.data);
            alert("ההזמנה נקלטה בהצלחה")

        }).catch(err => {
            console.log(user._id);
            console.log(err);
        })
    }

    return (
        <>
            הזמנה
            <input type='button' value=" הזמן " onClick={() => { setShowAddress(true) }} />
            {showAddress && <> <input type="text" placeholder="הקש כתובת" onChange={(e) => { dispatch(setCustomerAddress(e.target.value)) }} />
                <input type="button" value="אישור" onClick={handleAddNewOrder} /></>
            }
        </>
    );
}

export default Order;
