import { FC } from "react";
import { Block, Flex, Link, Text, useTheme } from "vcc-ui";

import StdLink from "../StdLink/StdLink";

// TYPES
import { CardItem } from "../../types";

type CardProps = {
  data: CardItem;
};

const Card: FC<CardProps> = ({ data }) => {
  const theme = useTheme();
  const { typeScale } = useTheme();
  const { amundsen } = typeScale; // Contains "standard", "inline-link" and "emphasis"
  const altDesc = `Image of ${data.modelName} ${data.modelType} ${data.bodyType}`;

  return (
    <Block>
      <Block extend={{ marginBottom: "1.438rem" }}>
        <Text
          variant="amundsen"
          as={amundsen.standard.element}
          extend={{
            ...amundsen.standard.styles,
            fontSize: "2rem",
            color: theme.color.foreground.secondary,
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {data.bodyType}
        </Text>
        <Flex extend={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            variant="amundsen"
            as={amundsen.standard.element}
            extend={{
              ...amundsen.standard.styles,
              fontSize: "2rem",
              color: theme.color.foreground.primary,
            }}
          >
            {data.modelName}
          </Text>
          <Text
            variant="amundsen"
            as={amundsen.standard.element}
            extend={{
              ...amundsen.standard.styles,
              fontSize: "2rem",
              color: theme.color.foreground.secondary,
            }}
          >
            {data.modelType}
          </Text>
        </Flex>
      </Block>

      <Block extend={{ marginBottom: "0.938rem" }}>
        <img src={data.imageUrl} alt={altDesc} style={{ maxWidth: "100%" }} />
      </Block>

      <Flex extend={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <StdLink internal>
          <Link href={`/learn/${data.id}`} arrow="right" style={{ marginRight: "24px", fontSize: "1rem" }}>
            Learn
          </Link>
        </StdLink>

        <StdLink internal>
          <Link href={`/shop/${data.id}`} arrow="right" style={{ fontSize: "1rem" }}>
            Shop
          </Link>
        </StdLink>
      </Flex>
    </Block>
  );
};

export default Card;
