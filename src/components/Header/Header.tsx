import { FC } from "react";
import { Logo, Block } from "vcc-ui";

const Header: FC = () => {
  return (
    <Block extend={{ padding: "2.5rem 3.75rem 1.25rem", marginBottom: "3.125rem" }}>
      <Logo type="spreadmark" height={20} />
    </Block>
  );
};

export default Header;
