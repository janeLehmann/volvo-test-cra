import { useEffect, useState } from "react";
import { getCars } from "../api/server";
import { CardItem, CarsStatus } from "../types";

const useCarsData = (): [CarsStatus, CardItem[], string[]] => {
  const [cars, setCars] = useState<CardItem[]>([]);
  const [carsStatus, setCarsStatus] = useState<CarsStatus>("LOADING");
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    getCars()
      .then(res => {
        if (res && Array.isArray(res)) {
          setCars(res);
          const bodyTypes = Array.from(new Set(res.map(item => item.bodyType)));
          setFilters(bodyTypes);
          setCarsStatus("SUCCESS");
        }
      })
      .catch(() => {
        setCarsStatus("FAIL");
      });
  }, []);

  return [carsStatus, cars, filters];
};

export default useCarsData;
