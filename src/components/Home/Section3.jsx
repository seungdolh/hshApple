import React from 'react';
import '../../assets/css/section3.css'//상위 폴더로 갈 때마다 ../붙여줌.
import HomeSlide1 from './HomeSlide1';


const Section3 = () => {
    return (
        <section className='shelf3'>
            <h2>최신 제품. <span>따끈따끈한 신제품 이야기.</span></h2>
            <HomeSlide1 />
        </section>
    );
};

export default Section3;