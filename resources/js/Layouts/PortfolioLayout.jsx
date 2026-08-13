import React, { useState, useEffect } from 'react';
import ParticleCanvas from '../Components/ParticleCanvas';
import Navbar from '../Components/Navbar';
import { Heart, Github, Linkedin, Twitter, Mail, Code, Terminal } from 'lucide-react';

export default function PortfolioLayout({ children, activeSection }) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen flex flex-col bg-[#FAF8F5] bg-grid-pattern text-[#1C130E] selection:bg-[#8C5228] selection:text-white font-sans">
            {/* Fixed Navigation Bar */}
            <Navbar activeSection={activeSection} />

            {/* Main Page Body */}
            <main className="flex-1 relative z-10 pt-20">
                {children}
            </main>

            {/* Back to Top Floating Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 p-3.5 rounded-2xl glass-panel bg-white border border-[#E6DFD3] text-[#8C5228] hover:text-white hover:bg-[#8C5228] transition-all shadow-xl hover:scale-105 group"
                    title="Back to Top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="m18 15-6-6-6 6"/></svg>
                </button>
            )}

            {/* Footer */}
            <footer className="relative z-10 border-t border-[#E6DFD3] glass-nav mt-20 py-10 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#D5C9B7] flex items-center justify-center bg-white shadow-sm">
                                <img src="/images/profile-avatar.jpg" alt="Veronica Louise Piando" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold tracking-tight text-[#5C4D44]">
                                Veronica Louise Piando (xVLP) &copy; {new Date().getFullYear()}. All rights reserved.
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 text-[#5C4D44]">
                            <a
                                href="https://github.com/xVLP"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-[#8C5228] hover:bg-[#EFE9DC] transition-all"
                                title="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com/AnikaLana"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-[#8C5228] hover:bg-[#EFE9DC] transition-all"
                                title="Facebook"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/veronica-louise-piando/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-[#8C5228] hover:bg-[#EFE9DC] transition-all"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:veronicapiando.official@gmail.com"
                                className="p-2 rounded-lg hover:text-[#8C5228] hover:bg-[#EFE9DC] transition-all"
                                title="Email"
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
