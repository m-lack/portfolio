import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DarkMode } from "@chakra-ui/react";

function App() {
  const color = "purple";

  return (
    <DarkMode>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Skills color={color} />
      <Projects color={color} />
      <Testimonials color={color} />
      <Contact color={color} />
      <Footer />
    </DarkMode>
  );
}

export default App;
