import { FC } from "react";
import { useTheme, View } from "vcc-ui";

// COMPONENTS
import Header from "../../components/Header/Header";

const Main: FC = () => {
  const theme = useTheme();

  return (
    <View
      extend={{
        background: theme.color.background.secondary,
        color: theme.color.foreground.alert,
      }}
      minHeight="100vh"
    >
      <Header />
    </View>
  );
};

export default Main;
