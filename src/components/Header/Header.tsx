import { FC } from "react";
import { Logo, View } from "vcc-ui";

import "./Header.scss";

const Header: FC = () => {
  return (
    <View direction="row" justifyContent="space-between">
      <Logo type="spreadmark" height={20} />
    </View>
  );
};

export default Header;
