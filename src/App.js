import './App.css';
import { LanguageProvider } from './i18n/LanguageContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { useLanguage } from './i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  return <footer className="footer">{t.footer}</footer>;
}

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
