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
                <div className="relative overflow-hidden p-6 sm:p-10 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4EFE6] rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E6DFD3] text-[#70482B] text-xs font-mono font-bold">
                                <Sparkles className="w-3.5 h-3.5 text-[#70482B]" />
                                <span>Zero-Config Embedded SQLite CMS</span>
                            </div>
                            <h1 className="text-2xl sm:text-4xl font-bold text-[#1F1915] font-serif-editorial tracking-tight">
                                Welcome back, <span className="text-[#70482B]">Veronica</span> 👋
                            </h1>
                            <p className="text-[#6B5E54] text-xs sm:text-sm max-w-2xl leading-relaxed">
                                Manage your portfolio showcase projects, visitor inquiries, technical stack specs, and multi-theme configurations from a single administrative hub.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/dashboard/projects"
                                className="px-5 py-3 rounded-xl bg-[#70482B] hover:bg-[#593922] text-white font-semibold text-xs flex items-center gap-2 shadow-sm transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Add New Project</span>
                            </Link>

                            <Link
                                href="/cv"
                                target="_blank"
                                className="px-5 py-3 rounded-xl bg-white hover:bg-[#F2ECE1] border border-[#E4DDD0] text-[#3D332B] text-xs font-mono font-semibold flex items-center gap-2 shadow-sm transition-all"
                            >
                                <FileText className="w-4 h-4 text-[#70482B]" />
                                <span>Preview CV</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Metric Summary Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Projects Card */}
                    <div className="p-6 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#786C62] uppercase tracking-wider">Showcase Items</span>
                            <div className="w-10 h-10 rounded-2xl bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#70482B] group-hover:scale-110 transition-transform">
                                <FolderKanban className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-[#1F1915]">{projectCount}</div>
                            <p className="text-xs text-[#786C62] mt-1 font-mono">Published Repos & AI Systems</p>
                        </div>
                        <Link
                            href="/dashboard/projects"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#70482B] hover:text-[#593922] pt-2 group-hover:translate-x-1 transition-transform"
                        >
                            <span>Manage Showcase</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Messages Card */}
                    <div className="p-6 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#786C62] uppercase tracking-wider">Visitor Inbox</span>
                            <div className="w-10 h-10 rounded-2xl bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#70482B] group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-[#1F1915] flex items-center gap-2">
                                {messageCount}
                                {unreadCount > 0 && (
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-600 text-white font-mono font-bold shadow-sm">
                                        {unreadCount} new
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-[#786C62] mt-1 font-mono">Contact Form Submissions</p>
                        </div>
                        <Link
                            href="/dashboard/messages"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#70482B] hover:text-[#593922] pt-2 group-hover:translate-x-1 transition-transform"
                        >
                            <span>Open Inbox</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Database Engine Card */}
                    <div className="p-6 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#786C62] uppercase tracking-wider">Database Engine</span>
                            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                                <Database className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-[#1F1915]">SQLite 3</div>
                            <p className="text-xs text-emerald-700 mt-1 font-mono flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Zero-Config Embedded DB
                            </p>
                        </div>
                        <div className="text-[11px] font-mono text-[#786C62] pt-2 border-t border-[#E4DDD0]">
                            1-Click Deploy Ready
                        </div>
                    </div>

                    {/* System Tech Specs */}
                    <div className="p-6 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#786C62] uppercase tracking-wider">Tech Architecture</span>
                            <div className="w-10 h-10 rounded-2xl bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#70482B] group-hover:scale-110 transition-transform">
                                <Cpu className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-extrabold text-[#1F1915]">Laravel 11 + React</div>
                            <p className="text-xs text-[#786C62] mt-1 font-mono">Inertia.js 1.0 & Vite 5</p>
                        </div>
                        <div className="text-[11px] font-mono text-[#70482B] font-semibold pt-2 border-t border-[#E4DDD0] flex items-center justify-between">
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
                            <h2 className="text-xl font-bold text-[#1F1915] font-serif-editorial flex items-center gap-2">
                                <Mail className="w-5 h-5 text-[#70482B]" />
                                Recent Inquiries
                            </h2>
                            <Link
                                href="/dashboard/messages"
                                className="text-xs font-mono text-[#70482B] font-bold hover:underline flex items-center gap-1"
                            >
                                View All Inbox &rarr;
                            </Link>
                        </div>

                        <div className="space-y-3">
                            {recentMessages.length === 0 ? (
                                <div className="p-8 rounded-3xl bg-white border border-[#E4DDD0] text-center space-y-2">
                                    <MessageSquare className="w-8 h-8 text-[#A89C92] mx-auto" />
                                    <p className="text-xs font-mono text-[#786C62]">No contact form messages received yet.</p>
                                </div>
                            ) : (
                                recentMessages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`p-5 rounded-3xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                                            msg.is_read
                                                ? 'bg-white border-[#E4DDD0] text-[#594E45]'
                                                : 'bg-[#F2ECE1] border-[#70482B]/30 text-[#1F1915] shadow-sm'
                                        }`}
                                    >
                                        <div className="flex items-start gap-3.5 min-w-0">
                                            <div className="w-10 h-10 rounded-2xl bg-[#70482B] text-white flex items-center justify-center font-extrabold shrink-0 shadow-sm">
                                                {msg.name?.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div className="min-w-0 space-y-1">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="text-xs font-bold text-[#1F1915] truncate">{msg.name}</h3>
                                                    <span className="text-[11px] font-mono text-[#70482B]">&lt;{msg.email}&gt;</span>
                                                    {!msg.is_read && (
                                                        <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-mono font-bold shadow-sm">
                                                            NEW
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs font-semibold text-[#3D332B] truncate">{msg.subject}</p>
                                                <p className="text-xs text-[#786C62] line-clamp-1">{msg.message}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0 justify-end">
                                            <Link
                                                href="/dashboard/messages"
                                                className="px-3 py-1.5 rounded-xl bg-white border border-[#E4DDD0] hover:bg-[#F2ECE1] text-[#3D332B] text-xs font-mono transition-colors shadow-sm"
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
                        <div className="p-6 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm space-y-5">
                            <h2 className="text-lg font-bold text-[#1F1915] font-serif-editorial flex items-center gap-2">
                                <Shield className="w-5 h-5 text-[#70482B]" />
                                Quick Admin Shortcuts
                            </h2>

                            <div className="space-y-3">
                                <Link
                                    href="/dashboard/projects"
                                    className="p-4 rounded-2xl bg-[#FAF8F3] hover:bg-[#F2ECE1] border border-[#E4DDD0] flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <FolderKanban className="w-5 h-5 text-[#70482B] group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xs font-bold text-[#1F1915] group-hover:text-[#70482B]">
                                                Project Showcase
                                            </h3>
                                            <p className="text-[11px] text-[#786C62] font-mono">Create or edit portfolio items</p>
                                        </div>
                                    </div>
                                    <Plus className="w-4 h-4 text-[#786C62] group-hover:text-[#1F1915]" />
                                </Link>

                                <Link
                                    href="/dashboard/messages"
                                    className="p-4 rounded-2xl bg-[#FAF8F3] hover:bg-[#F2ECE1] border border-[#E4DDD0] flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-[#70482B] group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xs font-bold text-[#1F1915] group-hover:text-[#70482B]">
                                                Inquiries Inbox
                                            </h3>
                                            <p className="text-[11px] text-[#786C62] font-mono">Review recruiter submissions</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-[#786C62] group-hover:text-[#1F1915]" />
                                </Link>

                                <a
                                    href="https://github.com/xVLP"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-4 rounded-2xl bg-[#FAF8F3] hover:bg-[#F2ECE1] border border-[#E4DDD0] flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <ExternalLink className="w-5 h-5 text-[#70482B] group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xs font-bold text-[#1F1915] group-hover:text-[#70482B]">
                                                GitHub Organization
                                            </h3>
                                            <p className="text-[11px] text-[#786C62] font-mono">github.com/xVLP</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-[#786C62] group-hover:text-[#1F1915]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
