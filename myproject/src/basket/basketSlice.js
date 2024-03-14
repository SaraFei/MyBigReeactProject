//זהו דף לכל מה שקשור לסטייט של סל הקניות
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basketProductArr: []
    
}

const basketSlice = createSlice({
    name: 'basketState',//לבדוק מה משמעות השם
    initialState: initialState,
    reducers: {
        addProductToClient: (state, action) => {
            state.basketProductArr.push(action.payload);
          
        }

    }

})

export const { addProductToClient} = basketSlice.actions;
export default basketSlice.reducer;
