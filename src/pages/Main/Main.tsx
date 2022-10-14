import { FC } from "react";
import { useTheme, View } from "vcc-ui";

// COMPONENTS
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

// DATA
import cars from "../../api/cars.json";

const Main: FC = () => {
  const theme = useTheme();

  return (
    <View
      extend={{
        background: theme.color.background.primary,
        color: theme.color.foreground.secondary,
      }}
      minHeight="100vh"
    >
      <Header />
      <List cars={cars} />
    </View>
  );
};

export default Main;
