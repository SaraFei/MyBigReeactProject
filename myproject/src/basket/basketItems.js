import { useSelector } from "react-redux";

import OneBasketItem from "./oneBasketItem";
import { Link } from "react-router-dom";


const BasketItems = () => {
    let basketArr = useSelector(state => state.basketState.basketProductArr);
    let totalAmount = 0;
    Math.floor(parseInt(totalAmount));
    for (let i = 0; i < basketArr.length; i++) {
        totalAmount += basketArr[i].product.sweetPrice * basketArr[i].amount;

    }


    return (
        <>
            סל קניות🛒
            {basketArr.length}
            <Link to='/allSweets'>
                <input type="button" value="המשך בקניה" />
            </Link>
            <Link to='/order'>
                <input type="button" value="סיום הזמנה" />
            </Link>
            <ul>
                {basketArr.map(item => {
                    return <li key={item.product._id}>
                        <OneBasketItem singleBasketItem={item.product} amount={item.amount} />
                    </li>
                })}
            </ul>
            סהכ עבור כל המוצרים בעגלה:{Math.round(parseInt(totalAmount))}

        </>
    );
}
/*item.product*/
export default BasketItems;