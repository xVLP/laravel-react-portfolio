import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import PortfolioLayout from '../Layouts/PortfolioLayout';
import ProjectModal from '../Components/ProjectModal';
import {
    Sparkles, ArrowRight, Github, Linkedin, Mail, ExternalLink, Download,
    CheckCircle2, Code2, Server, Cpu, Database, Cloud, Terminal, Send,
    Briefcase, GraduationCap, Award, ChevronRight, Copy, Check, Smartphone, Binary, Facebook, Instagram, Search, FileText, Brain, Users, BookOpen
} from 'lucide-react';

export default function Welcome({ projects = [], skills = [], experiences = [] }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeProject, setActiveProject] = useState(null);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);
    const [githubStats, setGithubStats] = useState({});

    // Fetch Live GitHub Repositories Stats
    React.useEffect(() => {
        fetch('https://api.github.com/users/xVLP/repos')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const map = {};
                    data.forEach(repo => {
                        map[repo.name.toLowerCase()] = {
                            stars: repo.stargazers_count,
                            forks: repo.forks_count,
                            language: repo.language,
                        };
                    });
                    setGithubStats(map);
                }
            })
            .catch(() => {});
    }, []);

    // Contact Form Hook (Inertia)
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
        project_scope: 'Web System',
    });

    const handleContactSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setToastMessage('Inquiry sent successfully! I will get back to you shortly.');
                setTimeout(() => setToastMessage(null), 5000);
            },
            onError: () => {
                setToastMessage('Please check form fields and try again.');
                setTimeout(() => setToastMessage(null), 4000);
            }
        });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('veronicapiando.official@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    // Filter projects by category & search query
    const categories = ['All', 'Computer Vision', 'Mobile Engineering', 'Software Architecture', 'Web Architecture', 'Scientific Computing'];
    const filteredProjects = projects.filter(p => {
        const matchesCategory = selectedCategory === 'All' || p.category?.toLowerCase() === selectedCategory.toLowerCase();
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch = !query ||
            p.title?.toLowerCase().includes(query) ||
            p.description?.toLowerCase().includes(query) ||
            p.category?.toLowerCase().includes(query) ||
            (Array.isArray(p.tech_stack) && p.tech_stack.some(t => t.toLowerCase().includes(query)));
        return matchesCategory && matchesSearch;
    });

    // Group skills by domain
    const skillCategories = [
        { key: 'Frontend', icon: Code2, label: 'Web & UI Systems' },
        { key: 'Backend', icon: Server, label: 'Backend & APIs' },
        { key: 'AI/ML', icon: Cpu, label: 'Computer Vision & AI' },
        { key: 'Mobile', icon: Smartphone, label: 'Mobile App Development' },
        { key: 'Scientific', icon: Binary, label: 'Scientific & Math Computing' },
        { key: 'DevOps', icon: Cloud, label: 'Tools & Ecosystem' },
    ];

    return (
        <PortfolioLayout activeSection="about">
            <Head title="Veronica Louise Piando (xVLP) - Instructor & System Developer" />

            {/* Toast Notification Alert */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-amber-500 text-slate-950 font-semibold shadow-2xl animate-bounce">
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

            {/* HERO SECTION - MATCHING REFERENCE DESIGN */}
            <section id="about" className="relative pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
                    {/* Hero Text Content (Left Column) */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        {/* Status Pill */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECE5D8] text-[#5C5046] text-xs font-mono font-medium tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-[#8C5734]" />
                            INSTRUCTOR & SYSTEM DEVELOPER • CBSUA SIPOCOT
                        </div>

                        {/* Editorial Serif Headline */}
                        <div className="space-y-4">
                            <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-[62px] font-bold tracking-tight leading-[1.08] text-[#1F1915]">
                                Architecting <br />
                                Enterprise Web Systems, <br />
                                <span className="text-[#8C5734]">Mobile Apps & <br />Software Solutions.</span>
                            </h1>
                            <p className="text-[#6B5E54] text-base sm:text-lg font-normal leading-relaxed max-w-xl">
                                <strong className="text-[#1F1915] font-semibold">Veronica Louise Piando (xVLP)</strong> is a COS Instructor and System Developer at Central Bicol State University of Agriculture and Master's Degree Candidate in Computer Vision at Ateneo de Naga University.
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="space-y-3 pt-1">
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                <a
                                    href="#contact"
                                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#70482B] hover:bg-[#593922] text-white font-semibold text-sm shadow-sm transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                    Contact & Consultation
                                </a>
                                <a
                                    href="#projects"
                                    className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#3D332B] hover:bg-[#F2ECE1] font-semibold text-sm transition-all border border-[#E4DDD0] shadow-sm"
                                >
                                    <Github className="w-4 h-4 text-[#70482B]" />
                                    View Repositories
                                </a>
                                <a
                                    href="/cv"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#3D332B] hover:bg-[#F2ECE1] font-semibold text-sm transition-all border border-[#E4DDD0] shadow-sm"
                                >
                                    <FileText className="w-4 h-4 text-[#70482B]" />
                                    Download CV (PDF)
                                </a>
                            </div>

                            {/* Email Pill Button */}
                            <div className="flex justify-center lg:justify-start">
                                <button
                                    onClick={copyEmail}
                                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white text-[#5C5046] hover:text-[#1F1915] text-xs font-mono transition-all border border-[#E4DDD0] shadow-sm"
                                    title="Copy Email"
                                >
                                    <Mail className="w-4 h-4 text-[#70482B]" />
                                    {copiedEmail ? 'Copied to Clipboard!' : 'veronicapiando.official@gmail.com'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Portrait Card with Floating Bottom Bar */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative group max-w-sm sm:max-w-md w-full">
                            <div className="relative rounded-[32px] overflow-hidden bg-white border border-[#EFE8DC] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                                <div className="relative rounded-[26px] overflow-hidden aspect-[3/4] bg-[#F4EFE6]">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Veronica Louise Piando"
                                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                    />

                                    {/* Floating Overlay Badge Bar inside Photo */}
                                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#2A1D15]/90 backdrop-blur-md border border-[#423024] text-white shadow-xl grid grid-cols-3 gap-2">
                                        <div className="flex items-center gap-2">
                                            <GraduationCap className="w-4 h-4 text-[#D5C9B7] shrink-0" />
                                            <div>
                                                <div className="text-xs font-bold leading-tight">Instructor</div>
                                                <div className="text-[10px] text-[#D5C9B7] leading-tight">College of IT</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 border-l border-white/10 pl-2">
                                            <Code2 className="w-4 h-4 text-[#D5C9B7] shrink-0" />
                                            <div>
                                                <div className="text-xs font-bold leading-tight">System Dev</div>
                                                <div className="text-[10px] text-[#D5C9B7] leading-tight">Web & Mobile</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 border-l border-white/10 pl-2">
                                            <Brain className="w-4 h-4 text-[#D5C9B7] shrink-0" />
                                            <div>
                                                <div className="text-xs font-bold leading-tight">Comp Vision</div>
                                                <div className="text-[10px] text-[#D5C9B7] leading-tight">Research AI</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BENTO BAR (4 COLUMNS: EDUCATOR, DEVELOPER, RESEARCHER, MENTOR) */}
                <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DDD0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: EDUCATOR */}
                    <div className="flex items-start gap-4 pr-2">
                        <div className="w-11 h-11 rounded-xl bg-[#F2ECE1] text-[#70482B] flex items-center justify-center shrink-0 shadow-sm">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F1915]">EDUCATOR</h4>
                            <p className="text-xs text-[#6B5E54] leading-relaxed">
                                Teaching Computer Science courses with a passion for student development.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: DEVELOPER */}
                    <div className="flex items-start gap-4 pr-2 sm:border-l sm:border-[#E4DDD0] sm:pl-6">
                        <div className="w-11 h-11 rounded-xl bg-[#F2ECE1] text-[#70482B] flex items-center justify-center shrink-0 shadow-sm">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F1915]">DEVELOPER</h4>
                            <p className="text-xs text-[#6B5E54] leading-relaxed">
                                Building scalable web systems and mobile applications that solve real-world problems.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: RESEARCHER */}
                    <div className="flex items-start gap-4 pr-2 lg:border-l lg:border-[#E4DDD0] lg:pl-6">
                        <div className="w-11 h-11 rounded-xl bg-[#F2ECE1] text-[#70482B] flex items-center justify-center shrink-0 shadow-sm">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F1915]">RESEARCHER</h4>
                            <p className="text-xs text-[#6B5E54] leading-relaxed">
                                Exploring Computer Vision and AI to create innovative and intelligent solutions.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: MENTOR */}
                    <div className="flex items-start gap-4 sm:border-l sm:border-[#E4DDD0] sm:pl-6">
                        <div className="w-11 h-11 rounded-xl bg-[#F2ECE1] text-[#70482B] flex items-center justify-center shrink-0 shadow-sm">
                            <Users className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-xs uppercase tracking-wider text-[#1F1915]">MENTOR</h4>
                            <p className="text-xs text-[#6B5E54] leading-relaxed">
                                Guiding and inspiring the next generation of IT professionals and developers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REPOSITORIES & SYSTEMS SHOWCASE SECTION (NO PICTURES) */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E6DFD3]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <span className="text-xs font-mono text-[#8C5228] uppercase tracking-widest flex items-center gap-2 font-bold">
                            <Code2 className="w-3.5 h-3.5" /> Software Repositories
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-[#1C130E]">
                            Featured Codebases & Systems
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-2xl border border-[#E6DFD3] shadow-sm">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-[#2C1E16] text-[#FAF8F5] font-bold shadow-sm'
                                        : 'text-[#5C4D44] hover:text-[#1C130E] hover:bg-[#F4EFE6]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Real-Time Search Bar & Filter Summary */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    <div className="relative w-full sm:max-w-md">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5228]" />
                        <input
                            type="text"
                            placeholder="Search codebases by technology (e.g., Flutter, Laravel, Python, PyTorch, MySQL)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#E6DFD3] text-xs font-mono text-[#1C130E] placeholder-slate-400 focus:outline-none focus:border-[#8C5228] shadow-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-[#1C130E]"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    <div className="text-xs font-mono text-[#5C4D44]">
                        Showing <span className="text-[#8C5228] font-bold">{filteredProjects.length}</span> of {projects.length} Repositories
                    </div>
                </div>

                {/* Sleek Picture-less Repository Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-3xl p-6 border border-[#E6DFD3] hover:border-[#D5C9B7] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between space-y-5"
                        >
                            <div className="space-y-4">
                                {/* Header: Icon + Category Badge */}
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#8C5228] group-hover:scale-105 transition-transform">
                                        <Code2 className="w-5 h-5" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* Live GitHub Metrics Badge */}
                                        {(() => {
                                            const repoName = project.github_url ? project.github_url.split('/').pop()?.toLowerCase() : '';
                                            const stats = githubStats[repoName];
                                            if (stats) {
                                                return (
                                                    <span className="flex items-center gap-1 text-[10px] font-mono text-[#8C5228] bg-[#F4EFE6] px-2 py-0.5 rounded-md border border-[#E6DFD3] font-semibold">
                                                        ⭐ {stats.stars} {stats.language ? `• ${stats.language}` : ''}
                                                    </span>
                                                );
                                            }
                                            return null;
                                        })()}
                                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#2C1E16] text-[#FAF8F5]">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-[#1C130E] group-hover:text-[#8C5228] transition-colors leading-snug">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#5C4D44] text-xs leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {Array.isArray(project.tech_stack)
                                        ? project.tech_stack.slice(0, 5).map((tech, idx) => (
                                              <span
                                                  key={idx}
                                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F4EFE6] text-[#4A3A2F] border border-[#E6DFD3]"
                                              >
                                                  {tech}
                                              </span>
                                          ))
                                        : typeof project.tech_stack === 'string'
                                        ? JSON.parse(project.tech_stack || '[]').slice(0, 5).map((tech, idx) => (
                                              <span
                                                  key={idx}
                                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F4EFE6] text-[#4A3A2F] border border-[#E6DFD3]"
                                              >
                                                  {tech}
                                              </span>
                                          ))
                                        : null}
                                </div>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="pt-4 border-t border-[#E6DFD3] flex items-center justify-between">
                                <button
                                    onClick={() => setActiveProject(project)}
                                    className="text-xs font-bold text-[#8C5228] hover:text-[#2C1E16] flex items-center gap-1 group/btn"
                                >
                                    View Details
                                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex items-center gap-2">
                                    <a
                                        href="#contact"
                                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#F4EFE6] hover:bg-[#8C5228] text-[#8C5228] hover:text-white transition-all border border-[#E6DFD3]"
                                    >
                                        Consultation
                                    </a>

                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-1.5 rounded-lg bg-white hover:text-[#8C5228] text-[#5C4D44] transition-colors border border-[#E6DFD3]"
                                            title="View GitHub Repository"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SKILLS & PROFICIENCY SECTION */}
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E6DFD3]">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-xs font-mono text-[#8C5228] uppercase tracking-widest font-bold">
                        Technical Competencies
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C130E] tracking-tight">
                        Skills & Domain Expertise
                    </h2>
                    <p className="text-[#5C4D44] text-sm">
                        Experience across Web Architectures, Mobile AI Vision, Computer Vision for Agriculture, and Scientific Computing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map(({ key, icon: Icon, label }) => {
                        const catSkills = skills.filter(s => s.category?.toLowerCase() === key.toLowerCase());
                        return (
                            <div
                                key={key}
                                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DFD3] space-y-6 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#8C5228]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1C130E] tracking-tight">
                                        {label}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {catSkills.map((skill) => (
                                        <div key={skill.id} className="space-y-1.5">
                                            <div className="flex justify-between text-xs font-mono">
                                                <span className="text-[#1C130E] font-semibold">{skill.name}</span>
                                                <span className="text-[#8C5228] font-bold">{skill.proficiency}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-[#F4EFE6] rounded-full overflow-hidden border border-[#E6DFD3]">
                                                <div
                                                    className="h-full bg-gradient-to-r from-[#8C5228] to-[#2C1E16] rounded-full transition-all duration-1000"
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
            <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#E6DFD3]">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-mono text-[#8C5228] uppercase tracking-widest font-bold">
                        Academic & Academic Career
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C130E] tracking-tight">
                        Faculty & System Development Experience
                    </h2>
                </div>

                <div className="relative border-l-2 border-[#D5C9B7] ml-4 sm:ml-8 space-y-10">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 sm:pl-10 group">
                            {/* Dot indicator */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2C1E16] border-2 border-white transition-all shadow-md" />

                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DFD3] space-y-4 shadow-sm">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1C130E]">{exp.role}</h3>
                                        <span className="text-sm font-semibold text-[#8C5228]">{exp.company}</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#2C1E16] text-[#FAF8F5] font-bold">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-[#5C4D44] text-sm leading-relaxed">
                                    {exp.description}
                                </p>

                                {exp.achievements && (
                                    <div className="pt-2">
                                        <h5 className="text-xs font-mono text-[#8C5228] uppercase mb-2 font-bold">Key Accomplishments & Subjects Handled:</h5>
                                        <ul className="space-y-1.5 text-xs text-[#5C4D44]">
                                            {(Array.isArray(exp.achievements) ? exp.achievements : JSON.parse(exp.achievements || '[]')).map((ach, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <ChevronRight className="w-3.5 h-3.5 text-[#8C5228] shrink-0 mt-0.5" />
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

            {/* EDUCATION & ACADEMIC HONORS SECTION */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#E6DFD3]">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-mono text-[#8C5228] uppercase tracking-widest flex items-center justify-center gap-2 font-bold">
                        <GraduationCap className="w-4 h-4" /> Academic Credentials
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C130E] tracking-tight">
                        Education & Research Honors
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* BS Computer Science Cum Laude */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DFD3] space-y-4 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#8C5228]">
                                <Award className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#2C1E16] text-[#FAF8F5]">
                                    CUM LAUDE
                                </span>
                                <h3 className="text-lg font-bold text-[#1C130E] mt-1">B.S. Computer Science</h3>
                            </div>
                        </div>
                        <div className="text-xs font-mono text-[#8C5228] font-bold">
                            Bicol University College of Science (Graduated 07/2024)
                        </div>
                        <p className="text-[#5C4D44] text-xs leading-relaxed">
                            Graduated with <strong>Cum Laude honours</strong>, consistently made the Dean's List.
                        </p>
                        <div className="pt-2 space-y-1.5 text-xs text-[#5C4D44] border-t border-[#E6DFD3]">
                            <div className="font-semibold text-[#1C130E]">Thesis & Research Awards:</div>
                            <div className="text-[#5C4D44] font-mono text-[11px]">
                                • Thesis: Varietal Classification of NSIC-Registered Pili Nut using CNN<br />
                                • BUCS Best in Paper Award<br />
                                • 2nd Place Award, 19th BU Student R&D Forum
                            </div>
                        </div>
                    </div>

                    {/* MS Computer Science Ateneo de Naga */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DFD3] space-y-4 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#8C5228]">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#8C5228] text-white">
                                    DEGREE CANDIDATE • 30 UNITS
                                </span>
                                <h3 className="text-lg font-bold text-[#1C130E] mt-1">M.S. Computer Science</h3>
                            </div>
                        </div>
                        <div className="text-xs font-mono text-[#8C5228] font-bold">
                            Ateneo De Naga University (Computer Vision Track) • Thesis 1 Ongoing
                        </div>
                        <p className="text-[#5C4D44] text-xs leading-relaxed">
                            <strong>Master's Degree Candidate</strong> with <strong>30 Units Completed</strong> and Thesis 1 currently ongoing.
                        </p>
                        <div className="pt-2 space-y-1 text-xs text-[#5C4D44] border-t border-[#E6DFD3]">
                            <div className="font-semibold text-[#1C130E]">Advanced Graduate Coursework Passed:</div>
                            <div className="text-[#5C4D44] font-mono text-[11px] leading-relaxed">
                                • Advanced Data Structures & Algorithms<br />
                                • Advanced Operating Systems & Computer Organization<br />
                                • Advanced Theory of Programming Languages & Theory of Computation<br />
                                • Computer Graphics & Trends in Computer Vision<br />
                                • Artificial Intelligence & Digital Image Processing
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM SECTION */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#E6DFD3]">
                <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DFD3] shadow-md space-y-8">
                    <div className="text-center space-y-3">
                        <span className="text-xs font-mono text-[#8C5228] uppercase tracking-widest font-bold">
                            Get In Touch & Consultation
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#1C130E] tracking-tight">
                            Project Proposal & Consultation Inquiry
                        </h2>
                        <p className="text-[#5C4D44] text-sm max-w-xl mx-auto">
                            Select a project scope below or describe your custom software engineering requirements.
                        </p>
                    </div>

                    {/* Interactive Project Scope Selector Pills */}
                    <div className="space-y-2">
                        <label className="block text-xs font-mono text-[#1C130E] font-semibold">Select Project Scope:</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {[
                                { label: 'Web Platform', sub: 'Laravel / React' },
                                { label: 'Mobile App', sub: 'Flutter / iOS / Android' },
                                { label: 'AI Solution', sub: 'Computer Vision / Models' },
                                { label: 'Consultation', sub: 'System Architecture' },
                            ].map((scope) => (
                                <button
                                    type="button"
                                    key={scope.label}
                                    onClick={() => {
                                        setData(d => ({
                                            ...d,
                                            project_scope: scope.label,
                                            subject: d.subject || `Inquiry: ${scope.label} (${scope.sub})`
                                        }));
                                    }}
                                    className={`p-3 rounded-2xl border text-left transition-all ${
                                        data.project_scope === scope.label
                                            ? 'bg-[#2C1E16] border-[#2C1E16] text-[#FAF8F5] shadow-sm'
                                            : 'bg-[#FAF8F5] border-[#E6DFD3] text-[#5C4D44] hover:text-[#1C130E]'
                                    }`}
                                >
                                    <div className="text-xs font-bold">{scope.label}</div>
                                    <div className="text-[10px] font-mono mt-0.5 opacity-80">{scope.sub}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-mono text-[#1C130E] font-semibold mb-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    placeholder="Dr. Maria Santos"
                                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] text-[#1C130E] text-sm focus:border-[#8C5228] focus:outline-none transition-colors"
                                />
                                {errors.name && <span className="text-xs text-rose-600 mt-1">{errors.name}</span>}
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-[#1C130E] font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="santos@example.edu.ph"
                                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] text-[#1C130E] text-sm focus:border-[#8C5228] focus:outline-none transition-colors"
                                />
                                {errors.email && <span className="text-xs text-rose-600 mt-1">{errors.email}</span>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-[#1C130E] font-semibold mb-2">Subject</label>
                            <input
                                type="text"
                                required
                                value={data.subject}
                                onChange={e => setData('subject', e.target.value)}
                                placeholder="Research Collaboration / System Development Proposal"
                                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] text-[#1C130E] text-sm focus:border-[#8C5228] focus:outline-none transition-colors"
                            />
                            {errors.subject && <span className="text-xs text-rose-600 mt-1">{errors.subject}</span>}
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-[#1C130E] font-semibold mb-2">Message</label>
                            <textarea
                                rows={5}
                                required
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                                placeholder="Describe your inquiry or research project..."
                                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] text-[#1C130E] text-sm focus:border-[#8C5228] focus:outline-none transition-colors"
                            />
                            {errors.message && <span className="text-xs text-rose-600 mt-1">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-4 rounded-2xl bg-[#8C5228] hover:bg-[#72411E] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
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

