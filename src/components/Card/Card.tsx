import { FC } from "react";
import { Block, Flex, Link, Text, useTheme } from "vcc-ui";

// COMPONENTS
import StdLink from "../StdLink/StdLink";

// STYLE CONFIGS
import { IMAGE_CONTAINER_STYLES, IMAGE_STYLES, TOP_TEXT_CONTAINER_STYLES } from "./config";

// TYPES
import { CardItem } from "../../types";
import { ROW_FLEX_STYLES } from "../../styleConfig";

type CardProps = {
  data: CardItem;
};

const Card: FC<CardProps> = ({ data }) => {
  const theme = useTheme();
  const { typeScale } = useTheme();
  const { amundsen } = typeScale;
  const altDesc = `Image of ${data.modelName} ${data.modelType} ${data.bodyType}`;

  return (
    <Block>
      <Block extend={{ marginBottom: "1.438rem", position: "relative" }}>
        <Text
          variant="amundsen"
          as={amundsen.standard.element}
          extend={{
            ...amundsen.standard.styles,
            fontSize: "1rem",
            color: theme.color.foreground.secondary,
            textTransform: "uppercase",
            fontWeight: 500,
            "@media (max-width: 480px)": {
              fontSize: "1rem",
            },
          }}
        >
          {data.bodyType}
        </Text>
        <Flex extend={TOP_TEXT_CONTAINER_STYLES}>
          <Text
            variant="amundsen"
            as={amundsen.standard.element}
            extend={{
              ...amundsen.standard.styles,
              fontSize: "2rem",
              color: theme.color.foreground.primary,
              marginRight: "5px",
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
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
              "@media (max-width: 480px)": {
                fontSize: "1rem",
              },
            }}
          >
            {data.modelType}
          </Text>
        </Flex>
      </Block>

      <Block extend={IMAGE_CONTAINER_STYLES}>
        <img src={data.imageUrl} alt={altDesc} style={IMAGE_STYLES} />
      </Block>

      <Flex extend={ROW_FLEX_STYLES}>
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
