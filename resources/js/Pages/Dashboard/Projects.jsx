import React, { useState, useMemo } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Plus,
    Trash2,
    Edit3,
    ExternalLink,
    Github,
    Sparkles,
    Search,
    X,
    FolderKanban,
    Tag,
    Star,
    Check,
    Layers
} from 'lucide-react';

export default function Projects({ projects = [] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const categories = ['All', 'Computer Vision', 'Mobile Engineering', 'Web Architecture', 'Software Architecture', 'Scientific Computing'];

    const { data, setData, post, put, delete: destroy, reset, processing, errors } = useForm({
        title: '',
        category: 'Web Architecture',
        description: '',
        tech_stack: '',
        live_url: '',
        github_url: '',
        image_url: '',
        featured: true,
    });

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (Array.isArray(project.tech_stack)
                    ? project.tech_stack.join(' ').toLowerCase().includes(searchQuery.toLowerCase())
                    : (project.tech_stack || '').toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory =
                selectedCategory === 'All' || project.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [projects, searchQuery, selectedCategory]);

    const openCreateModal = () => {
        reset();
        setEditingProject(null);
        setIsModalOpen(true);
    };

    const openEditModal = (project) => {
        setEditingProject(project);
        setData({
            title: project.title,
            category: project.category || 'Web Architecture',
            description: project.description || '',
            tech_stack: Array.isArray(project.tech_stack)
                ? project.tech_stack.join(', ')
                : project.tech_stack || '',
            live_url: project.live_url || '',
            github_url: project.github_url || '',
            image_url: project.image_url || '',
            featured: Boolean(project.featured),
        });
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProject) {
            put(`/dashboard/projects/${editingProject.id}`, {
                onSuccess: () => {
                    setIsModalOpen(false);
                    reset();
                    setEditingProject(null);
                }
            });
        } else {
            post('/dashboard/projects', {
                onSuccess: () => {
                    setIsModalOpen(false);
                    reset();
                }
            });
        }
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project from your portfolio?')) {
            destroy(`/dashboard/projects/${id}`);
        }
    };

    return (
        <AdminLayout title="Project Showcase Manager">
            <Head title="Manage Projects - Admin Control Center" />

            <div className="space-y-6 animate-fadeIn">
                {/* Header Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800">
                    <div>
                        <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                            <FolderKanban className="w-6 h-6 text-cyan-400" />
                            Project Showcase Manager
                        </h1>
                        <p className="text-xs font-mono text-slate-400 mt-1">
                            Create, update, or reorganize portfolio showcases and AI repositories
                        </p>
                    </div>

                    <button
                        onClick={openCreateModal}
                        className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add New Project</span>
                    </button>
                </div>

                {/* Filter & Search Toolbar */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    {/* Category Filter Badges */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-md shadow-cyan-500/10'
                                        : 'bg-slate-900/40 text-slate-400 hover:text-white border border-slate-800'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative min-w-[260px]">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Filter by title or tech..."
                            className="w-full pl-10 pr-4 py-2 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-100 text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="p-12 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
                        <FolderKanban className="w-10 h-10 text-slate-600 mx-auto" />
                        <h3 className="text-base font-bold text-white">No projects found</h3>
                        <p className="text-xs font-mono text-slate-400">
                            Try adjusting your category filter or search query.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => {
                            const techStackArray = Array.isArray(project.tech_stack)
                                ? project.tech_stack
                                : typeof project.tech_stack === 'string'
                                ? project.tech_stack.split(',').map((s) => s.trim())
                                : [];

                            return (
                                <div
                                    key={project.id}
                                    className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
                                >
                                    <div className="space-y-3">
                                        {/* Header Badges */}
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px] font-mono font-bold">
                                                {project.category}
                                            </span>
                                            {project.featured && (
                                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-mono font-bold flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Featured
                                                </span>
                                            )}
                                        </div>

                                        {/* Title & Description */}
                                        <div>
                                            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack Chips */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {techStackArray.slice(0, 4).map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-0.5 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/60 text-[10px] font-mono"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {techStackArray.length > 4 && (
                                                <span className="px-2 py-0.5 rounded-lg bg-slate-800/40 text-slate-400 text-[10px] font-mono">
                                                    +{techStackArray.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Toolbar */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs font-mono">
                                        <div className="flex items-center gap-2">
                                            {project.github_url && (
                                                <a
                                                    href={project.github_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                                    title="GitHub Repository"
                                                >
                                                    <Github className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                            {project.live_url && (
                                                <a
                                                    href={project.live_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 transition-colors"
                                                    title="Live Preview"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => openEditModal(project)}
                                                className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold transition-colors flex items-center gap-1"
                                            >
                                                <Edit3 className="w-3.5 h-3.5" /> Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="p-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-colors"
                                                title="Delete Project"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Create / Edit Project Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
                    <div className="w-full max-w-2xl bg-[#090d16] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-cyan-500/10 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-cyan-400" />
                                {editingProject ? 'Edit Portfolio Showcase' : 'Create Portfolio Showcase'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 rounded-xl text-slate-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                            <div className="space-y-1">
                                <label className="text-slate-300 font-bold">Project Title *</label>
                                <input
                                    type="text"
                                    required
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="e.g. Banana Leaf Health Assessment Engine"
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                                />
                                {errors.title && <p className="text-rose-400 text-[11px]">{errors.title}</p>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-slate-300 font-bold">Category *</label>
                                    <select
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
                                    >
                                        {categories.filter((c) => c !== 'All').map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-slate-300 font-bold">Tech Stack (comma-separated)</label>
                                    <input
                                        type="text"
                                        value={data.tech_stack}
                                        onChange={(e) => setData('tech_stack', e.target.value)}
                                        placeholder="e.g. Python, PyTorch, OpenCV"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-slate-300 font-bold">Description *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Detailed overview of architecture, features, and engineering achievements..."
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-sans"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-slate-300 font-bold">Live URL / Demo Link</label>
                                    <input
                                        type="url"
                                        value={data.live_url}
                                        onChange={(e) => setData('live_url', e.target.value)}
                                        placeholder="https://example.com"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-slate-300 font-bold">GitHub Repository URL</label>
                                    <input
                                        type="url"
                                        value={data.github_url}
                                        onChange={(e) => setData('github_url', e.target.value)}
                                        placeholder="https://github.com/xVLP/repo"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    checked={data.featured}
                                    onChange={(e) => setData('featured', e.target.checked)}
                                    className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-cyan-500 focus:ring-0"
                                />
                                <label htmlFor="featured" className="text-slate-200 cursor-pointer font-bold">
                                    Mark as Featured Showcase Project
                                </label>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/20"
                                >
                                    {processing ? 'Saving...' : editingProject ? 'Update Showcase' : 'Create Showcase'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
