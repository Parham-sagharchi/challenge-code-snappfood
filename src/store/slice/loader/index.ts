import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoaderState } from "@/types/store/slice/loader";

const initialState: LoaderState = {
    isLoading: false
};

export const loaderSlice = createSlice({
    initialState,
    name: "loaderSlice",
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
