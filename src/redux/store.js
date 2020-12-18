import { configureStore } from "@reduxjs/toolkit";

import flashCardsReducer from "../components/flashCardSlice";

const store = configureStore({
  reducer: {
    flashCards: flashCardsReducer,
  },
});

export default store;
