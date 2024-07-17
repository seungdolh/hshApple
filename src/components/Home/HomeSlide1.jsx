import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../../assets/css/section3.css";

const HomeSlide1 = () => {
    const settings = {
        variableWidth: true,
        infinite: false,
        arrows: true,
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="homeslide slide1">
                    <div className="card-content-info">
                        <h3>IPHONE 15 PRO </h3>
                        <div className="card-content-introduce">티타늄</div>
                        <div>
                            <b>₩1,550,000</b>부터
                        </div>
                    </div>
                    <img
                        src="./assets/img/image_9.jpg"
                        alt=""
                        width={400}
                        height={500}
                    />
                </div>
                <div className="homeslide slide2">
                    <img
                        src="./assets/img/image_10.jpg"
                        alt=""
                        width={400}
                        height={500}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlide1;
