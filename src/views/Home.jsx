import React from "react";
import Sections from "../components/Home/Sections";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Section3 from "../components/Home/Section3";

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Sections />
                <Section3 />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
