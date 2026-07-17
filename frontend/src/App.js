import './App.css';
import { Toaster } from './components/ui/sonner';
import SmoothScroll from './components/SmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  personalInfo,
  aboutText,
  skills,
  experience,
  projects,
  services,
  statistics,
  certifications,
  testimonials,
  manifesto
} from './mockData';

function App() {
  return (
    <SmoothScroll>
      <div className="App bg-slate-950">
        <Header />
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} aboutText={aboutText} />
        <Manifesto manifesto={manifesto} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Marquee />
        <Projects projects={projects} />
        <Services services={services} />
        <Statistics statistics={statistics} />
        <Certifications certifications={certifications} />
        <Testimonials testimonials={testimonials} />
        <Contact personalInfo={personalInfo} />
        <Footer personalInfo={personalInfo} />
        <Toaster />
      </div>
    </SmoothScroll>
  );
}

export default App;