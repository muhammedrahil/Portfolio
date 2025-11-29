"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Server, Database, Cloud, Video, Truck, Zap, MessageSquare, Mail, Users, Search, Factory, Layers, BookOpen, Briefcase, Code, X, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
    title: string;
    description: string;
    details: string;
    role: string;
    date: string;
    tags: string[];
    links: { github: string; live: string };
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        title: "Fieldy V2 - Next-Gen SaaS FSM",
        role: "Lead Backend Architect",
        date: "Aug 2025",
        description: "Architected a fully microservices-based SaaS Field Service Management application with multi-tenant architecture.",
        details: `Key Contributions & Achievements:
• User Management Service: Designed and implemented a complete user service architecture with multi-tenant support, RBAC, and workspace-level permissions.
• S3 File Upload: Developed secure and efficient AWS S3 file upload functionality.
• Custom & Default Field Management: Built a flexible architecture for managing default and custom fields.
• Database Optimization: Introduced connection pooling and created AsyncConcurrentDBTaskRunner for concurrency handling.
• Reusable Views: Developed list/column views with sorting, filtering, and offset-based pagination.
• Pipeline & Workflow: Implemented Lead Pipeline settings using a linked list structure.
• Import/Export: Created bulk import/export architecture for Users, Companies, Jobs, Leads, and Inventory.
• Tech Stack: FastAPI, gRPC, RabbitMQ, PostgreSQL, AWS S3, Microservices.`,
        tags: ["FastAPI", "gRPC", "RabbitMQ", "PostgreSQL", "AWS S3"],
        links: { github: "#", live: "#" },
        icon: <Server className="text-cyan-400" size={24} />,
    },
    {
        title: "Patriot Engineering ERP",
        role: "Full Stack Developer",
        date: "Feb 2025",
        description: "Web-based ERP managing order processing, inventory, and invoicing with complex item management.",
        details: `Developed backend functionality including workflow design, database models, and integrations.
• Database & Migration: Migrated MS SQL to Django ORM, designed optimized models, and built dynamic import tools.
• Core Modules: Developed Proforma Invoice, Purchase Order, Store Issue, and Customer Invoice modules.
• Performance: Implemented stored procedures and DB connection pooling.
• Frontend: Developed reusable JS validation functions and role-based appearance control.
• Integrations: Implemented S3 video upload and automated PDF generation with Puppeteer.`,
        tags: ["Django REST", "MySQL", "AWS S3", "React", "Puppeteer"],
        links: { github: "#", live: "https://patriosoft.zaiportal.com/" },
        icon: <Factory className="text-orange-400" size={24} />,
    },
    {
        title: "CloudSpark",
        role: "Creator & Maintainer",
        date: "Mar 2025",
        description: "Open-source Python package simplifying AWS S3 operations and presigned URL generation.",
        details: `Created and maintain the Python package cloudspark.
• Designed for managing AWS services such as S3 and EC2.
• Provides an intuitive interface to generate presigned URLs and handle file uploads seamlessly.
• Useful for both frontend and backend integration.`,
        tags: ["Python", "Boto3", "AWS S3", "PyPI", "Open Source"],
        links: { github: "https://github.com/muhammedrahil/cloudspark", live: "https://pypi.org/project/cloudspark/" },
        icon: <Cloud className="text-yellow-400" size={24} />,
    },
    {
        title: "ThreadyQ",
        role: "Creator",
        date: "Dec 2024",
        description: "Lightweight, thread-safe task queue management library for Python applications.",
        details: `Creator of the Python package threadyq.
• A lightweight and efficient queue management library for handling threaded task execution.
• Provides an abstraction layer over Python's built-in threading and queue modules.
• Enables developers to create, manage, and synchronize tasks efficiently in multi-threaded applications.`,
        tags: ["Python", "Threading", "Queue", "PyPI", "Open Source"],
        links: { github: "https://github.com/muhammedrahil/ThreadyQ", live: "https://pypi.org/project/threadyq/" },
        icon: <Layers className="text-green-400" size={24} />,
    },
    {
        title: "Custom Fields Package",
        role: "Creator",
        date: "Jun 2025",
        description: "Comprehensive Python package for managing dynamic custom fields in database-driven apps.",
        details: `A comprehensive Python package for managing dynamic custom fields.
• Dynamic Field Types: Support for 18+ field types including text, numbers, dates, files, dropdowns.
• Type Safety: Full Pydantic schema validation and SQLAlchemy ORM integration.
• Features: Built-in file management, Validation Engine, Multi-language Support, Async/Await support, and Audit Trail.`,
        tags: ["Python", "SQLAlchemy", "Pydantic", "AsyncIO"],
        links: { github: "#", live: "#" },
        icon: <Database className="text-blue-400" size={24} />,
    },
    {
        title: "Exper - Medical E-Learning",
        role: "Backend Developer",
        date: "Sep 2023",
        description: "Online E-learning platform for doctors using Microservice Architecture.",
        details: `Contributed to backend development, implemented new features, and fixed bugs.
• Services: Admin, CMS, CAS, Assessment, Notification, Platform, Certificate Engine.
• Integrations: Stripe/Razorpay, Gmeet/Zoom/Teams, Google Authentication.
• Tech: Django Restframework, MySQL, Redis, Celery, Mongo DB, Jenkins.`,
        tags: ["Django", "Microservices", "Redis", "Celery", "MySQL"],
        links: { github: "#", live: "https://web.medvarsity.com" },
        icon: <BookOpen className="text-purple-400" size={24} />,
    },
    {
        title: "User Management System",
        role: "System Architect",
        date: "Aug 2024",
        description: "SaaS-based architecture for reusability across multiple projects with tenant isolation.",
        details: `Designed and developed a SaaS-based architecture.
• Implemented a tenant and workspace-based, role-driven application.
• Focused on scalable and secure user access management.
• Complete Django Application designed for reusability.`,
        tags: ["Django", "SaaS", "RBAC", "Security"],
        links: { github: "#", live: "#" },
        icon: <Users className="text-indigo-400" size={24} />,
    },
    {
        title: "Live Video Class (LVC)",
        role: "Backend Developer",
        date: "Sep 2023",
        description: "Scheduling system for live video classes integrating multiple video providers.",
        details: `Provided support and contributed to development.
• Scheduling logic for live video classes.
• Provider selection (Google Meet, Zoom, MS Teams) and API token management.
• Scalable architecture to support multiple providers.`,
        tags: ["Python", "API Integration", "WebRTC", "MS Teams"],
        links: { github: "#", live: "#" },
        icon: <Video className="text-red-400" size={24} />,
    },
    {
        title: "Fieldy V1 - FSM",
        role: "Backend Developer",
        date: "Oct 2023",
        description: "Flask-based microservices application for Field Service Management.",
        details: `Implemented bulk import functionality for Contact, Organization, and Product Modules.
• Part of a next-gen, all-in-one field service management software.
• Handled ERP and CRM application features.`,
        tags: ["Flask", "Microservices", "ERP", "CRM"],
        links: { github: "#", live: "#" },
        icon: <Briefcase className="text-teal-400" size={24} />,
    },
    {
        title: "Google LocalServices Scraper",
        role: "Python Developer",
        date: "Mar 2024",
        description: "Backend solution to scrape Google LocalServices info and generate CSV reports.",
        details: `Developed complete backend functionality including API design and database models.
• Scraped Google LocalServices information to create CSV data sheets.
• Technologies: Django Restframework, MySQL, Pandas, Beautifulsoup, Docker.`,
        tags: ["Django", "Pandas", "BeautifulSoup", "Web Scraping"],
        links: { github: "#", live: "#" },
        icon: <Search className="text-blue-300" size={24} />,
    },
    {
        title: "Bulk Email Sender",
        role: "Backend Developer",
        date: "Nov 2023",
        description: "Complete backend for a bulk email sender platform with PDF conversion.",
        details: `Developed complete backend functionality including API design and integrations.
• Features: Thread pooling, HTML to PDF conversion (wkhtmltopdf), Google API integration.
• Tech: Django Restframework, MySQL, Redis, Celery.`,
        tags: ["Django", "Celery", "Redis", "Threading"],
        links: { github: "#", live: "#" },
        icon: <Mail className="text-pink-400" size={24} />,
    },
    {
        title: "Shock Alert Project",
        role: "Backend Developer",
        date: "Nov 2023",
        description: "IoT project contributions including payment and device security.",
        details: `Contributions included:
• Integrating Stripe payment gateway.
• Implementing device unlock functionality.
• Adding admin panel password reset features.`,
        tags: ["Python", "Stripe", "IoT", "Security"],
        links: { github: "#", live: "#" },
        icon: <Zap className="text-yellow-300" size={24} />,
    },
    {
        title: "Error Log Chatbot",
        role: "Python Developer",
        date: "Dec 2023",
        description: "Chatbot for querying and exporting error and user logs.",
        details: `Built a chatbot and implemented export functionality for error logs and user logs.
• Improved debugging and monitoring efficiency.`,
        tags: ["Python", "Chatbot", "Logging", "NLP"],
        links: { github: "#", live: "#" },
        icon: <MessageSquare className="text-green-300" size={24} />,
    },
    {
        title: "BOL - Logistics PDF",
        role: "Python Developer",
        date: "Dec 2023",
        description: "PDF generation functionality for logistics rail boxes.",
        details: `Developed functionality to generate PDFs displaying rail boxes.
• Focused on complex PDF layout and data representation for logistics.`,
        tags: ["Python", "PDF Generation", "Logistics"],
        links: { github: "#", live: "#" },
        icon: <Truck className="text-slate-400" size={24} />,
    },
    {
        title: "Exper-Campus",
        role: "Backend Developer",
        date: "Sep 2023",
        description: "Competency Assignment module for Campus Management.",
        details: `Worked on developing the Competency Assignment module (Subject – Competency).
• Part of the Exper-Campus management system.`,
        tags: ["Python", "Django", "EdTech"],
        links: { github: "#", live: "#" },
        icon: <Code className="text-cyan-500" size={24} />,
    },
    {
        title: "Wett Project Support",
        role: "Backend Support",
        date: "Jun 2025",
        description: "AWS Lambda and API Gateway integrations for secure uploads.",
        details: `Supported in creating AWS Lambda functions and API Gateway integrations.
• Generated pre-signed URLs for secure file uploads.`,
        tags: ["AWS Lambda", "API Gateway", "Serverless"],
        links: { github: "#", live: "#" },
        icon: <Cloud className="text-orange-300" size={24} />,
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full mx-auto md:mx-0" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                        {project.icon}
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
                                        {project.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <User size={12} /> {project.role}
                                    </span>
                                    <span className="text-cyan-500 group-hover:underline">View Details →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-900/50">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700">
                                        {selectedProject.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {selectedProject.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <User size={14} className="text-cyan-400" /> {selectedProject.role}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} className="text-cyan-400" /> {selectedProject.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                                        Project Overview
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                                        Key Contributions & Details
                                    </h4>
                                    <div className="text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 font-mono text-sm">
                                        {selectedProject.details}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex gap-4">
                                {selectedProject.links.github !== "#" && (
                                    <Button variant="outline" className="flex-1 border-slate-700 hover:bg-slate-800" asChild>
                                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> View Code
                                        </a>
                                    </Button>
                                )}
                                {selectedProject.links.live !== "#" && (
                                    <Button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-slate-950" asChild>
                                        <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
