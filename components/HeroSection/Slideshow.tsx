import { useTranslations } from "next-intl";
import Image from "next/image";

import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// swiperjs
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const sliders = [
  {
    id: 2,
    image: "/bg-img/slide-web-1.jpg",
    imageTablet: "/bg-img/slide-tablet-1.jpg",
    imageMobile: "/bg-img/slide-mobile-1.jpg",
    subtitle: "Beauty Collection",
    titleUp: "New Makeup",
    titleDown: "Promotions",
    rightText: false,
  },
  {
    id: 1,
    image: "/bg-img/slide-web-2.jpg",
    imageTablet: "/bg-img/slide-tablet-2.jpg",
    imageMobile: "/bg-img/slide-mobile-2.jpg",
    subtitle: "Skincare Collection",
    titleUp: "Are You Ready?",
    titleDown: "For Amore",
    rightText: true,
  },
  {
    id: 3,
    image: "/bg-img/slide-web-3.jpg",
    imageTablet: "/bg-img/slide-tablet-3.jpg",
    imageMobile: "/bg-img/slide-mobile-3.jpg",
    subtitle: "Makeup Collection",
    titleUp: "Are you outing?",
    titleDown: "We got you",
    rightText: false,
  },
];

const Slideshow = () => {
  const t = useTranslations("Index");

  return (
    <>
      <div className="relative -top-20 slide-container w-full z-20">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            type: "fraction",
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="hidden lg:block relative">
                <Image
                  layout="responsive"
                  src={slider.image}
                  width={1144}
                  height={572}
                  alt={"some name"}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div className="hidden sm:block lg:hidden relative">
                <Image
                  layout="responsive"
                  src={slider.imageTablet}
                  width={820}
                  height={720}
                  alt={"some name"}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div className="sm:hidden relative">
                <Image
                  layout="responsive"
                  src={slider.imageMobile}
                  width={428}
                  height={800}
                  alt={"some name"}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div
                className={
                  slider.rightText
                    ? styles.rightTextSection
                    : styles.leftTextSection
                }
              >
                <span className={`${styles.subtitle} drop-shadow-lg`}>
                  {slider.subtitle}
                </span>
                <span
                  className={`${styles.title} text-center drop-shadow-lg ${
                    slider.rightText ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  {slider.titleUp} <br />
                  {slider.titleDown}
                </span>
                <TextButton value={t("shop_now")} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slideshow;
