import { useState } from "react";

const ShoppingList = () => {
    let [shoppingListArr, setShoppingListArr] = useState([{ product: "Bamba", dateToDisplay: new Date(2024, 4, 2), qty: 2, frequency: 7 },
    { product: "Sugar", dateToDisplay: new Date(2024, 4, 2), qty: 3, frequency: 14 }])
    // let shoppingListArr = [{ product: "Bamba", dateToDisplay: new Date(2024, 4, 2), qty: 2, frequency: 7 },
    // { product: "Sugar", dateToDisplay: new Date(2024, 4, 2), qty: 3, frequency: 14 }]
    const today = new Date();
    let showArr = [];

    for (let i = 0; i < shoppingListArr.length; i++) {
        if (shoppingListArr[i].dateToDisplay.getDate() == today.getDate() &&
            shoppingListArr[i].dateToDisplay.getMonth() == today.getMonth() + 1 &&
            shoppingListArr[i].dateToDisplay.getFullYear() == today.getFullYear()
        )
            showArr.push(shoppingListArr[i])

    }
    const bought = () => {
        let newArr = [...shoppingListArr];
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].frequency <= 31) {
                newArr[i].dateToDisplay = new Date(today.setDate(today.getDate() + shoppingListArr[i].frequency))
            }
            else if (newArr[i].frequency > 31 && shoppingListArr[i].frequency <= 62) {
                newArr[i].dateToDisplay = new Date(today.setMonth(today.getDate() + shoppingListArr[i].frequency))
            }

        }
        setShoppingListArr(newArr);
    }
    return (<>
        רשימת קניות להיום
        <ul>
            {showArr.map(item => <li>
                {item.product}
            </li>)}
        </ul>
        <br />
        <input type="button" value="קניתי✅" onClick={bought} />
    </>);
}

export default ShoppingList;