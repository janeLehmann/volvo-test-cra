import { CardItem } from "../types";
import { get } from "./fetch";
import { setCarsRequestStatus, setInitialCars } from "../state/mainSlice";
import { store } from "../store";

const apiUrl = window.location.origin;

export function getCars() {
  type CarsListResult = {
    cars: CardItem[];
  };
  return get<CarsListResult>(`${apiUrl}/cars.json`)
    .then(res => {
      if (res && Array.isArray(res)) {
        store.dispatch(setInitialCars(res));
      }
    })
    .catch(() => {
      store.dispatch(setCarsRequestStatus("FAIL"));
    });
}
