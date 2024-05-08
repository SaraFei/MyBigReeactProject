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
  let [deletedSweet, setDeletedSweet] = useState(false);
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
  }, [deletedSweet])

  // let sweetArr = useSelector(state => state.sweetState.sweetsArr);
  return (
    <>
      <h1>כל הממתקים🍬🍭</h1>

      <div style={{ display: 'grid', marginTop: "2%", marginLeft: "0.5%", gridTemplateColumns: "1fr 1fr 1fr" }}>

        {sweetsArr.map(item =>

          !user||user.role=='user' ? <OneSweet key={item.id} singleSweet={item} /> : user.role == 'admin' && <OneManagerAllSweets singleSweet={item} setDeletedSweet={setDeletedSweet} />

        )}

        <Outlet />
      </div>
    </>

  );
}

export default AllSweets;