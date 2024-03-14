import { useSelector } from "react-redux";

import OneBasketItem from "./oneBasketItem";


const BasketItems = () => {
    let basketArr = useSelector(state => state.basketState.basketProductArr);

    return (
        <>
            סל קניות🛒
            {basketArr.length}
            <ul>
                {basketArr.map(item => {
                    return <li key={item.id}>
                        <OneBasketItem singleBasketItem={item} />
                    </li>
                })}
            </ul>
        </>
    );
}

export default BasketItems;