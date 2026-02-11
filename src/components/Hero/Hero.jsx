import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>

            <div className="container hero-content">
                <div className="hero-profile-container">
                    <img src="/Foto1.jpg" alt="Daniel Dans Cots" className="hero-profile-img" />
                </div>
                <h1 className="hero-title">
                    {t.hero.title}
                </h1>
                <p className="hero-subtitle">
                    {t.hero.subtitle}
                </p>

                <div className="hero-buttons">
                    <a href="#projects">
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {t.hero.viewWork} <ArrowRight size={18} />
                        </button>
                    </a>
                    <a href="/Daniel_Dans_CV.pdf" download="Daniel_Dans_CV.pdf" style={{ textDecoration: 'none' }}>
                        <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {t.hero.downloadCV} <Download size={18} />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
