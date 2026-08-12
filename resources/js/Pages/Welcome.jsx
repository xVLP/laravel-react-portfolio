import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import PortfolioLayout from '../Layouts/PortfolioLayout';
import ProjectModal from '../Components/ProjectModal';
import {
    Sparkles, ArrowRight, Github, Linkedin, Mail, ExternalLink, Download,
    CheckCircle2, Code2, Server, Cpu, Database, Cloud, Terminal, Send,
    Briefcase, GraduationCap, Award, ChevronRight, Copy, Check
} from 'lucide-react';

export default function Welcome({ projects = [], skills = [], experiences = [] }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeProject, setActiveProject] = useState(null);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    // Contact Form Hook (Inertia)
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleContactSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setToastMessage('Message sent successfully! I will get back to you shortly.');
                setTimeout(() => setToastMessage(null), 5000);
            },
            onError: () => {
                setToastMessage('Please check form fields and try again.');
                setTimeout(() => setToastMessage(null), 4000);
            }
        });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('alex@vance-dev.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    // Filter projects by category
    const categories = ['All', 'Web Apps', 'AI/ML', 'Cloud/DevOps', 'Mobile'];
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase());

    // Group skills by domain
    const skillCategories = [
        { key: 'Frontend', icon: Code2, label: 'Frontend Architecture' },
        { key: 'Backend', icon: Server, label: 'Backend & APIs' },
        { key: 'AI/ML', icon: Cpu, label: 'AI & Data Engineering' },
        { key: 'DevOps', icon: Cloud, label: 'Cloud & Infrastructure' },
    ];

    return (
        <PortfolioLayout activeSection="about">
            <Head title="Alex Vance - Senior Full Stack & AI Architect" />

            {/* Toast Notification Alert */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-semibold shadow-2xl animate-bounce">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{toastMessage}</span>
                </div>
            )}

            {/* Modal Overlay for Selected Project */}
            {activeProject && (
                <ProjectModal
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            )}

            {/* HERO SECTION */}
            <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    {/* Live Availability Pill */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium tracking-wide">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        Available for Contracts & Architect Consulting
                    </div>

                    {/* Main Hero Headline */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
                            Architecting High-Performance <br />
                            <span className="text-gradient">Web Apps & AI Systems</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                            Hi, I'm <strong className="text-white font-semibold">Alex Vance</strong> — Senior Full Stack Developer & AI Engineer with 8+ years experience building scalable Laravel, React, and cloud architectures.
                        </p>
                    </div>

                    {/* Call to Actions */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
                        >
                            Explore Featured Work
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-panel text-slate-200 hover:text-white font-semibold text-sm hover:bg-white/10 transition-all border border-white/10"
                        >
                            <Mail className="w-4 h-4 text-cyan-400" />
                            Get In Touch
                        </a>
                        <button
                            onClick={copyEmail}
                            className="flex items-center gap-2 px-4 py-3.5 rounded-2xl glass-panel text-slate-300 hover:text-white text-xs font-mono transition-all border border-white/10"
                            title="Copy Email"
                        >
                            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                            {copiedEmail ? 'Copied!' : 'alex@vance-dev.com'}
                        </button>
                    </div>

                    {/* Quick Metric Badges */}
                    <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">8+</div>
                            <div className="text-xs font-mono text-slate-400 mt-1">Years Exp.</div>
                        </div>
                        <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">45+</div>
                            <div className="text-xs font-mono text-slate-400 mt-1">Projects Deployed</div>
                        </div>
                        <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">99.9%</div>
                            <div className="text-xs font-mono text-slate-400 mt-1">Uptime SLA</div>
                        </div>
                        <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">12</div>
                            <div className="text-xs font-mono text-slate-400 mt-1">AI Models Shipped</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SHOWCASE SECTION */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" /> Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
                            Featured Projects & Applications
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl border border-white/10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                                <img
                                    src={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-90" />
                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                                    {project.category}
                                </span>
                            </div>

                            {/* Card Details */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {Array.isArray(project.tech_stack)
                                        ? project.tech_stack.slice(0, 4).map((tech, idx) => (
                                              <span
                                                  key={idx}
                                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                                              >
                                                  {tech}
                                              </span>
                                          ))
                                        : typeof project.tech_stack === 'string'
                                        ? JSON.parse(project.tech_stack || '[]').slice(0, 4).map((tech, idx) => (
                                              <span
                                                  key={idx}
                                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                                              >
                                                  {tech}
                                              </span>
                                          ))
                                        : null}
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                    <button
                                        onClick={() => setActiveProject(project)}
                                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                                    >
                                        View Details
                                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                    <div className="flex gap-2">
                                        {project.github_url && (
                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-1.5 rounded-lg glass-panel hover:text-cyan-400 text-slate-400 transition-colors"
                                                title="View Code"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.live_url && (
                                            <a
                                                href={project.live_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-1.5 rounded-lg glass-panel hover:text-cyan-400 text-slate-400 transition-colors"
                                                title="Live Demo"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SKILLS & PROFICIENCY SECTION */}
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                        Technical Expertise
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Skills & Tech Stack Radar
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Mastery across full-stack engineering, cloud deployments, and AI integrations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map(({ key, icon: Icon, label }) => {
                        const catSkills = skills.filter(s => s.category?.toLowerCase() === key.toLowerCase());
                        return (
                            <div
                                key={key}
                                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tight">
                                        {label}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {catSkills.map((skill) => (
                                        <div key={skill.id} className="space-y-1.5">
                                            <div className="flex justify-between text-xs font-mono">
                                                <span className="text-slate-200 font-medium">{skill.name}</span>
                                                <span className="text-cyan-400">{skill.proficiency}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                                                <div
                                                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.proficiency}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CAREER TIMELINE SECTION */}
            <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                        Career Path
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Experience & Milestones
                    </h2>
                </div>

                <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 sm:pl-10 group">
                            {/* Dot indicator */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-400/50" />

                            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-sm font-semibold text-cyan-400">{exp.company}</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/5">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {exp.description}
                                </p>

                                {exp.achievements && (
                                    <div className="pt-2">
                                        <h5 className="text-xs font-mono text-slate-400 uppercase mb-2">Key Accomplishments:</h5>
                                        <ul className="space-y-1.5 text-xs text-slate-300">
                                            {(Array.isArray(exp.achievements) ? exp.achievements : JSON.parse(exp.achievements || '[]')).map((ach, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                                    <span>{ach}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT FORM SECTION */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
                <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/20 shadow-2xl space-y-8">
                    <div className="text-center space-y-3">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            Let's Build Something Extraordinary
                        </h2>
                        <p className="text-slate-400 text-sm max-w-xl mx-auto">
                            Have a project in mind, contract opportunity, or engineering inquiry? Drop me a message below.
                        </p>
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-mono text-slate-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    placeholder="Sarah Connor"
                                    className="w-full px-4 py-3 rounded-xl glass-panel bg-slate-900/60 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                                />
                                {errors.name && <span className="text-xs text-rose-400 mt-1">{errors.name}</span>}
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="sarah@example.com"
                                    className="w-full px-4 py-3 rounded-xl glass-panel bg-slate-900/60 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                                />
                                {errors.email && <span className="text-xs text-rose-400 mt-1">{errors.email}</span>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-slate-300 mb-2">Subject</label>
                            <input
                                type="text"
                                required
                                value={data.subject}
                                onChange={e => setData('subject', e.target.value)}
                                placeholder="Project Consultation / Full Stack Inquiry"
                                className="w-full px-4 py-3 rounded-xl glass-panel bg-slate-900/60 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                            />
                            {errors.subject && <span className="text-xs text-rose-400 mt-1">{errors.subject}</span>}
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-slate-300 mb-2">Message</label>
                            <textarea
                                rows={5}
                                required
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                                placeholder="Describe your project scope or timeline..."
                                className="w-full px-4 py-3 rounded-xl glass-panel bg-slate-900/60 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                            />
                            {errors.message && <span className="text-xs text-rose-400 mt-1">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                        >
                            {processing ? 'Sending...' : 'Send Message'}
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </section>
        </PortfolioLayout>
    );
}
