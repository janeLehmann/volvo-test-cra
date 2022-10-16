import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Logo, Toggle, Flex, Block } from "vcc-ui";
import { useResizeObserver } from "@volvo-cars/react-layout-utils";

// STORE
import { RootState } from "../../store";
import { setThemeType } from "../../state/mainSlice";

// CONFIG
import { ROW_FLEX_STYLES } from "../../styleConfig";

const Header: FC = () => {
  const { ref, width } = useResizeObserver({ box: "border-box" });
  const themeType = useSelector((state: RootState) => state.main.themeType);
  const dispatch = useDispatch();
  const responsiveCondition = width && width > 700;

  return (
    <Flex
      extend={{
        padding: "2.5rem 3.75rem 1.25rem",
        marginBottom: "3.125rem",
        ...ROW_FLEX_STYLES,
        justifyContent: "space-between",
        "@media (max-width: 700px)": {
          padding: "2.5rem 1rem 1.25rem",
        },
      }}
      ref={ref}
    >
      <Logo type="spreadmark" height={responsiveCondition ? 20 : 12} />

      <Flex
        extend={{
          ...ROW_FLEX_STYLES,
          justifyContent: "flex-end",
        }}
      >
        <Toggle
          checked={themeType === "dark"}
          aria-label="Toggle Label"
          onChange={e => dispatch(setThemeType(e.target.checked ? "dark" : "light"))}
        />
        {responsiveCondition && <Block extend={{ marginLeft: 10 }}>Toggle theme</Block>}
      </Flex>
    </Flex>
  );
};

export default Header;
