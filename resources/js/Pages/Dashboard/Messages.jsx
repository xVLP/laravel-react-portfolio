import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Mail, ArrowLeft, Trash2, CheckCircle2, Calendar, User, MessageSquare } from 'lucide-react';

export default function Messages({ messages = [] }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(`/dashboard/messages/${id}`);
        }
    };

    const handleToggleRead = (id) => {
        router.patch(`/dashboard/messages/${id}/toggle-read`);
    };

    return (
        <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-8">
            <Head title="Contact Inbox - Admin Dashboard" />

            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between glass-panel p-6 rounded-3xl border border-cyan-500/20">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard"
                            className="p-2 rounded-xl glass-panel hover:bg-white/5 text-slate-300 hover:text-white"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-tight">
                                Visitor Contact Inbox
                            </h1>
                            <p className="text-xs font-mono text-slate-400">
                                Inquiries submitted via portfolio contact form
                            </p>
                        </div>
                    </div>
                </div>

                {/* Messages List */}
                <div className="space-y-4">
                    {messages.length === 0 ? (
                        <div className="glass-panel p-12 text-center rounded-3xl border border-white/10 space-y-2">
                            <Mail className="w-10 h-10 text-slate-500 mx-auto" />
                            <h3 className="text-lg font-bold text-white">No messages yet</h3>
                            <p className="text-slate-400 text-xs font-mono">
                                Submissions from your portfolio contact form will appear here.
                            </p>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`glass-panel p-6 rounded-3xl border transition-all space-y-4 ${
                                    msg.is_read
                                        ? 'border-white/5 bg-slate-900/30'
                                        : 'border-cyan-500/30 bg-slate-900/70 shadow-lg shadow-cyan-500/5'
                                }`}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 uppercase">
                                            {msg.name?.substring(0, 2)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white flex items-center gap-2">
                                                {msg.name}
                                                <a href={`mailto:${msg.email}`} className="text-xs font-mono text-cyan-400 hover:underline">
                                                    &lt;{msg.email}&gt;
                                                </a>
                                            </h3>
                                            <span className="text-xs font-semibold text-slate-300">
                                                Subject: {msg.subject}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                                        <span>{new Date(msg.created_at).toLocaleDateString()}</span>
                                        <button
                                            onClick={() => handleToggleRead(msg.id)}
                                            className={`px-3 py-1 rounded-full border text-[11px] ${
                                                msg.is_read
                                                    ? 'bg-white/5 text-slate-400 border-white/10'
                                                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-bold'
                                            }`}
                                        >
                                            {msg.is_read ? 'Mark Unread' : 'Mark Read'}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(msg.id)}
                                            className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                                            title="Delete Message"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="text-sm text-slate-300 leading-relaxed font-sans pl-2">
                                    {msg.message}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
