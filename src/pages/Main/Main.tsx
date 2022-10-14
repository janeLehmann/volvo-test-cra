import { FC, useEffect, useState } from "react";
import { Flex, Spinner, useTheme, View } from "vcc-ui";

// COMPONENTS
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

// API
import { getCars } from "../../api/server";

// TYPES
import { CardItem } from "../../types";

type CarsStatus = "LOADING" | "SUCCESS" | "FAIL";

const Main: FC = () => {
  const theme = useTheme();
  const [cars, setCars] = useState<CardItem[]>([]);
  const [carsStatus, setCarsStatus] = useState<CarsStatus>("LOADING");

  useEffect(() => {
    getCars()
      .then(res => {
        if (res && Array.isArray(res)) {
          setCars(res);
          setCarsStatus("SUCCESS");
        }
      })
      .catch(() => {
        setCarsStatus("FAIL");
      });
  }, []);

  return (
    <View
      extend={{
        background: theme.color.background.primary,
        color: theme.color.foreground.secondary,
      }}
      minHeight="100vh"
    >
      <Header />
      {carsStatus === "LOADING" && (
        <Flex extend={{ height: "50vh", alignItems: "center", justifyContent: "center" }}>
          <Spinner size={48} />
        </Flex>
      )}
      {carsStatus === "SUCCESS" && cars.length > 0 && <List cars={cars} />}
      {carsStatus === "FAIL" && <p>Error</p>}
    </View>
  );
};

export default Main;
