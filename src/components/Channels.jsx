import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';

// STYLES
import "../styles/channels.css";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Channels = () => {
  return (
    <div className="channelsContainer">
      <p className="channelsPara">
        {" "}
        RentAFriend.com has been featured on CNN, ABC, AOL, The Today Show,
        MSNBC, Associated Press Fox News, and many more media outlets.{" "}
      </p>
      <p className="asSeenOn"> AS SEEN ON</p>
      <div className="channelsSwiperContainer">
        <Swiper
          spaceBetween={50}
          slidesPerView={5.2}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/slider-img3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/slider-img4.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/slider-img5.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/slider-img6.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/slider-img7.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/slider-img1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/slider-img2.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="pressCoverageButton">VIEW SOME OF OUR PRESS COVERAGE</button>
    </div>
  );
};

export default Channels;
