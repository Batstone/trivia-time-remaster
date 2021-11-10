import { configureStore } from "@reduxjs/toolkit";

import gameInfoSlice from "./gameInfo-slice";

// Configure the store
const store = configureStore({ reducer: gameInfoSlice.reducer });

export default store;