import { FC } from "react";
import { useSwiper } from "swiper/react";
import { Icon, Click } from "vcc-ui";

type SliderNavItemProps = {
  type: "BACK" | "FORWARD";
  disabled: boolean;
};

const SliderNavItem: FC<SliderNavItemProps> = ({ type, disabled }) => {
  const swiper = useSwiper();

  const iconName = type === "BACK" ? "mediacircled-previous-48" : "mediacircled-next-48";

  const goToNextSlide = () => swiper.slideNext();
  const goToPervSlide = () => swiper.slidePrev();
  const disabledStyles = disabled ? { cursor: "default", opacity: 0.5 } : undefined;

  return (
    <Click onClick={type === "BACK" ? goToPervSlide : goToNextSlide} disabled={disabled} extend={disabledStyles}>
      <Icon type={iconName} />
    </Click>
  );
};

export default SliderNavItem;
