import { FC, useState } from "react";
import { A11y, Virtual } from "swiper";
import { Block, Flex } from "vcc-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { useResizeObserver } from "@volvo-cars/react-layout-utils";

// COMPONENTS
import Card from "../Card/Card";
import SliderNavItem from "../SliderNavItem/SliderNavItem";
import PaginationBullet from "../PaginationBullet/PaginationBullet";

// CONFIGS, CONSTANTS
import { LIST_NAV_STYLES, LIST_PAGINATION_STYLES, LIST_STYLES } from "./config";

// HELPERS
import { isNavVisible } from "./helpers";

// TYPES
import { CardItem } from "../../types";
import { Swiper as SwiperClass } from "swiper/types";

// STYLES
import "swiper/css";

type ListProps = {
  cars: CardItem[];
};

const List: FC<ListProps> = ({ cars }) => {
  const { ref, width } = useResizeObserver({ box: "border-box" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReachedEnd, setIsReachedEnd] = useState(false);

  const updateSliderDataForNavigation = (swiper: SwiperClass) => {
    setCurrentIndex(swiper.activeIndex);
    setIsReachedEnd(swiper.isEnd);
  };

  return (
    <Block ref={ref} extend={LIST_STYLES}>
      <Swiper
        modules={[A11y, Virtual]}
        spaceBetween={15}
        slidesPerView={1.2}
        breakpoints={{
          800: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
          1230: {
            slidesPerView: 4,
          },
          1990: {
            spaceBetween: 28,
          },
        }}
        resizeObserver
        onSlideChange={swiper => updateSliderDataForNavigation(swiper)}
        onUpdate={swiper => updateSliderDataForNavigation(swiper)}
      >
        {cars.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <Card data={item} />
          </SwiperSlide>
        ))}

        {width && isNavVisible(cars.length, width) && (
          <>
            {width <= 1024 ? (
              <Flex extend={LIST_PAGINATION_STYLES}>
                {cars.map((item, index) => (
                  <PaginationBullet key={index} index={index} isCurrentActive={currentIndex === index} />
                ))}
              </Flex>
            ) : (
              <Flex extend={LIST_NAV_STYLES}>
                <SliderNavItem type="BACK" disabled={currentIndex === 0} />
                <SliderNavItem type="FORWARD" disabled={isReachedEnd} />
              </Flex>
            )}
          </>
        )}
      </Swiper>
    </Block>
  );
};

export default List;
