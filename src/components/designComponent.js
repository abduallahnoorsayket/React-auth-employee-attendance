import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function DesignComponent() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1.5}
        spaceBetween={30}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="wrapper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card-container">
                    <div className="slider-left">
                      <img src="https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64320595119419b56e20d318ef21edbc&auto=format&fit=crop&w=800&q=60" />
                    </div>
                    <div className="slider-right">
                      <h1>Bespoke lumbersexual twee</h1>
                      <h5>snackwave kale</h5>
                      <h5>Jan 05, 2018</h5>
                      <p>
                        Hell of jean shorts tumeric VHS try-hard. Normcore swag
                        +1 snackwave vape. Af blue bottle shoreditch franzen
                        portland. Polaroid franzen 8-bit slow-carb squid occupy,
                        paleo prism four loko freegan stumptown vexillologist
                        knausgaard.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slider-left">
                    <img src="https://images.unsplash.com/photo-1497114046243-1154db4f4abf?ixlib=rb-0.3.5&s=dfe34168e6b8c05b7e4a92a6e11a5266&auto=format&fit=crop&w=800&q=60" />
                  </div>
                  <div className="slider-right">
                    <h1>Bespoke lumbersexual twee</h1>
                    <h5>snackwave kale</h5>
                    <h5>Jan 05, 2018</h5>
                    <p>
                      Hell of jean shorts tumeric VHS try-hard. Normcore swag +1
                      snackwave vape. Af blue bottle shoreditch franzen
                      portland. Polaroid franzen 8-bit slow-carb squid occupy,
                      paleo prism four loko freegan stumptown vexillologist
                      knausgaard.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slider-left">
                    <img src="https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixlib=rb-0.3.5&s=f82b9a82df80817a49829e67cf51351c&auto=format&fit=crop&w=800&q=60" />
                  </div>
                  <div className="slider-right">
                    <h1>Bespoke lumbersexual twee</h1>
                    <h5>snackwave kale</h5>
                    <h5>Jan 05, 2018</h5>
                    <p>
                      Hell of jean shorts tumeric VHS try-hard. Normcore swag +1
                      snackwave vape. Af blue bottle shoreditch franzen
                      portland. Polaroid franzen 8-bit slow-carb squid occupy,
                      paleo prism four loko freegan stumptown vexillologist
                      knausgaard.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card-container">
                    <div className="slider-left">
                      <img src="https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64320595119419b56e20d318ef21edbc&auto=format&fit=crop&w=800&q=60" />
                    </div>
                    <div className="slider-right">
                      <h1>Bespoke lumbersexual twee</h1>
                      <h5>snackwave kale</h5>
                      <h5>Jan 05, 2018</h5>
                      <p>
                        Hell of jean shorts tumeric VHS try-hard. Normcore swag
                        +1 snackwave vape. Af blue bottle shoreditch franzen
                        portland. Polaroid franzen 8-bit slow-carb squid occupy,
                        paleo prism four loko freegan stumptown vexillologist
                        knausgaard.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slider-left">
                    <img src="https://images.unsplash.com/photo-1497114046243-1154db4f4abf?ixlib=rb-0.3.5&s=dfe34168e6b8c05b7e4a92a6e11a5266&auto=format&fit=crop&w=800&q=60" />
                  </div>
                  <div className="slider-right">
                    <h1>Bespoke lumbersexual twee</h1>
                    <h5>snackwave kale</h5>
                    <h5>Jan 05, 2018</h5>
                    <p>
                      Hell of jean shorts tumeric VHS try-hard. Normcore swag +1
                      snackwave vape. Af blue bottle shoreditch franzen
                      portland. Polaroid franzen 8-bit slow-carb squid occupy,
                      paleo prism four loko freegan stumptown vexillologist
                      knausgaard.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
