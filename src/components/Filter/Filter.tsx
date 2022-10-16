import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Block, Checkbox, Flex, useTheme, Click } from "vcc-ui";

// CONFIG
import { CHECKBOX_LIST_STYLES, FILTER_CONTAINER_STYLES } from "./config";

// STORE
import { setFilters } from "../../state/mainSlice";
import { RootState } from "../../store";

const Filter: FC = () => {
  const dispatch = useDispatch();
  const { filters, initialFilters } = useSelector((state: RootState) => state.main);
  const theme = useTheme();
  const { typeScale } = useTheme();
  const { amundsen } = typeScale;

  const onChangeFilters = (name: string, value: boolean): void => {
    dispatch(setFilters(!value ? filters.filter(item => item !== name) : [...filters, name]));
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
                  }}
                >
                  {item}
                </Block>
              }
              checked={filters.length > 0 && filters.includes(item)}
              onChange={e => onChangeFilters(item, e.target.checked)}
            />
          </Block>
        ))}
      </Flex>

      <Click onClick={() => dispatch(setFilters([]))}>Reset filters</Click>
    </Flex>
  );
};

export default Filter;
