import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Code2, Palette, Menu, X, Shield, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, theme, setTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [themeMenuOpen, setThemeMenuOpen] = useState(false);

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

    const themes = [
        { id: 'dark', name: 'Cyber Dark', color: 'bg-cyan-500' },
        { id: 'purple', name: 'Midnight Purple', color: 'bg-purple-500' },
        { id: 'emerald', name: 'Emerald Luxe', color: 'bg-emerald-500' },
        { id: 'light', name: 'Minimal Light', color: 'bg-slate-200' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'glass-nav py-3.5 shadow-xl' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo / Title */}
                    <a
                        href="#about"
                        className="flex items-center gap-2.5 group cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
                                <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                                Alex Vance
                            </span>
                            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                                Full Stack & AI
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                                        isActive
                                            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Actions: Theme Switcher & Admin Button */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Theme Picker Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                                className="p-2.5 rounded-xl glass-panel hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all"
                                title="Change Accent Theme"
                            >
                                <Palette className="w-4 h-4 text-cyan-400" />
                            </button>

                            {themeMenuOpen && (
                                <div className="absolute right-0 mt-2 w-44 rounded-xl glass-panel p-2 shadow-2xl z-50 border border-white/10">
                                    <div className="text-[11px] font-mono text-slate-400 uppercase px-2 py-1 mb-1">
                                        Select Theme
                                    </div>
                                    {themes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => {
                                                setTheme(t.id);
                                                setThemeMenuOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs rounded-lg transition-colors ${
                                                theme === t.id
                                                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                                                    : 'text-slate-300 hover:bg-white/5'
                                            }`}
                                        >
                                            <span className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
                                            {t.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Admin Link */}
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 hover:opacity-90 shadow-md shadow-cyan-500/20 transition-all"
                        >
                            <Shield className="w-3.5 h-3.5" />
                            Admin Panel
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-xl glass-panel text-slate-300 hover:text-white"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileOpen && (
                <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-3 pb-6 mt-3 animate-fadeIn">
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

                        <div className="h-px bg-white/10 my-2" />

                        <div className="flex items-center justify-between px-2 py-1">
                            <span className="text-xs font-mono text-slate-400">Theme</span>
                            <div className="flex gap-2">
                                {themes.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTheme(t.id)}
                                        className={`w-6 h-6 rounded-full border ${t.color} ${
                                            theme === t.id ? 'ring-2 ring-cyan-400 border-white' : 'border-transparent'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/dashboard"
                            className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-xl bg-cyan-500 text-slate-950"
                        >
                            <Shield className="w-4 h-4" />
                            Admin Panel
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
