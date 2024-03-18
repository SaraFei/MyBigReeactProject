import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";

import OneSweet from "./OneSweet";

import { saveAmountSweetsInClient } from "./sweetSlice"
import { getAllSweets, getQtyOfSweets } from "./SweetsApi.js";
import OneManagerAllSweets from "./OneManagerAllSweets.js";


const AllSweets = () => {
  let user = useSelector(state => state.userState.currentUser);
  let [sweetsArr, setSweetsArr] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    getAllSweets().then(
      res => {
        alert("hello sweets🍫 ");
        // dispatch(saveSweetsInClient(res.data))
        setSweetsArr(res.data);
      }
    )
    getQtyOfSweets().then(
      res => {


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
  }, [])

  // let sweetArr = useSelector(state => state.sweetState.sweetsArr);
  return (
    <>
      <h1>כל הממתקים🍬🍭</h1>
      <ul>
        {sweetsArr.map(item => {

          return <li key={item.id}>
            {!user? <OneSweet singleSweet={item} /> :user.role=='admin'&& <OneManagerAllSweets singleSweet={item} />}
          </li>
        })}
      </ul>
      <Outlet />
    </>

  );
}
/*
המורה עשתה אוטלט ללא תגית סגירה
*/
export default AllSweets;