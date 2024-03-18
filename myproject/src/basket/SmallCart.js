
const SmallCart = ({singleBasketItem,amount}) => {

  
    return (
 <>
        <h1>{singleBasketItem.sweetName}</h1>
        <img src={singleBasketItem.imgSweet} alt={singleBasketItem.sweetName} />
        <h2> מחיר ליחידה:{singleBasketItem.sweetPrice}</h2>
        כמות:{amount}
        <h2 >סהכ מחיר:{singleBasketItem.sweetPrice * amount}  </h2>

       </>
    )
}

export default SmallCart;