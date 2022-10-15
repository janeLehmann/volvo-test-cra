import { FC } from "react";
import { Click, useTheme } from "vcc-ui";
import { useSwiper } from "swiper/react";

type PaginationBulletProps = {
  index: number;
  isCurrentActive: boolean;
};

const PaginationBullet: FC<PaginationBulletProps> = ({ index, isCurrentActive }) => {
  const swiper = useSwiper();
  const theme = useTheme();

  return (
    <Click
      onClick={() => swiper.slideTo(index)}
      extend={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: isCurrentActive ? theme.color.foreground.primary : theme.color.foreground.secondary,
        marginRight: 4,
        marginLeft: 4,
        cursor: "pointer",
      }}
    />
  );
};

export default PaginationBullet;
