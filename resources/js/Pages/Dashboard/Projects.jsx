import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Shield, Plus, Trash2, Edit3, ArrowLeft, ExternalLink, Github, Sparkles, Check } from 'lucide-react';

export default function Projects({ projects = [] }) {
    const [isCreating, setIsCreating] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const { data, setData, post, put, delete: destroy, reset, processing, errors } = useForm({
        title: '',
        category: 'Web Apps',
        description: '',
        tech_stack: 'Laravel, React, Tailwind CSS',
        live_url: '',
        github_url: '',
        image_url: '',
    });

    const handleCreate = (e) => {
        e.preventDefault();
        post('/dashboard/projects', {
            onSuccess: () => {
                reset();
                setIsCreating(false);
            }
        });
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setData({
            title: project.title,
            category: project.category,
            description: project.description,
            tech_stack: Array.isArray(project.tech_stack)
                ? project.tech_stack.join(', ')
                : project.tech_stack,
            live_url: project.live_url || '',
            github_url: project.github_url || '',
            image_url: project.image_url || '',
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        put(`/dashboard/projects/${editingProject.id}`, {
            onSuccess: () => {
                setEditingProject(null);
                reset();
            }
        });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            destroy(`/dashboard/projects/${id}`);
        }
    };

    return (
        <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-8">
            <Head title="Manage Projects - Admin Dashboard" />

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
                                Project Showcase Manager
                            </h1>
                            <p className="text-xs font-mono text-slate-400">
                                Create, update, or remove portfolio items
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            reset();
                            setEditingProject(null);
                            setIsCreating(!isCreating);
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        {isCreating ? 'Cancel' : 'Add New Project'}
                    </button>
                </div>

                {/* Create / Edit Form Modal/Box */}
                {(isCreating || editingProject) && (
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 space-y-6 animate-scaleUp">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-cyan-400" />
                            {editingProject ? 'Edit Project' : 'Create New Project'}
                        </h2>

                        <form onSubmit={editingProject ? handleUpdate : handleCreate} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">Project Title</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        placeholder="AI Code Architect"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">Category</label>
                                    <select
                                        value={data.category}
                                        onChange={e => setData('category', e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                                    >
                                        <option value="Web Apps">Web Apps</option>
                                        <option value="AI/ML">AI/ML</option>
                                        <option value="Cloud/DevOps">Cloud/DevOps</option>
                                        <option value="Mobile">Mobile</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-300 mb-1">Description</label>
                                <textarea
                                    rows={3}
                                    required
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    placeholder="High performance AI coding assistant..."
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">Tech Stack (comma separated)</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.tech_stack}
                                        onChange={e => setData('tech_stack', e.target.value)}
                                        placeholder="Laravel, React, Inertia, Tailwind"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">Live URL</label>
                                    <input
                                        type="url"
                                        value={data.live_url}
                                        onChange={e => setData('live_url', e.target.value)}
                                        placeholder="https://example.com"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1">GitHub URL</label>
                                    <input
                                        type="url"
                                        value={data.github_url}
                                        onChange={e => setData('github_url', e.target.value)}
                                        placeholder="https://github.com/user/repo"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:opacity-90"
                                >
                                    {editingProject ? 'Save Changes' : 'Publish Project'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsCreating(false);
                                        setEditingProject(null);
                                    }}
                                    className="px-6 py-2.5 rounded-xl glass-panel text-slate-300 text-xs font-mono"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Projects List Table */}
                <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-white/5 font-mono text-slate-400 uppercase border-b border-white/10">
                            <tr>
                                <th className="p-4">Project</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Tech Stack</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-white/5">
                                    <td className="p-4 font-bold text-white">
                                        {project.title}
                                    </td>
                                    <td className="p-4">
                                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                                            {project.category}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-300 font-mono">
                                        {Array.isArray(project.tech_stack)
                                            ? project.tech_stack.join(', ')
                                            : project.tech_stack}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleEdit(project)}
                                                className="p-2 rounded-lg glass-panel hover:text-cyan-400 text-slate-300"
                                                title="Edit"
                                            >
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
