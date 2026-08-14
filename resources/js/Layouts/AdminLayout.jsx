import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Shield,
    FolderKanban,
    Mail,
    LayoutDashboard,
    ExternalLink,
    LogOut,
    Menu,
    X,
    Database,
    Sparkles,
    ChevronRight,
    User,
    Activity
} from 'lucide-react';

export default function AdminLayout({ children, title = 'Control Center' }) {
    const { url, props } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const authUser = props?.auth?.user || { name: 'Veronica Louise Piando', email: 'admin@portfolio.com' };
    const unreadCount = props?.unreadCount || 0;

    const navItems = [
        {
            name: 'Dashboard Overview',
            href: '/dashboard',
            icon: LayoutDashboard,
            active: url === '/dashboard',
            badge: null
        },
        {
            name: 'Project Showcase',
            href: '/dashboard/projects',
            icon: FolderKanban,
            active: url.startsWith('/dashboard/projects'),
            badge: null
        },
        {
            name: 'Inquiries Inbox',
            href: '/dashboard/messages',
            icon: Mail,
            active: url.startsWith('/dashboard/messages'),
            badge: unreadCount > 0 ? unreadCount : null
        },
    ];

    return (
        <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col md:flex-row selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
            <Head title={`${title} - Admin Control Center`} />

            {/* Backdrop Blur Overlay for Mobile Drawer */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40 md:hidden animate-fadeIn"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Desktop & Mobile Sidebar */}
            <aside
                className={`fixed md:sticky top-0 left-0 h-screen w-72 bg-[#090d16]/90 backdrop-blur-xl border-r border-slate-800/60 z-50 flex flex-col justify-between p-5 transition-transform duration-300 ease-in-out ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                }`}
            >
                <div className="space-y-8">
                    {/* Brand Badge */}
                    <div className="flex items-center justify-between">
                        <Link href="/dashboard" className="flex items-center gap-3 group">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/10">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-base font-extrabold text-white tracking-tight flex items-center gap-1.5">
                                    xVLP CMS <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                                </h1>
                                <p className="text-[11px] font-mono text-slate-400">Control Center</p>
                            </div>
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 rounded-xl text-slate-400 hover:text-white md:hidden"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Database Health Pill */}
                    <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2 text-cyan-300">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <Database className="w-3.5 h-3.5 text-cyan-400" />
                            <span>SQLite Database</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                            Active
                        </span>
                    </div>

                    {/* Navigation Items */}
                    <nav className="space-y-1.5">
                        <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            Management Suite
                        </div>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-medium transition-all duration-200 ${
                                        item.active
                                            ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/10 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 font-bold'
                                            : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 border border-transparent'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className={`w-4 h-4 ${item.active ? 'text-cyan-400' : 'text-slate-400'}`} />
                                        <span>{item.name}</span>
                                    </div>
                                    {item.badge ? (
                                        <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white font-mono text-[10px] font-bold shadow-md shadow-rose-500/30">
                                            {item.badge}
                                        </span>
                                    ) : (
                                        item.active && <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Sidebar Footer - User & Public Site Links */}
                <div className="space-y-3 pt-6 border-t border-slate-800/60">
                    <Link
                        href="/"
                        target="_blank"
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-all group"
                    >
                        <span className="flex items-center gap-2">
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                            Live Portfolio
                        </span>
                        <span className="text-[10px] text-slate-400">xVLP &rarr;</span>
                    </Link>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/40 border border-slate-800/40">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-xs shadow-md">
                                {authUser.name ? authUser.name.charAt(0) : 'V'}
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-bold text-white truncate">{authUser.name}</p>
                                <p className="text-[10px] font-mono text-slate-400 truncate">{authUser.email}</p>
                            </div>
                        </div>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="p-2 rounded-xl text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-colors"
                            title="Sign Out"
                        >
                            <LogOut className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content Workspace */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top App Bar Header */}
                <header className="sticky top-0 z-30 bg-[#06080d]/80 backdrop-blur-xl border-b border-slate-800/60 px-4 sm:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 md:hidden"
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                        <div>
                            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                                {title}
                            </h2>
                            <p className="text-xs text-slate-400 font-mono hidden sm:block">
                                Veronica Louise Piando (xVLP) &bull; Full-Stack Portfolio CMS
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                            <Activity className="w-3.5 h-3.5 animate-pulse" />
                            <span>System Status: Healthy</span>
                        </div>

                        <Link
                            href="/"
                            target="_blank"
                            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition-all"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View Site</span>
                        </Link>
                    </div>
                </header>

                {/* Page Body */}
                <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
