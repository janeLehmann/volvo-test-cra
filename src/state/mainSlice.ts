import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardItem, CarsRequestStatus, ThemeType } from "../types";

export interface MainState {
  themeType: ThemeType;
  filters: string[];
  initialFilters: string[];
  initialCars: CardItem[];
  cars: CardItem[];
  carsRequestStatus: CarsRequestStatus;
}

const initialState: MainState = {
  themeType: "light",
  filters: [],
  initialFilters: [],
  initialCars: [],
  cars: [],
  carsRequestStatus: "LOADING",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setThemeType: (state, action: PayloadAction<ThemeType>) => {
      state.themeType = action.payload;
    },
    setInitialCars: (state, action: PayloadAction<CardItem[]>) => {
      state.initialCars = action.payload;
      state.cars = action.payload;
      state.initialFilters = Array.from(new Set(action.payload.map(item => item.bodyType)));
      state.carsRequestStatus = "SUCCESS";
    },
    setCars: (state, action: PayloadAction<CardItem[]>) => {
      state.cars = action.payload;
    },
    setFilters: (state, action: PayloadAction<string[]>) => {
      const { initialFilters, initialCars } = state;
      state.filters = action.payload;
      state.cars = initialCars.filter(item => action.payload.includes(item.bodyType));
      if (action.payload.length === initialFilters.length || !action.payload.length) {
        state.cars = initialCars;
      }
    },
    setCarsRequestStatus: (state, action: PayloadAction<CarsRequestStatus>) => {
      state.carsRequestStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setThemeType, setInitialCars, setFilters, setCarsRequestStatus } = mainSlice.actions;

export default mainSlice.reducer;
