import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLanguage();

    const skills = [
        "React", "HTML5", "CSS3", "JavaScript", "Vite", "IA",
        "Git/GitHub", ".NET", "Java", "C#", "Python",
        "MySQL", "Odoo", "PostgreSQL", "Bash", "N8N",
        "VPS", "REST APIs", "Spring Boot", "Node.js"
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-container">
                        <img src="/Foto1.jpg" alt="Daniel" className="about-profile-img" />
                    </div>

                    <div className="about-text">
                        <h2>{t.about.title}</h2>
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>

                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
