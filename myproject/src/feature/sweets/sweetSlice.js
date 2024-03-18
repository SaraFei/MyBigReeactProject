//זהו דף לכל מה שקשור לסטייט של הממתקים
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    sweetsArr: [],
    sweetsAmount: 0
}

const sweetSlice = createSlice({
    name: 'sweetState',//לבדוק מה משמעות השם
    initialState: initialState,
    reducers: {
        saveSweetsInClient: (state, action) => {
            state.sweetsArr = action.payload;
        },
        addSweetToClient: (state, action) => {
            state.sweetsArr.push(action.payload);
        },
        saveAmountSweetsInClient: (state, action) => {
            state.sweetsAmount = action.payload;
        },
        deleteSweetFromClient:(state,action)=>{
            let newArr = state.sweetsArr.filter(item => item._id !== action.payload)
            state.sweetsArr = newArr;
        }
    }

})

export const { saveSweetsInClient, addSweetToClient ,saveAmountSweetsInClient,deleteSweetFromClient} = sweetSlice.actions;
export default sweetSlice.reducer;
