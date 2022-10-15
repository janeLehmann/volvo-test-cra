import { FC } from "react";
import { Block, Checkbox, Flex, useTheme, Click } from "vcc-ui";
import { CHECKBOX_LIST_STYLES, FILTER_CONTAINER_STYLES } from "./config";

type FilterProps = {
  filters: string[];
  initialFilters: string[];
  setFilters: (filters: string[]) => void;
};

const Filter: FC<FilterProps> = ({ initialFilters, filters, setFilters }) => {
  const theme = useTheme();
  const { typeScale } = useTheme();
  const { amundsen } = typeScale;

  const onChangeFilters = (name: string, value: boolean) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFilters((prevState: string[]) => {
      return !value ? prevState.filter(item => item !== name) : [...prevState, name];
    });
  };

  return (
    <Flex extend={FILTER_CONTAINER_STYLES}>
      <Flex extend={CHECKBOX_LIST_STYLES}>
        {initialFilters.map(item => (
          <Block extend={{ marginRight: 15 }} key={item}>
            <Checkbox
              label={
                <Block
                  extend={{
                    ...amundsen.standard.styles,
                    fontSize: "0.8rem",
                    color: theme.color.foreground.secondary,
                    textTransform: "uppercase",
                    fontWeight: 500,
                    marginRight: 15,
                    "@media (max-width: 480px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  {item}
                </Block>
              }
              checked={filters.includes(item)}
              onChange={e => onChangeFilters(item, e.target.checked)}
            />
          </Block>
        ))}
      </Flex>

      <Click onClick={() => setFilters(initialFilters)}>Reset filters</Click>
    </Flex>
  );
};

export default Filter;
