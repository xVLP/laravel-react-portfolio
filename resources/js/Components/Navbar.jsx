import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, Shield, Sparkles, Send } from 'lucide-react';

export default function Navbar({ activeSection }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'py-3 shadow-sm bg-[#F8F6F0]/95 border-b border-[#E8E2D5]' : 'bg-[#F8F6F0]/80 py-4 border-b border-[#E8E2D5]/50'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo / Title */}
                    <a
                        href="#about"
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="w-11 h-11 rounded-xl bg-white border border-[#E4DDD0] p-0.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                            <img src="/images/profile-avatar.jpg" alt="Veronica Louise Piando" className="w-full h-full object-cover object-center rounded-[9px]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-base tracking-tight text-[#1F1915] group-hover:text-[#70482B] transition-colors">
                                Veronica Louise Piando
                            </span>
                            <span className="text-[11px] font-medium text-[#7A6C60]">
                                Instructor & System Developer
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative py-1 text-xs font-semibold transition-colors ${
                                        isActive
                                            ? 'text-[#1F1915] font-bold'
                                            : 'text-[#6B5E54] hover:text-[#1F1915]'
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#70482B] rounded-full" />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Actions: Contact Consultation & Admin Panel */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-[#70482B] hover:bg-[#593922] text-white shadow-sm transition-all"
                        >
                            <Send className="w-3.5 h-3.5" />
                            Contact & Consultation
                        </a>

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl bg-white text-[#5C5046] hover:text-[#1F1915] border border-[#E4DDD0] hover:border-[#CFC4B2] transition-all shadow-sm"
                            title="Admin Dashboard"
                        >
                            <Shield className="w-3.5 h-3.5 text-[#70482B]" />
                            Admin
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-amber-500/20"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileOpen && (
                <div className="md:hidden glass-panel border-t border-amber-500/20 px-4 pt-3 pb-6 mt-3 animate-fadeIn bg-[#120E0C]/95">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-xl transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="h-px bg-amber-500/20 my-2" />

                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-600/30"
                        >
                            <Send className="w-4 h-4" />
                            Hire Me / Need Help?
                        </a>

                        <Link
                            href="/dashboard"
                            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-xl glass-panel text-slate-300 border border-amber-500/20"
                        >
                            <Shield className="w-4 h-4 text-amber-400" />
                            Admin Dashboard
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

