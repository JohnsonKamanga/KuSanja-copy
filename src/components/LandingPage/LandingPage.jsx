import { useRef } from "react";
import About from "../About/About";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Footer from "../Home/Footer";
import NavBar from "../Home/NavBar";
import Home from "../Home/Home";

function LandingPage(){
    const mainRef = useRef(null);
    const featuresRef = useRef(null);
    const aboutRef = useRef(null);
    const faqRef = useRef(null);
    return(
        <div className="min-h-screen bg-[#293040] text-white">
            <NavBar homeRef={mainRef} featuresRef={featuresRef} aboutRef={aboutRef} faqRef={faqRef} />
            <section ref={mainRef}>
            <Home/>
            </section>
            <section ref={featuresRef}>
            <Features/>
            </section>
            <section ref={aboutRef}>
            <About/>
            </section>
            <section ref={faqRef}>
            <FAQ/>
            </section>
            <Footer/>
        </div>
    )
}

export default LandingPage;