import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const useSwiper = () => {
  return { Swiper, SwiperSlide, Navigation, Pagination };
};

export default useSwiper;

