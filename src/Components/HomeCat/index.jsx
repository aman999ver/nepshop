import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = ()=>{
    return(
        <section className="homeCat">
                <div className="container">
                    <h3 className="mb-3 hd">FEATURED CATEGORIES</h3>
                    <Swiper
                        slidesPerView={10}
                        spaceBetween={8}
                        navigation={true}
                        slidesPerGroup={3}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
                                <h6>Fashion</h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </section>
    );
}


export default HomeCat;