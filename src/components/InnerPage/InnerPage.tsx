import { FC } from "react";
import { useParams } from "react-router-dom";
import { Flex, Link } from "vcc-ui";

// COMPONENTS
import StdLink from "../../components/StdLink/StdLink";

// STYLE CONFIG
import { ROW_FLEX_STYLES } from "../../styleConfig";

// TYPES
import { InnerPageType } from "../../types";

type InnerPageProps = {
  type: InnerPageType;
};

const InnerPage: FC<InnerPageProps> = ({ type }) => {
  const { id } = useParams();

  return (
    <Flex extend={ROW_FLEX_STYLES}>
      <StdLink internal>
        <Link href="/" style={{ marginRight: "24px", fontSize: "1rem" }}>
          Home
        </Link>
      </StdLink>
      <StdLink internal>
        <Link href={`/${type.toLocaleLowerCase()}/${id}`} style={{ marginRight: "24px", fontSize: "1rem" }}>
          Learn
        </Link>
      </StdLink>
    </Flex>
  );
};

export default InnerPage;
