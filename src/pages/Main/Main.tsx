import { FC, useEffect, useMemo, useState } from "react";
import { Flex, Spinner, useTheme, View } from "vcc-ui";

// COMPONENTS
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Filter from "../../components/Filter/Filter";

// TYPES
import useCarsData from "../../hooks/useCarsData";

const Main: FC = () => {
  const theme = useTheme();
  const { typeScale } = useTheme();
  const { amundsen } = typeScale;
  const [carsStatus, cars, initialFilters] = useCarsData();
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const filteredCars = useMemo(() => {
    return cars.filter(item => filters.includes(item.bodyType));
  }, [cars, filters]);

  return (
    <View
      extend={{
        ...amundsen.standard.styles,
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
      {carsStatus === "SUCCESS" && (
        <>
          <Filter filters={filters} initialFilters={initialFilters} setFilters={setFilters} />
          <List cars={filteredCars} />
        </>
      )}
      {carsStatus === "FAIL" && <p>Error</p>}
    </View>
  );
};

export default Main;
