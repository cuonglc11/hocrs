import { createSlice } from "@reduxjs/toolkit";
const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            // không có giá trị trả về
            state.push(action.payload)
            // console.log(state);
        }
    }
})
const { reducer, actions } = photo
export const { addPhoto } = actions
export default reducer