import { createSlice } from '@reduxjs/toolkit';

const Cardslice = createSlice({
    name: "Card",
    initialState:[],
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter((item)=>item.id !== action.payload);
        }
    }
})

export const {add, remove} = Cardslice.actions;
export default Cardslice.reducer;