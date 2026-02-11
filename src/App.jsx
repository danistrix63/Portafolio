import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import WhatsApp from './components/WhatsApp/WhatsApp';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <WhatsApp />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
