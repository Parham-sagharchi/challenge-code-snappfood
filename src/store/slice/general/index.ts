import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralState } from "@/types/store/slice/general";

const initialState: GeneralState = {
    page: 0,
    pageSize: 10,
    lat: 35.754,
    long: 51.328,
};

export const generalSlice = createSlice({
    initialState,
    name: "generalSlice",
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    }
});

export const { setPage } = generalSlice.actions;

export default generalSlice.reducer;
