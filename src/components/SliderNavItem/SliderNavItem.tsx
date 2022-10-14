import { FC } from "react";
import { useSwiper } from "swiper/react";
import { Icon, Click } from "vcc-ui";

type SliderNavItemProps = {
  type: "BACK" | "FORWARD";
};

const SliderNavItem: FC<SliderNavItemProps> = ({ type }) => {
  const swiper = useSwiper();

  const iconName = type === "BACK" ? "mediacircled-previous-48" : "mediacircled-next-48";

  const goToNextSlide = () => swiper.slideNext();
  const goToPervSlide = () => swiper.slidePrev();

  return (
    <Click onClick={type === "BACK" ? goToPervSlide : goToNextSlide}>
      <Icon type={iconName} />
    </Click>
  );
};

export default SliderNavItem;
