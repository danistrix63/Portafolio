import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <h2>{t.contact.title}</h2>
                <p className="contact-intro">
                    {t.contact.intro}
                </p>

                {/* FormSubmit Configuration */}
                <form
                    className="contact-form"
                    action="https://formsubmit.co/ddctrabajocontacto@gmail.com"
                    method="POST"
                >
                    {/* Honeypot to prevent spam */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    {/* Disable Captcha for cleaner UX (optional) */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Redirect to same page after submit (or a thank you page) */}
                    <input type="hidden" name="_next" value="http://localhost:5173" />

                    <div className="form-group">
                        <label htmlFor="name">{t.contact.name}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{t.contact.email}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{t.contact.message}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-primary">{t.contact.send}</button>
                </form>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/daniel-dans-cots-864aa53a7" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
                    <a href="mailto:ddctrabajocontacto@gmail.com" className="social-icon"><Mail size={24} /></a>
                </div>

                <div className="footer-tech-container">
                    <span className="footer-tech-title">{t.contact.builtWithTitle}</span>
                    <div className="footer-tech">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React/JSX" title="React/JSX" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" title="Vite" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" />
                    </div>
                </div>
                <p className="footer-text">
                    © {new Date().getFullYear()} Daniel Dans Cots. Todos los derechos reservados.
                </p>
            </div>
        </section>
    );
};

export default Contact;
