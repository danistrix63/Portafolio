import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#" className="logo">Daniel Dans Cots</a>
        <div className="nav-container">
          <nav className="nav">
            <a href="#about" className="nav-link">{t.nav.about}</a>
            <a href="#projects" className="nav-link">{t.nav.projects}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
          </nav>
          <button onClick={toggleLanguage} className="lang-toggle">
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
