import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useRef, useState } from 'react';

const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    };

    return (
        <div className="row mt-2 productDetailModal">
            <div className="col-md-5">
                <div className="productZoom">
                    <div className="badge badge-primary">28%</div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="zoomSliderBig "
                        ref={zoomSliderBig}
                    >
                        <SwiperSlide>
                            <div className="item">
                                <InnerImageZoom
                                    zoomType="hover"
                                    zoomScale={1.5}
                                    src={`https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp`}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <InnerImageZoom
                                    zoomType="hover"
                                    zoomScale={1.5}
                                    src={`https://mobile.yoox.com/images/items/12/12452835JA_14_f.jpg?impolicy=crop&width=387&height=490`}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <InnerImageZoom
                                    zoomType="hover"
                                    zoomScale={0.3}
                                    src={`https://www.code-zero.com/uploads/media/62/a1/b6/1715866677/polo-atlantic-white.jpg?ts=1715866677`}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Thumbnail Swiper */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={2} // Reduced space to increase size of images
                    navigation={false}
                    slidesPerGroup={5}
                    modules={[Navigation]}
                    className="zoomSlider"
                    ref={zoomSlider}
                >
                    <SwiperSlide>
                        <div
                            className={`item ${slideIndex === 0 && 'item_active'}`}
                            onClick={() => goto(0)}
                        >
                            <img
                                src={`https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp`}
                                className="w-100"
                                alt="Thumbnail 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`item ${slideIndex === 1 && 'item_active'}`}
                            onClick={() => goto(1)}
                        >
                            <img
                                src={`https://mobile.yoox.com/images/items/12/12452835JA_14_f.jpg?impolicy=crop&width=387&height=490`}
                                className="w-100"
                                alt="Thumbnail 2"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`item ${slideIndex === 2 && 'item_active'}`}
                            onClick={() => goto(2)}
                        >
                            <img
                                src={`https://www.code-zero.com/uploads/media/62/a1/b6/1715866677/polo-atlantic-white.jpg?ts=1715866677`}
                                className="w-100"
                                alt="Thumbnail 3"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductZoom;
