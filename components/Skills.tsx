"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const skills = {
    "Languages & Core": [
        { name: "Python", url: "https://www.python.org/" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" }
    ],
    "Frameworks & Libraries": [
        { name: "Django", url: "https://www.djangoproject.com/" },
        { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
        { name: "Flask", url: "https://flask.palletsprojects.com/" },
        { name: "Celery", url: "https://docs.celeryq.dev/" },
        { name: "Pandas", url: "https://pandas.pydata.org/" },
        { name: "NumPy", url: "https://numpy.org/" },
        { name: "React", url: "https://react.dev/" }
    ],
    "Databases": [
        { name: "PostgreSQL", url: "https://www.postgresql.org/" },
        { name: "MySQL", url: "https://www.mysql.com/" },
        { name: "Redis", url: "https://redis.io/" },
        { name: "MongoDB", url: "https://www.mongodb.com/" },
        { name: "SQLite", url: "https://www.sqlite.org/" }
    ],
    "Cloud & DevOps": [
        { name: "AWS S3", url: "https://aws.amazon.com/s3/" },
        { name: "AWS Lambda", url: "https://aws.amazon.com/lambda/" },
        { name: "AWS EC2", url: "https://aws.amazon.com/ec2/" },
        { name: "Docker", url: "https://www.docker.com/" },
        { name: "Jenkins", url: "https://www.jenkins.io/" },
        { name: "Git", url: "https://git-scm.com/" },
        { name: "CI/CD", url: "https://about.gitlab.com/topics/ci-cd/" }
    ],
    "Tools & Architecture": [
        { name: "Microservices", url: "https://microservices.io/" },
        { name: "REST APIs", url: "https://restfulapi.net/" },
        { name: "gRPC", url: "https://grpc.io/" },
        { name: "RabbitMQ", url: "https://www.rabbitmq.com/" },
        { name: "JWT", url: "https://jwt.io/" },
        { name: "Postman", url: "https://www.postman.com/" }
    ]
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 px-4 md:px-8 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Technical <span className="text-cyan-400">Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer"
                                    >
                                        {item.name}
                                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
