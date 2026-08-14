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
    const [filterStatus, setFilterStatus] = useState('all');
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm">
                    <div>
                        <h1 className="text-xl font-bold text-[#1F1915] font-serif-editorial tracking-tight flex items-center gap-2">
                            <Mail className="w-6 h-6 text-[#70482B]" />
                            Visitor Inquiries Inbox
                        </h1>
                        <p className="text-xs font-mono text-[#786C62] mt-1">
                            Contact form submissions from recruiters, clients, and software engineering inquiries
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 bg-[#FAF8F3] p-1.5 rounded-2xl border border-[#E4DDD0]">
                        <button
                            onClick={() => setFilterStatus('all')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                                filterStatus === 'all'
                                    ? 'bg-[#70482B] text-white font-bold shadow-sm'
                                    : 'text-[#594E45] hover:text-[#1F1915]'
                            }`}
                        >
                            All ({messages.length})
                        </button>
                        <button
                            onClick={() => setFilterStatus('unread')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                                filterStatus === 'unread'
                                    ? 'bg-rose-600 text-white font-bold shadow-sm'
                                    : 'text-[#594E45] hover:text-[#1F1915]'
                            }`}
                        >
                            Unread ({messages.filter((m) => !m.is_read).length})
                        </button>
                        <button
                            onClick={() => setFilterStatus('read')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                                filterStatus === 'read'
                                    ? 'bg-white border border-[#E4DDD0] text-[#1F1915] font-bold shadow-sm'
                                    : 'text-[#594E45] hover:text-[#1F1915]'
                            }`}
                        >
                            Read ({messages.filter((m) => m.is_read).length})
                        </button>
                    </div>
                </div>

                {/* Split Pane Interface */}
                {filteredMessages.length === 0 ? (
                    <div className="p-12 rounded-3xl bg-white border border-[#E4DDD0] text-center space-y-3 shadow-sm">
                        <Inbox className="w-10 h-10 text-[#A89C92] mx-auto" />
                        <h3 className="text-base font-bold text-[#1F1915]">No messages found</h3>
                        <p className="text-xs font-mono text-[#786C62]">
                            Your contact inbox is currently empty under this filter.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Message List Sidebar */}
                        <div className="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-1">
                            {filteredMessages.map((msg) => (
                                <div
                                    key={msg.id}
                                    onClick={() => setSelectedMessageId(msg.id)}
                                    className={`p-4 rounded-3xl border cursor-pointer transition-all space-y-2 ${
                                        selectedMessageId === msg.id
                                            ? 'bg-[#F2ECE1] border-[#70482B] shadow-sm'
                                            : msg.is_read
                                            ? 'bg-white border-[#E4DDD0] hover:bg-[#FAF8F3]'
                                            : 'bg-white border-[#70482B]/40 hover:bg-[#F2ECE1]/50'
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <div className="w-7 h-7 rounded-xl bg-[#70482B] text-white flex items-center justify-center font-bold text-xs shrink-0">
                                                {msg.name?.substring(0, 1).toUpperCase()}
                                            </div>
                                            <h3 className="text-xs font-bold text-[#1F1915] truncate">{msg.name}</h3>
                                        </div>

                                        {!msg.is_read && (
                                            <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-mono font-bold shrink-0 shadow-sm">
                                                NEW
                                            </span>
                                        )}
                                    </div>

                                    <h4 className="text-xs font-semibold text-[#3D332B] truncate">{msg.subject}</h4>
                                    <p className="text-xs text-[#786C62] line-clamp-2">{msg.message}</p>

                                    <div className="text-[10px] font-mono text-[#786C62] pt-1 flex items-center justify-between border-t border-[#E4DDD0]">
                                        <span>{msg.email}</span>
                                        <span>{new Date(msg.created_at || Date.now()).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Selected Message Detail Reader */}
                        <div className="lg:col-span-7">
                            {activeMessage ? (
                                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4DDD0] space-y-6 shadow-sm">
                                    {/* Reader Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4DDD0]">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="px-2.5 py-0.5 rounded-full bg-[#F4EFE6] text-[#70482B] border border-[#E6DFD3] text-[10px] font-mono font-bold">
                                                    INQUIRY DETAILS
                                                </span>
                                                <span className="text-xs font-mono text-[#786C62]">
                                                    {new Date(activeMessage.created_at || Date.now()).toLocaleString()}
                                                </span>
                                            </div>
                                            <h2 className="text-xl font-bold text-[#1F1915] font-serif-editorial">
                                                {activeMessage.subject}
                                            </h2>
                                        </div>

                                        {/* Action Bar */}
                                        <div className="flex items-center gap-2 shrink-0">
                                            <button
                                                onClick={() => handleToggleRead(activeMessage.id)}
                                                className="px-3 py-1.5 rounded-xl bg-[#FAF8F3] hover:bg-[#F2ECE1] border border-[#E4DDD0] text-[#3D332B] text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
                                            >
                                                <CheckCircle2 className={`w-3.5 h-3.5 ${activeMessage.is_read ? 'text-emerald-600' : 'text-[#786C62]'}`} />
                                                <span>{activeMessage.is_read ? 'Mark Unread' : 'Mark Read'}</span>
                                            </button>

                                            <button
                                                onClick={() => handleDelete(activeMessage.id)}
                                                className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 transition-colors"
                                                title="Delete Message"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sender Meta Info */}
                                    <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E4DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                                        <div className="space-y-1">
                                            <div className="font-bold text-[#1F1915] flex items-center gap-2">
                                                <User className="w-3.5 h-3.5 text-[#70482B]" />
                                                <span>Sender: {activeMessage.name}</span>
                                            </div>
                                            <div className="text-[#70482B] font-semibold flex items-center gap-2">
                                                <Mail className="w-3.5 h-3.5 text-[#70482B]" />
                                                <a href={`mailto:${activeMessage.email}`} className="hover:underline">
                                                    {activeMessage.email}
                                                </a>
                                            </div>
                                        </div>

                                        <a
                                            href={`mailto:${activeMessage.email}?subject=RE: ${encodeURIComponent(activeMessage.subject)}`}
                                            className="px-4 py-2 rounded-xl bg-[#70482B] hover:bg-[#593922] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all self-start sm:self-auto"
                                        >
                                            <Send className="w-3.5 h-3.5" /> Reply via Mail
                                        </a>
                                    </div>

                                    {/* Message Body Content */}
                                    <div className="space-y-3 pt-2">
                                        <h3 className="text-xs font-mono uppercase tracking-wider text-[#786C62] font-bold">
                                            Message Content:
                                        </h3>
                                        <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-sm leading-relaxed whitespace-pre-wrap font-sans">
                                            {activeMessage.message}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-12 rounded-3xl bg-white border border-[#E4DDD0] text-center text-[#786C62] font-mono text-xs shadow-sm">
                                    Select a message from the list to view inquiry details.
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
