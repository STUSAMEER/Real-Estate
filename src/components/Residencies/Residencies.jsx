/* eslint-disable no-unused-vars */
import React from "react";
import "./Residencies.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import data from "../../utils/slider.json";

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className="orangeText">Best Choices</span>
                <span className="primaryText">Popular Residencies</span>
            </div>

            <Swiper 
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
            >
                <SliderButtons />
                {data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="flexColStart r-card">
                            <img src={card.image} alt="home" />

                            <span className="secondaryText r-price">
                                <span style={{color: "orange" }}>$</span>
                                <span>{card.price}</span>
                            </span>

                            <span className="primaryText">{card.name}</span>
                            <span className="secondaryText">{card.detail}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};
