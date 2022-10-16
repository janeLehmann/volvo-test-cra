import { FC, useEffect } from "react";
import { Flex, Spinner, useTheme, View } from "vcc-ui";
import { useSelector } from "react-redux";

// COMPONENTS
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Filter from "../../components/Filter/Filter";

// TYPES
import { RootState } from "../../store";

// API
import { getCars } from "../../api/server";

const Main: FC = () => {
  const theme = useTheme();
  const { typeScale } = useTheme();
  const { amundsen } = typeScale;
  const { carsRequestStatus } = useSelector((state: RootState) => state.main);

  useEffect(() => {
    getCars();
  }, []);

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
      {carsRequestStatus === "LOADING" && (
        <Flex extend={{ height: "50vh", alignItems: "center", justifyContent: "center" }}>
          <Spinner size={48} />
        </Flex>
      )}
      {carsRequestStatus === "SUCCESS" && (
        <>
          <Filter />
          <List />
        </>
      )}
      {carsRequestStatus === "FAIL" && <p>Error</p>}
    </View>
  );
};

export default Main;
