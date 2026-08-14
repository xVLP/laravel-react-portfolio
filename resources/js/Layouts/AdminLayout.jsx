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
        <div className="min-h-screen bg-[#F8F6F0] text-[#1F1915] flex flex-col md:flex-row selection:bg-[#70482B] selection:text-white font-sans antialiased">
            <Head title={`${title} - Admin Control Center`} />

            {/* Mobile Drawer Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-[#1F1915]/60 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Desktop & Mobile Sidebar */}
            <aside
                className={`fixed md:sticky top-0 left-0 h-screen w-72 bg-[#FAF8F3] backdrop-blur-xl border-r border-[#E4DDD0] z-50 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                }`}
            >
                <div className="space-y-8">
                    {/* Brand Badge */}
                    <div className="flex items-center justify-between">
                        <Link href="/dashboard" className="flex items-center gap-3 group">
                            <div className="w-11 h-11 rounded-2xl bg-[#70482B] text-white flex items-center justify-center shadow-md shadow-[#70482B]/20 group-hover:scale-105 transition-all duration-300">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <h1 className="text-base font-extrabold text-[#1F1915] tracking-tight flex items-center gap-1.5 font-serif-editorial">
                                    xVLP CMS <Sparkles className="w-3.5 h-3.5 text-[#8C5734] animate-pulse" />
                                </h1>
                                <p className="text-[11px] font-mono text-[#786C62]">Control Center</p>
                            </div>
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 rounded-xl text-[#786C62] hover:text-[#1F1915] md:hidden"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Database Health Pill */}
                    <div className="p-3 rounded-2xl bg-[#F2ECE1] border border-[#E4DDD0] flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2 text-[#3D332B]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                            </span>
                            <Database className="w-3.5 h-3.5 text-[#70482B]" />
                            <span>SQLite Database</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#70482B] text-white font-bold">
                            Active
                        </span>
                    </div>

                    {/* Navigation Items */}
                    <nav className="space-y-1.5">
                        <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-wider text-[#786C62]">
                            Management Suite
                        </div>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-medium transition-all duration-200 ${
                                        item.active
                                            ? 'bg-[#70482B] text-white shadow-md shadow-[#70482B]/20 font-bold'
                                            : 'text-[#594E45] hover:text-[#1F1915] hover:bg-[#F2ECE1] border border-transparent'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className={`w-4 h-4 ${item.active ? 'text-white' : 'text-[#786C62]'}`} />
                                        <span>{item.name}</span>
                                    </div>
                                    {item.badge ? (
                                        <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white font-mono text-[10px] font-bold shadow-sm">
                                            {item.badge}
                                        </span>
                                    ) : (
                                        item.active && <ChevronRight className="w-3.5 h-3.5 text-white/80" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Sidebar Footer */}
                <div className="space-y-3 pt-6 border-t border-[#E4DDD0]">
                    <Link
                        href="/"
                        target="_blank"
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white hover:bg-[#F2ECE1] border border-[#E4DDD0] text-xs font-mono text-[#3D332B] transition-all group"
                    >
                        <span className="flex items-center gap-2">
                            <ExternalLink className="w-3.5 h-3.5 text-[#70482B] group-hover:scale-110 transition-transform" />
                            Live Portfolio
                        </span>
                        <span className="text-[10px] text-[#786C62]">xVLP &rarr;</span>
                    </Link>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E4DDD0] shadow-sm">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-8 h-8 rounded-xl bg-[#70482B] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                                {authUser.name ? authUser.name.charAt(0) : 'V'}
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-bold text-[#1F1915] truncate">{authUser.name}</p>
                                <p className="text-[10px] font-mono text-[#786C62] truncate">{authUser.email}</p>
                            </div>
                        </div>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="p-2 rounded-xl text-rose-700 hover:bg-rose-50 transition-colors"
                            title="Sign Out"
                        >
                            <LogOut className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Workspace */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header App Bar */}
                <header className="sticky top-0 z-30 bg-[#F8F6F0]/90 backdrop-blur-xl border-b border-[#E4DDD0] px-4 sm:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="p-2 rounded-xl bg-white border border-[#E4DDD0] text-[#3D332B] md:hidden"
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                        <div>
                            <h2 className="text-xl font-bold text-[#1F1915] tracking-tight font-serif-editorial flex items-center gap-2">
                                {title}
                            </h2>
                            <p className="text-xs text-[#786C62] font-mono hidden sm:block">
                                Veronica Louise Piando (xVLP) &bull; CMS Control Center
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
                            <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                            <span>System Status: Healthy</span>
                        </div>

                        <Link
                            href="/"
                            target="_blank"
                            className="px-4 py-2 rounded-xl bg-[#70482B] hover:bg-[#593922] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View Site</span>
                        </Link>
                    </div>
                </header>

                {/* Body Content */}
                <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
