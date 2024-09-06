import { useRef, useState } from "react";
import About from "../About/About";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Footer from "../Home/Footer";
import NavBar from "../Home/NavBar";
import Home from "../Home/Home";
import { InView } from "react-intersection-observer";

function LandingPage() {
  const mainRef = useRef();
  const featuresRef = useRef();
  const aboutRef = useRef();
  const faqRef = useRef();
  const [activeRef, setActiveRef] = useState();
  return (
    <div className="min-h-screen bg-[#293040] text-white">
      <NavBar
        activeRef={activeRef}
        setActiveRef={setActiveRef}
        homeRef={mainRef}
        featuresRef={featuresRef}
        aboutRef={aboutRef}
        faqRef={faqRef}
      />
      <section ref={mainRef}>
        <InView
        threshold={0.6}
          as="div"
          onChange={(inView) => {
            if (inView) {
              setActiveRef(mainRef);
            }
          }}
        >
          <Home />
        </InView>
      </section>
      <section ref={featuresRef}>
        <InView
        threshold={0.6}
          as="div"
          onChange={(inView) => {
            if (inView) {
              setActiveRef(featuresRef);
            }
          }}
        >
          <Features />
        </InView>
      </section>
      <section ref={aboutRef}>
        <InView
        threshold={0.6}
          as="div"
          onChange={(inView) => {
            if (inView) {
              setActiveRef(aboutRef);
            }
          }}
        >
          <About />
        </InView>
      </section>
      <section ref={faqRef}>
        <InView
        threshold={0.6}
          as="div"
          onChange={(inView) => {
            if (inView) {
              setActiveRef(faqRef);
            }
          }}
        >
          <FAQ />
        </InView>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
