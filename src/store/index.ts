import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "@/store/slice/loader";
import { generalSlice } from "@/store/slice/general";
import { vendorsApi } from "@/store/services/vendors";

const reducers = {
    [vendorsApi.reducerPath]: vendorsApi.reducer,
    [generalSlice.name]: generalSlice.reducer,
    [loaderSlice.name]: loaderSlice.reducer,
};

const reducer = combineReducers(reducers);

// Import the middleware from RTK-Query
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
    reducer,
    // Add the middleware for RTK-Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(vendorsApi.middleware),
});

// Set up listeners for automatic cache invalidation
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
