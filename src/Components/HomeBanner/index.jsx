import React from "react";
import Slider from "react-slick";

const HomeBanner = ()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };

    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://img.lazcdn.com/us/domino/1b2ab414-766c-4eb6-a178-aaea56c97e04_NP-1976-688.jpg_2200x2200q80.jpg_.webp" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://img.lazcdn.com/us/domino/5f1ef282-3dc5-4729-8493-6340fcd7d612_NP-1976-688.jpg_2200x2200q80.jpg_.webp" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://img.lazcdn.com/us/domino/3534b202-7b64-4611-8b90-b4a3e108e45e_NP-1976-688.jpg_2200x2200q80.jpg_.webp" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://img.lazcdn.com/us/domino/c6aeb09c-a6ac-47b7-99cb-0782cbbcb43a_NP-1976-688.jpg_2200x2200q80.jpg_.webp" className="w-100" />
                </div>
                <div className="item">
                    <img src="https://img.lazcdn.com/us/domino/93a4f8b1-a6f8-43a3-9c25-e10f7be14a5b_NP-1976-688.jpg_2200x2200q80.jpg_.webp" className="w-100" />
                </div>
            </Slider>
        </div>
    )
};

export default HomeBanner