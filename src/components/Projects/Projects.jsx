import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
            tech: ["React", "Chart.js", "Node.js"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            title: "Task Management App",
            description: "Collaborative task manager with drag-and-drop interface and team features.",
            tech: ["React", "Firebase", "Tailwind"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            title: "AI Chat Interface",
            description: "Modern chat interface for interacting with LLMs, featuring markdown support and code highlighting.",
            tech: ["Next.js", "OpenAI API", "TypeScript"],
            demoLink: "#",
            repoLink: "#"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.projects.title}</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                    {t.projects.subtitle}
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <Folder size={48} opacity={0.5} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.demoLink} className="project-link">
                                        <ExternalLink size={16} /> {t.projects.viewDemo}
                                    </a>
                                    <a href={project.repoLink} className="project-link">
                                        <Github size={16} /> {t.projects.viewCode}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
