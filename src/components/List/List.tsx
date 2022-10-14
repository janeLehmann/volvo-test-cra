import { FC } from "react";
import { A11y } from "swiper";
import { Block, Flex } from "vcc-ui";

import { Swiper, SwiperSlide } from "swiper/react";
import { useResizeObserver } from "@volvo-cars/react-layout-utils";

// COMPONENTS
import Card from "../Card/Card";
import SliderNavItem from "../SliderNavItem/SliderNavItem";

// CONFIGS, CONSTANTS
import { LIST_NAV_STYLES, LIST_STYLES } from "./config";

// TYPES
import { CardItem } from "../../types";

// STYLES
import "swiper/css";

type ListProps = {
  cars: CardItem[];
};

const List: FC<ListProps> = ({ cars }) => {
  const { ref, width } = useResizeObserver({ box: "border-box" });

  return (
    <Block ref={ref} extend={LIST_STYLES}>
      <Swiper
        modules={[A11y]}
        spaceBetween={15}
        slidesPerView={1.5}
        breakpoints={{
          800: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          1990: {
            spaceBetween: 28,
          },
        }}
        loop
      >
        {cars.map(item => (
          <SwiperSlide key={item.id}>
            <Card data={item} />
          </SwiperSlide>
        ))}

        {width && width >= 1024 ? (
          <Flex extend={LIST_NAV_STYLES}>
            <SliderNavItem type="BACK" />
            <SliderNavItem type="FORWARD" />
          </Flex>
        ) : (
          <p>pagination</p>
        )}
      </Swiper>
    </Block>
  );
};

export default List;
