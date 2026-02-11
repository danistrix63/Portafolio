import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Github, Folder, Eye, Receipt } from 'lucide-react';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        {
            title: t.projects.n8nProject.title,
            description: t.projects.n8nProject.shortDesc,
            fullDescription: t.projects.n8nProject.fullDesc,
            workflow: t.projects.n8nProject.workflow,
            features: t.projects.n8nProject.features,
            tech: ["n8n", "Docker", "VPS", "MySQL", "OpenAI"],
            image: null, // Custom image path can be added here
            icon: "Receipt",
            demoLink: null,
            repoLink: "https://github.com/danistrix63/n8n_tikets"
        },
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
            fullDescription: "A mock e-commerce dashboard showing standard capabilities.",
            tech: ["React", "Chart.js", "Node.js"],
            icon: "Folder",
            demoLink: "#",
            repoLink: "#"
        },
        {
            title: "Task Management App",
            description: "Collaborative task manager with drag-and-drop interface and team features.",
            fullDescription: "A standard To-Do application with drag and drop features.",
            tech: ["React", "Firebase", "Tailwind"],
            icon: "Folder",
            demoLink: "#",
            repoLink: "#"
        }
    ];

    const renderProjectImage = (project) => {
        if (project.image) {
            return <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
        }

        // Fallback to Icon
        const Icon = project.icon === "Receipt" ? Receipt : Folder;
        return <Icon size={48} opacity={0.5} />;
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.projects.title}</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                    {t.projects.subtitle}
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" onClick={() => openModal(project)}>
                            <div className="project-image">
                                {renderProjectImage(project)}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <button
                                        className="project-link btn-details"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click
                                            openModal(project);
                                        }}
                                    >
                                        <Eye size={16} /> {t.projects.viewDetails || "View Details"}
                                    </button>

                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            className="project-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={16} /> {t.projects.viewDemo}
                                        </a>
                                    )}

                                    {project.repoLink && (
                                        <a
                                            href={project.repoLink}
                                            className="project-link"
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={16} /> {t.projects.viewCode}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </section>
    );
};

export default Projects;
