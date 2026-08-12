import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Shield, FolderKanban, Mail, Layers, ExternalLink, Plus, LogOut, Sparkles } from 'lucide-react';

export default function Dashboard({ projectCount = 0, messageCount = 0, unreadCount = 0, recentMessages = [] }) {
    return (
        <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-8">
            <Head title="Admin Dashboard - Alex Vance Portfolio" />

            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-cyan-500/20">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-extrabold text-white tracking-tight">
                                Portfolio Control Center
                            </h1>
                            <p className="text-slate-400 text-xs font-mono">
                                Admin CMS for Projects, Messages & System Metrics
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white text-xs font-mono border border-white/10 hover:bg-white/5 transition-all"
                        >
                            <ExternalLink className="w-4 h-4 text-cyan-400" /> Public Site
                        </Link>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 text-xs font-mono border border-rose-500/20 transition-all"
                        >
                            <LogOut className="w-4 h-4" /> Logout
                        </Link>
                    </div>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-slate-400 uppercase">Total Projects</span>
                            <FolderKanban className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="text-3xl font-extrabold text-white">{projectCount}</div>
                        <Link
                            href="/dashboard/projects"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline pt-2"
                        >
                            Manage Projects &rarr;
                        </Link>
                    </div>

                    <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-slate-400 uppercase">Messages Inbox</span>
                            <Mail className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div className="text-3xl font-extrabold text-white flex items-center gap-2">
                            {messageCount}
                            {unreadCount > 0 && (
                                <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500 text-white font-mono">
                                    {unreadCount} new
                                </span>
                            )}
                        </div>
                        <Link
                            href="/dashboard/messages"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline pt-2"
                        >
                            View Inbox &rarr;
                        </Link>
                    </div>

                    <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-slate-400 uppercase">System Status</span>
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="text-3xl font-extrabold text-emerald-400">Active</div>
                        <span className="text-xs font-mono text-slate-400 block pt-2">
                            Laravel 11 + SQLite / MySQL
                        </span>
                    </div>
                </div>

                {/* Quick Action Navigation Tabs */}
                <div className="flex gap-4">
                    <Link
                        href="/dashboard/projects"
                        className="flex-1 glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <FolderKanban className="w-6 h-6 text-cyan-400" />
                            <div>
                                <h3 className="font-bold text-white group-hover:text-cyan-400">
                                    Project Manager
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Add, edit, or remove portfolio showcases
                                </p>
                            </div>
                        </div>
                        <Plus className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </Link>

                    <Link
                        href="/dashboard/messages"
                        className="flex-1 glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <Mail className="w-6 h-6 text-indigo-400" />
                            <div>
                                <h3 className="font-bold text-white group-hover:text-indigo-400">
                                    Inquiries Inbox
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Read contact form submissions from recruiters
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ChevronRight(props) {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );
}
