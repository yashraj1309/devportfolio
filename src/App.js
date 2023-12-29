import Navigation from "./components/Navigation";
import Main from "./components/Main";
import WorkExp from "./components/WorkExp";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <>
      <Navigation scrollToSection={scrollToSection}/>
      <Main />
      <WorkExp />
      <Projects/>
      <Skills />
      <Certificates />
      <ContactForm />
      <Footer />
    </>
  );
}
export default App;
