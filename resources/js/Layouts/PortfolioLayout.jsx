import React, { useState, useEffect } from 'react';
import ParticleCanvas from '../Components/ParticleCanvas';
import Navbar from '../Components/Navbar';
import { Heart, Github, Linkedin, Twitter, Mail, Code, Terminal } from 'lucide-react';

export default function PortfolioLayout({ children, activeSection = 'about' }) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="relative min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black">
            {/* Ambient Background Particle Layer */}
            <ParticleCanvas />

            {/* Glowing Accent Blobs */}
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none z-0 animate-pulse-glow" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none z-0 animate-pulse-glow" style={{ animationDelay: '2s' }} />

            {/* Fixed Navigation Bar */}
            <Navbar activeSection={activeSection} theme={theme} setTheme={setTheme} />

            {/* Page Main Content */}
            <main className="flex-1 relative z-10 pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 glass-nav mt-20 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                <Terminal className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-tight text-slate-300">
                                Alex Vance &copy; {new Date().getFullYear()} All rights reserved.
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 text-slate-400">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:alex@vance-dev.com"
                                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
