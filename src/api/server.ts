import { CardItem } from "../types";
import { get } from "./fetch";

const apiUrl = window.location.origin;

export function getCars() {
  type CarsListResult = {
    cars: CardItem[];
  };
  return get<CarsListResult>(`${apiUrl}/cars.json`);
}
