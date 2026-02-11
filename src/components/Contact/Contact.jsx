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

                <p className="footer-text">
                    © {new Date().getFullYear()} Daniel Dans Cots. Todos los derechos reservados.
                </p>
            </div>
        </section>
    );
};

export default Contact;
