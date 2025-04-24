import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";

const Home =() => {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <>
            <HomeBanner/>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="banner">
                            <img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg" className="cursor"/>
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

                            <div className="product_row">
                            <Slider {...productSliderOptions}>
                                <div className="item productItem">
                                    <div className="imgWrapper">
                                        <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                    </div>
                                </div>
                                <div className="item productItem">
                                    <div className="imgWrapper">
                                        <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                    </div>
                                </div>
                            </Slider>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Home;