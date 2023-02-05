// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Trending.css";
import StreamItem from "../streamItem/StreamItem";
export default function Trending({ trending, bookmarkStream }) {
  return (
    <div className="trending">
      <h1>Trending</h1>
      <div className="swiper">
        <div className="mb">
          <Swiper
            style={{ paddingRight: "16px" }}
            spaceBetween={16}
            slidesPerView={1.4}
          >
            {trending.map((trend) => {
              return (
                <SwiperSlide key={trend.title}>
                  <StreamItem
                    bookmarkStream={bookmarkStream}
                    stream={trend}
                    parent="Trending"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="tablet">
          <Swiper
            style={{ paddingRight: "24px" }}
            spaceBetween={40}
            slidesPerView={1.4}
          >
            {trending.map((trend) => {
              return (
                <SwiperSlide key={trend.title}>
                  <StreamItem
                    bookmarkStream={bookmarkStream}
                    stream={trend}
                    parent="Trending"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="desktop">
          <Swiper
            style={{ paddingRight: "32px" }}
            spaceBetween={40}
            slidesPerView={2.5}
          >
            {trending.map((trend) => {
              return (
                <SwiperSlide key={trend.title}>
                  <StreamItem
                    bookmarkStream={bookmarkStream}
                    stream={trend}
                    parent="Trending"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
