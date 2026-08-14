import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    FolderKanban,
    Mail,
    Sparkles,
    Plus,
    ExternalLink,
    Database,
    Shield,
    Layers,
    Clock,
    ArrowUpRight,
    CheckCircle2,
    MessageSquare,
    Cpu,
    FileText
} from 'lucide-react';

export default function Dashboard({ projectCount = 0, messageCount = 0, unreadCount = 0, recentMessages = [], projects = [] }) {
    return (
        <AdminLayout title="Overview">
            <Head title="Control Center - Admin Dashboard" />

            <div className="space-y-8 animate-fadeIn">
                {/* Hero Welcome Banner */}
                <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-indigo-950/60 border border-cyan-500/30 shadow-2xl shadow-cyan-500/5">
                    <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Zero-Config Embedded SQLite CMS</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">Veronica</span> 👋
                            </h1>
                            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                                Manage your portfolio showcase projects, visitor inquiries, technical stack specs, and multi-theme configurations from a single administrative hub.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/dashboard/projects"
                                className="px-4 py-2.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Add New Project</span>
                            </Link>

                            <Link
                                href="/cv"
                                target="_blank"
                                className="px-4 py-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-mono flex items-center gap-2 transition-all"
                            >
                                <FileText className="w-4 h-4 text-cyan-400" />
                                <span>Preview CV</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Metric Summary Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Projects Card */}
                    <div className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Showcase Items</span>
                            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                <FolderKanban className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white">{projectCount}</div>
                            <p className="text-xs text-slate-400 mt-1 font-mono">Published Repos & AI Systems</p>
                        </div>
                        <Link
                            href="/dashboard/projects"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-2 group-hover:translate-x-1 transition-transform"
                        >
                            <span>Manage Showcase</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Messages Card */}
                    <div className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Visitor Inbox</span>
                            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white flex items-center gap-2">
                                {messageCount}
                                {unreadCount > 0 && (
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500 text-white font-mono font-bold shadow-md shadow-rose-500/30">
                                        {unreadCount} new
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-slate-400 mt-1 font-mono">Contact Form Submissions</p>
                        </div>
                        <Link
                            href="/dashboard/messages"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 pt-2 group-hover:translate-x-1 transition-transform"
                        >
                            <span>Open Inbox</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Database Engine Card */}
                    <div className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Database Engine</span>
                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                <Database className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-white">SQLite 3</div>
                            <p className="text-xs text-emerald-400 mt-1 font-mono flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Zero-Config Embedded DB
                            </p>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/60">
                            1-Click Deploy Ready
                        </div>
                    </div>

                    {/* System Tech Specs */}
                    <div className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tech Architecture</span>
                            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                <Cpu className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-extrabold text-white">Laravel 11 + React</div>
                            <p className="text-xs text-slate-400 mt-1 font-mono">Inertia.js 1.0 & Vite 5</p>
                        </div>
                        <div className="text-[11px] font-mono text-purple-300 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                            <span>PHP 8.2+</span>
                            <span>Tailwind 3</span>
                        </div>
                    </div>
                </div>

                {/* Content Grid: Recent Inquiries & Quick Management */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Recent Messages */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <Mail className="w-5 h-5 text-indigo-400" />
                                Recent Inquiries
                            </h2>
                            <Link
                                href="/dashboard/messages"
                                className="text-xs font-mono text-indigo-400 hover:underline flex items-center gap-1"
                            >
                                View All Inbox &rarr;
                            </Link>
                        </div>

                        <div className="space-y-3">
                            {recentMessages.length === 0 ? (
                                <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-2">
                                    <MessageSquare className="w-8 h-8 text-slate-600 mx-auto" />
                                    <p className="text-xs font-mono text-slate-400">No contact form messages received yet.</p>
                                </div>
                            ) : (
                                recentMessages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`p-5 rounded-3xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                                            msg.is_read
                                                ? 'bg-slate-900/40 border-slate-800/80 text-slate-300'
                                                : 'bg-indigo-950/20 border-indigo-500/30 text-white shadow-lg shadow-indigo-500/5'
                                        }`}
                                    >
                                        <div className="flex items-start gap-3.5 min-w-0">
                                            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-extrabold text-indigo-300 shrink-0">
                                                {msg.name?.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div className="min-w-0 space-y-1">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="text-xs font-bold text-white truncate">{msg.name}</h3>
                                                    <span className="text-[11px] font-mono text-cyan-400">&lt;{msg.email}&gt;</span>
                                                    {!msg.is_read && (
                                                        <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold">
                                                            NEW
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs font-semibold text-slate-200 truncate">{msg.subject}</p>
                                                <p className="text-xs text-slate-400 line-clamp-1">{msg.message}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0 justify-end">
                                            <Link
                                                href="/dashboard/messages"
                                                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
                                            >
                                                Read
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right Column: Quick Navigation & Admin Profile */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-5">
                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                <Shield className="w-5 h-5 text-cyan-400" />
                                Quick Admin Shortcuts
                            </h2>

                            <div className="space-y-3">
                                <Link
                                    href="/dashboard/projects"
                                    className="p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <FolderKanban className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xs font-bold text-white group-hover:text-cyan-300">
                                                Project Showcase
                                            </h3>
                                            <p className="text-[11px] text-slate-400 font-mono">Create or edit portfolio items</p>
                                        </div>
                                    </div>
                                    <Plus className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                </Link>

                                <Link
                                    href="/dashboard/messages"
                                    className="p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xs font-bold text-white group-hover:text-indigo-300">
                                                Inquiries Inbox
                                            </h3>
                                            <p className="text-[11px] text-slate-400 font-mono">Review recruiter submissions</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                </Link>

                                <a
                                    href="https://github.com/xVLP"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <ExternalLink className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xs font-bold text-white group-hover:text-purple-300">
                                                GitHub Organization
                                            </h3>
                                            <p className="text-[11px] text-slate-400 font-mono">github.com/xVLP</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
