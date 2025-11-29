"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, X, Building2, User } from "lucide-react";

interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    skills: string[];
    details: string;
}

const experiences: Experience[] = [
    {
        company: "Zaigo Infotech Software Solutions Pvt Ltd",
        role: "Junior Python Developer",
        period: "Jan 2023 – Present",
        location: "Chennai, Tamil Nadu",
        description: [
            "Automated repetitive tasks using Python scripts, increasing team workflow efficiency by 60%.",
            "Collaborated with cross-functional teams to design, develop, and implement 12+ high-quality Python applications.",
            "Optimized database queries reducing response times by 80% in critical application areas.",
        ],
        skills: ["Python", "Django", "AWS", "PostgreSQL", "TDD", "Agile"],
        details: `Key Responsibilities & Achievements:
• Spearheaded the automation of internal workflows using Python scripts, resulting in a 60% increase in team efficiency.
• Played a key role in the full development lifecycle of over 12 high-quality Python applications, from design to deployment.
• Conducted in-depth database analysis and optimization, successfully reducing query response times by 80% for critical modules.
• Designed and maintained scalable web-based applications on AWS cloud platforms, ensuring 99.9% uptime.
• Championed the adoption of Test-Driven Development (TDD) methodologies, improving code reliability and reducing bug rates.
• Actively participated in Agile ceremonies, contributing to sprint planning and retrospective meetings to streamline development processes.`
    },
    {
        company: "Swynfords Pvt Ltd",
        role: "Python Developer",
        period: "Apr 2022 – Dec 2022",
        location: "Ernakulam, Kerala",
        description: [
            "Independently designed, developed, and tested code for web applications using Python frameworks.",
            "Enhanced application performance by optimizing Python code and implementing industry best practices.",
        ],
        skills: ["Python", "Flask", "SQL", "Database Design", "Optimization"],
        details: `Key Responsibilities & Achievements:
• Took ownership of the end-to-end development of web applications, utilizing Python frameworks like Flask and Django.
• Focused on writing clean, efficient, and maintainable code, adhering to industry best practices and coding standards.
• Significantly improved application performance through rigorous code optimization and refactoring.
• Designed robust and normalized database schemas to ensure data integrity and efficient storage.
• Implemented effective change control procedures to minimize disruptions to end-users during updates and deployments.`
    },
];

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

    return (
        <section id="experience" className="py-20 md:py-32 px-4 md:px-8 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Professional <span className="text-cyan-400">Experience</span>
                    </h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                </motion.div>

                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-slate-950/50 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                            <div
                                onClick={() => setSelectedExp(exp)}
                                className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all hover:bg-slate-900/80 hover:shadow-lg hover:shadow-cyan-500/5 cursor-pointer hover:-translate-y-1"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-lg text-slate-300 font-medium">
                                            <Briefcase size={18} className="text-cyan-500" />
                                            {exp.company}
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:items-end gap-2 text-sm text-slate-400 font-mono">
                                        <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
                                            <Calendar size={14} className="text-cyan-400" />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-2 px-1">
                                            <MapPin size={14} />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <ul className="space-y-3">
                                        {exp.description.slice(0, 3).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                                <CheckCircle2 size={18} className="text-cyan-500/50 mt-1 shrink-0 group-hover:text-cyan-400 transition-colors" />
                                                <span className="line-clamp-2">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.slice(0, 4).map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2.5 py-1 rounded-md bg-cyan-500/5 text-cyan-300 border border-cyan-500/10 group-hover:border-cyan-500/20 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {exp.skills.length > 4 && (
                                            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
                                                +{exp.skills.length - 4}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs text-cyan-500 font-medium group-hover:underline">View Details →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Experience Details Modal */}
            <AnimatePresence>
                {selectedExp && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedExp(null)}
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
                                        <Building2 className="text-cyan-400" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {selectedExp.company}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <User size={14} className="text-cyan-400" /> {selectedExp.role}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} className="text-cyan-400" /> {selectedExp.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedExp(null)}
                                    className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                                        Role & Responsibilities
                                    </h4>
                                    <div className="text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 font-mono text-sm">
                                        {selectedExp.details}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                                        Technologies & Skills
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedExp.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
