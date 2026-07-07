import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Marquee from '../components/Marquee';
import SectionDivider from '../components/SectionDivider';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Publications from '../components/sections/Publications';
import Awards from '../components/sections/Awards';
import Certifications from '../components/sections/Certifications';
import Workshops from '../components/sections/Workshops';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Publications />
      <SectionDivider />
      <Awards />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Workshops />
      <SectionDivider />
      <Contact />
    </>
  );
}
