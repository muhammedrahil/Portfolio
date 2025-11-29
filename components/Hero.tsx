"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, Download, ChevronRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 pt-20">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-slate-950 -z-20" />
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent -z-10 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-20 -z-10" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-8 relative z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-sm font-medium backdrop-blur-sm shadow-lg shadow-cyan-500/5"
                    >
                        <Terminal size={16} className="animate-pulse" />
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span>Available for Hire</span>
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            Backend <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                                Excellence
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                            I architect scalable <span className="text-slate-200 font-medium">Microservices</span> and high-performance <span className="text-slate-200 font-medium">APIs</span>.
                            Specializing in Python ecosystems to build robust, cloud-native solutions that drive business growth.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="h-12 px-8 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-base shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
                            View Projects <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300">
                            Download CV <Download className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-8 pt-8 border-t border-slate-800/50 text-slate-500 text-sm font-mono">
                        <div className="flex items-center gap-2">
                            <Command size={16} />
                            <span>Clean Code</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ChevronRight size={16} />
                            <span>Scalable Arch</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span>99.9% Uptime</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Element (Code Block/Terminal) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative perspective-1000"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-50 animate-pulse-slow" />

                    <div className="relative rounded-xl bg-[#0d1117] border border-slate-800 shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                            </div>
                            <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                                <Terminal size={12} />
                                <span>rahil@portfolio: ~/developer</span>
                            </div>
                            <div className="w-10" /> {/* Spacer for centering */}
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 font-mono text-sm md:text-base h-[400px] overflow-y-auto custom-scrollbar bg-[#0d1117] text-slate-300 leading-relaxed">
                            <div className="space-y-6">
                                {/* Command 1 */}
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-green-400 font-bold">➜</span>
                                        <span className="text-cyan-400">~</span>
                                        <TypewriterText text="cat profile.json" delay={800} />
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2.5 }}
                                        className="pl-4 border-l-2 border-slate-800"
                                    >
                                        <span className="text-yellow-300">{`{`}</span>
                                        <div className="pl-4">
                                            <span className="text-blue-400">"name"</span>: <span className="text-green-400">"Muhammed Rahil M"</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-400">"role"</span>: <span className="text-green-400">"Backend Architect"</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-400">"experience"</span>: <span className="text-orange-400">3</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-400">"stack"</span>: <span className="text-yellow-300">[</span>
                                        </div>
                                        <div className="pl-8 grid grid-cols-2 gap-x-4 gap-y-1">
                                            <span><span className="text-green-400">"Python"</span>,</span>
                                            <span><span className="text-green-400">"Django"</span>,</span>
                                            <span><span className="text-green-400">"FastAPI"</span>,</span>
                                            <span><span className="text-green-400">"AWS"</span>,</span>
                                            <span><span className="text-green-400">"Docker"</span>,</span>
                                            <span><span className="text-green-400">"K8s"</span>,</span>
                                            <span><span className="text-green-400">"Redis"</span>,</span>
                                            <span><span className="text-green-400">"Celery"</span></span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-yellow-300">]</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-400">"status"</span>: <span className="text-green-400">"Ready to Deploy 🚀"</span>
                                        </div>
                                        <span className="text-yellow-300">{`}`}</span>
                                    </motion.div>
                                </div>

                                {/* Command 2 (Active) */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 3.5 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-400 font-bold">➜</span>
                                        <span className="text-cyan-400">~</span>
                                        <span className="w-2.5 h-5 bg-slate-400 animate-pulse" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50); // Typing speed

        return () => clearInterval(interval);
    }, [started, text]);

    return <span>{displayedText}</span>;
}
