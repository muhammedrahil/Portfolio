"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 md:pt-32 pb-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Let's <span className="text-cyan-400">Connect</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:muhammedrahilmadathingal@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-cyan-500/30">
                                    <Mail size={20} />
                                </div>
                                <span>muhammedrahilmadathingal@gmail.com</span>
                            </a>

                            <a href="tel:+917592978136" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-cyan-500/30">
                                    <Phone size={20} />
                                </div>
                                <span>+91-7592978136</span>
                            </a>

                            <div className="flex items-center gap-4 text-slate-300 group">
                                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                                    <MapPin size={20} />
                                </div>
                                <span>Malappuram, Kerala, India – 673639</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400">Name</label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400">Email</label>
                                    <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400">Message</label>
                                <textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors h-32 resize-none" placeholder="Hello..." />
                            </div>
                            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 Muhammed Rahil M. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/muhammedrahil" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-rahil/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://pypi.org/user/muhammedrahilm" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors" title="PyPI Profile">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/m_rahi_l" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="https://x.com/m_rahi_l" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
