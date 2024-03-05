import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from 'react';

import OneSweet from "./OneSweet";

import {saveAmountSweetsInClient} from "./sweetSlice"
import { getQtyOfSweets } from "./SweetsApi";

const AllSweets = () => {

    let dispatch = useDispatch();
    useEffect(() => {
      getQtyOfSweets().then(
        res => {
  
          alert("hello sweets🍫 ");
          alert(res.data.cnt);
          console.log(res.data.cnt);
          dispatch(saveAmountSweetsInClient(res.data.cnt))
        }
      )
        .catch(
          (err) => {
            console.log(err);
            alert("לא הצליח להביא את הממתקים");
          }
        )
    },[])

    let sweetArr = useSelector(state => state.sweetState.sweetsArr);
    return (
        <>
            <h1>כל הממתקים🍬🍭</h1>
            <ul>
                {sweetArr.map(item => { return<li key={item.id}>
                    <OneSweet singleSweet={item}/>
                </li> })}
            </ul>
        </>
    );
}

export default AllSweets;