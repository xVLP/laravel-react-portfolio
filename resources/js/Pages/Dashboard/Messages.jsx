import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Mail,
    Trash2,
    CheckCircle2,
    Calendar,
    User,
    MessageSquare,
    ExternalLink,
    Send,
    Inbox,
    Clock,
    Search,
    X,
    Filter
} from 'lucide-react';

export default function Messages({ messages = [] }) {
    const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'unread', 'read'
    const [selectedMessageId, setSelectedMessageId] = useState(messages[0]?.id || null);

    const filteredMessages = messages.filter((msg) => {
        if (filterStatus === 'unread') return !msg.is_read;
        if (filterStatus === 'read') return msg.is_read;
        return true;
    });

    const activeMessage = messages.find((m) => m.id === selectedMessageId) || filteredMessages[0] || null;

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this inquiry message?')) {
            router.delete(`/dashboard/messages/${id}`, {
                onSuccess: () => {
                    if (selectedMessageId === id) {
                        setSelectedMessageId(null);
                    }
                }
            });
        }
    };

    const handleToggleRead = (id) => {
        router.patch(`/dashboard/messages/${id}/toggle-read`);
    };

    return (
        <AdminLayout title="Visitor Contact Inbox">
            <Head title="Contact Inbox - Admin Control Center" />

            <div className="space-y-6 animate-fadeIn">
                {/* Header & Filter Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800">
                    <div>
                        <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                            <Mail className="w-6 h-6 text-indigo-400" />
                            Visitor Inquiries Inbox
                        </h1>
                        <p className="text-xs font-mono text-slate-400 mt-1">
                            Contact form submissions from recruiters, clients, and software engineering inquiries
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-slate-800">
                        <button
                            onClick={() => setFilterStatus('all')}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                                filterStatus === 'all'
                                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            All ({messages.length})
                        </button>
                        <button
                            onClick={() => setFilterStatus('unread')}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                                filterStatus === 'unread'
                                    ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Unread ({messages.filter((m) => !m.is_read).length})
                        </button>
                        <button
                            onClick={() => setFilterStatus('read')}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                                filterStatus === 'read'
                                    ? 'bg-slate-800 text-slate-200 font-bold'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Read ({messages.filter((m) => m.is_read).length})
                        </button>
                    </div>
                </div>

                {/* Split Pane Interface */}
                {filteredMessages.length === 0 ? (
                    <div className="p-16 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
                        <Inbox className="w-12 h-12 text-slate-600 mx-auto" />
                        <h3 className="text-base font-bold text-white">No inquiries found</h3>
                        <p className="text-xs font-mono text-slate-400">
                            Submissions from your portfolio contact form will appear here.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Left List Column (5 cols) */}
                        <div className="lg:col-span-5 space-y-3 max-h-[680px] overflow-y-auto pr-1">
                            {filteredMessages.map((msg) => {
                                const isSelected = activeMessage?.id === msg.id;
                                return (
                                    <div
                                        key={msg.id}
                                        onClick={() => setSelectedMessageId(msg.id)}
                                        className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 space-y-2 ${
                                            isSelected
                                                ? 'bg-gradient-to-r from-indigo-950/40 to-slate-900 border-cyan-500/40 shadow-lg shadow-cyan-500/5'
                                                : msg.is_read
                                                ? 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                                                : 'bg-indigo-950/20 border-indigo-500/30 text-white hover:border-indigo-500/50'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <div className="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-300 text-xs shrink-0">
                                                    {msg.name?.substring(0, 2).toUpperCase()}
                                                </div>
                                                <h4 className="text-xs font-bold text-white truncate">{msg.name}</h4>
                                            </div>

                                            <div className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono text-slate-400">
                                                <span>{new Date(msg.created_at).toLocaleDateString()}</span>
                                                {!msg.is_read && (
                                                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-xs font-semibold text-slate-200 truncate">{msg.subject}</p>
                                        <p className="text-xs text-slate-400 line-clamp-1">{msg.message}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Detail Column (7 cols) */}
                        <div className="lg:col-span-7">
                            {activeMessage ? (
                                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-6 shadow-2xl">
                                    {/* Message Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-extrabold text-slate-950 text-base shadow-lg shadow-cyan-500/20">
                                                {activeMessage.name?.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <h3 className="text-base font-bold text-white flex items-center gap-2">
                                                    {activeMessage.name}
                                                </h3>
                                                <a
                                                    href={`mailto:${activeMessage.email}`}
                                                    className="text-xs font-mono text-cyan-400 hover:underline block"
                                                >
                                                    {activeMessage.email}
                                                </a>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2 text-xs font-mono">
                                            <button
                                                onClick={() => handleToggleRead(activeMessage.id)}
                                                className={`px-3 py-1.5 rounded-xl border transition-colors ${
                                                    activeMessage.is_read
                                                        ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                                                        : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                                                }`}
                                            >
                                                {activeMessage.is_read ? 'Mark Unread' : 'Mark Read'}
                                            </button>

                                            <button
                                                onClick={() => handleDelete(activeMessage.id)}
                                                className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-colors"
                                                title="Delete Message"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Meta & Subject */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                                            <span>Received: {new Date(activeMessage.created_at).toLocaleString()}</span>
                                        </div>
                                        <h2 className="text-lg font-bold text-white">
                                            Subject: {activeMessage.subject}
                                        </h2>
                                    </div>

                                    {/* Message Content Body */}
                                    <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                                        {activeMessage.message}
                                    </div>

                                    {/* Reply Button Footer */}
                                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                                        <a
                                            href={`mailto:${activeMessage.email}?subject=Re: ${encodeURIComponent(activeMessage.subject)}`}
                                            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                                        >
                                            <Send className="w-4 h-4" />
                                            <span>Reply via Email</span>
                                        </a>

                                        <span className="text-[11px] font-mono text-slate-500">
                                            Inquiry ID #{activeMessage.id}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-12 rounded-3xl bg-slate-900/40 border border-slate-800 text-center text-slate-400 text-xs font-mono">
                                    Select an inquiry message from the list to view.
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
