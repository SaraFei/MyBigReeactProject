
import { useDispatch } from 'react-redux';
import { addProductToClient, decrementProductQuantity, deleteProductFromBasket } from './basketSlice';


const OneBasketItem = ({ singleBasketItem, amount }) => {



    let dispatch = useDispatch();
    const addProduct = () => {
        dispatch(addProductToClient(singleBasketItem))
    }
    const removeProduct = () => {
        // if (amount == 1) {
        //     removeProductFromBasket();
        // }
        if (amount != 1) {
            dispatch(decrementProductQuantity(singleBasketItem))
        }
    }
    const removeProductFromBasket = () => {
        dispatch(deleteProductFromBasket(singleBasketItem._id));
    }



    return (<>
        <h1>{singleBasketItem.sweetName}</h1>
        <img src={singleBasketItem.imgSweet} alt={singleBasketItem.sweetName} />
        <h2> מחיר ליחידה:{singleBasketItem.sweetPrice}</h2>
        <h2 >סהכ מחיר:{singleBasketItem.sweetPrice * amount}  </h2>
        <input type='button' value='+' onClick={() => { addProduct() }} />
        {amount}
        <input type='button' value='-' onClick={() => { removeProduct() }} />
        <input type='button' value='🗑מחק מהסל' onClick={() => { removeProductFromBasket() }} />

    </>);
}
export default OneBasketItem;