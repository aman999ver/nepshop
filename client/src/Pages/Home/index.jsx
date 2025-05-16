import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { IoMailOutline } from "react-icons/io5";



const Home =() => {

    return(
        <>
            <HomeBanner/>

            <HomeCat/>

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="sticky">
                        <div className="banner">
                            <img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg" className="cursor"/>
                        </div>
                        <div className="banner mt-4">
                            <img src="https://api.spicezgold.com/download/file_1734525767798_NewProject(35).jpg" className="cursor"/>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offer until the end of Baishakh. </p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View all <IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row w-100 mt-2">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    
                                    
                                
                                </Swiper>
                            </div>
                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks </p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View all <IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row w-100 productRow2 mt-4 d-flex ">
                              <ProductItem/>
                              <ProductItem/>
                              <ProductItem/>
                              <ProductItem/>
                              <ProductItem/>
                              <ProductItem/>
                              <ProductItem/>
                              <ProductItem/>
                            </div>

                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner ">
                                    <img src="https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg" className="cursor"/>
                                </div>

                                <div className="banner w-100 ">
                                    <img src="https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg" className="cursor"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white">Join newsletter and get...</h3>
                            <p className="text-light">join our email subscription now to get  updates on <br /> promotions and coupons.</p>


                            <form >
                                <IoMailOutline/>
                                <input type="text" placeholder="Your Email Address" />
                                <Button>Subscribe</Button>
                            </form>

                        </div>
                        <div className="col-md-6">
                            <img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );

}

export default Home;