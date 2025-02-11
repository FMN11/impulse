// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import img01 from "./../../img/swiper/img01.jpg";
import img02 from "./../../img/swiper/img02.jpg";
import img03 from "./../../img/swiper/img03.jpg";
import img04 from "./../../img/swiper/img04.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        // when window width is >= 0px
        0: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <img src={img01} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img02} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img03} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img04} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img01} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img02} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img03} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img04} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img01} />
      </SwiperSlide>
    </Swiper>
  );
};
