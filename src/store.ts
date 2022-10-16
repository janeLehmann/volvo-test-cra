import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./state/mainSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
