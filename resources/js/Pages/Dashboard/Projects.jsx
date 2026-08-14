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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#E4DDD0] shadow-sm">
                    <div>
                        <h1 className="text-xl font-bold text-[#1F1915] font-serif-editorial tracking-tight flex items-center gap-2">
                            <FolderKanban className="w-6 h-6 text-[#70482B]" />
                            Project Showcase Manager
                        </h1>
                        <p className="text-xs font-mono text-[#786C62] mt-1">
                            Create, update, or reorganize portfolio showcases and AI repositories
                        </p>
                    </div>

                    <button
                        onClick={openCreateModal}
                        className="px-4 py-2.5 rounded-xl bg-[#70482B] hover:bg-[#593922] text-white font-semibold text-xs flex items-center gap-2 shadow-sm transition-all"
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
                                        ? 'bg-[#70482B] text-white font-bold shadow-sm'
                                        : 'bg-white text-[#594E45] hover:text-[#1F1915] border border-[#E4DDD0]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative min-w-[260px]">
                        <Search className="w-4 h-4 text-[#786C62] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Filter by title or tech..."
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#E4DDD0] text-[#1F1915] text-xs font-mono placeholder:text-[#9E9185] focus:outline-none focus:border-[#70482B] transition-colors shadow-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#786C62] hover:text-[#1F1915]"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="p-12 rounded-3xl bg-white border border-[#E4DDD0] text-center space-y-3 shadow-sm">
                        <FolderKanban className="w-10 h-10 text-[#A89C92] mx-auto" />
                        <h3 className="text-base font-bold text-[#1F1915]">No projects found</h3>
                        <p className="text-xs font-mono text-[#786C62]">
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
                                    className="p-6 rounded-3xl bg-white border border-[#E4DDD0] hover:border-[#70482B]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-md"
                                >
                                    <div className="space-y-3">
                                        {/* Header Badges */}
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="px-2.5 py-0.5 rounded-full bg-[#F4EFE6] text-[#70482B] border border-[#E6DFD3] text-[10px] font-mono font-bold">
                                                {project.category}
                                            </span>
                                            {project.featured && (
                                                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-mono font-bold flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Featured
                                                </span>
                                            )}
                                        </div>

                                        {/* Title & Description */}
                                        <div>
                                            <h3 className="text-base font-bold text-[#1F1915] font-serif-editorial group-hover:text-[#70482B] transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-[#6B5E54] mt-1 line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack Chips */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {techStackArray.slice(0, 4).map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-0.5 rounded-lg bg-[#FAF8F3] text-[#3D332B] border border-[#E4DDD0] text-[10px] font-mono"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {techStackArray.length > 4 && (
                                                <span className="px-2 py-0.5 rounded-lg bg-[#FAF8F3] text-[#786C62] text-[10px] font-mono">
                                                    +{techStackArray.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Toolbar */}
                                    <div className="flex items-center justify-between pt-4 border-t border-[#E4DDD0] text-xs font-mono">
                                        <div className="flex items-center gap-2">
                                            {project.github_url && (
                                                <a
                                                    href={project.github_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-2 rounded-xl bg-[#FAF8F3] hover:bg-[#F2ECE1] text-[#3D332B] border border-[#E4DDD0] transition-colors"
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
                                                    className="p-2 rounded-xl bg-[#FAF8F3] hover:bg-[#F2ECE1] text-[#3D332B] border border-[#E4DDD0] transition-colors"
                                                    title="Live Preview"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => openEditModal(project)}
                                                className="px-3 py-1.5 rounded-xl bg-[#FAF8F3] hover:bg-[#F2ECE1] border border-[#E4DDD0] text-[#3D332B] font-bold text-xs flex items-center gap-1 transition-colors"
                                            >
                                                <Edit3 className="w-3.5 h-3.5 text-[#70482B]" /> Edit
                                            </button>

                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 transition-colors"
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

                {/* Create/Edit Modal Dialog */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1915]/60 backdrop-blur-sm animate-fadeIn">
                        <div className="bg-white border border-[#E4DDD0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                            <div className="flex items-center justify-between border-b border-[#E4DDD0] pb-4">
                                <h2 className="text-xl font-bold text-[#1F1915] font-serif-editorial flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-[#70482B]" />
                                    {editingProject ? 'Edit Project Showcase' : 'Add New Portfolio Project'}
                                </h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 rounded-xl text-[#786C62] hover:text-[#1F1915] hover:bg-[#FAF8F3]"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-mono text-[#3D332B] mb-1 font-semibold">Project Title *</label>
                                        <input
                                            type="text"
                                            required
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="e.g. Banana Leaf Health AI Engine"
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-xs font-mono focus:border-[#70482B] focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#3D332B] mb-1 font-semibold">Category *</label>
                                        <select
                                            value={data.category}
                                            onChange={(e) => setData('category', e.target.value)}
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-xs font-mono focus:border-[#70482B] focus:outline-none"
                                        >
                                            {categories.filter(c => c !== 'All').map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#3D332B] mb-1 font-semibold">Tech Stack (comma separated) *</label>
                                        <input
                                            type="text"
                                            required
                                            value={data.tech_stack}
                                            onChange={(e) => setData('tech_stack', e.target.value)}
                                            placeholder="Python, OpenCV, PyTorch, React"
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-xs font-mono focus:border-[#70482B] focus:outline-none"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-mono text-[#3D332B] mb-1 font-semibold">Description *</label>
                                        <textarea
                                            rows={3}
                                            required
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            placeholder="Describe the system architecture, machine learning models, or application specs..."
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-xs font-mono focus:border-[#70482B] focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#3D332B] mb-1 font-semibold">GitHub Repository URL</label>
                                        <input
                                            type="url"
                                            value={data.github_url}
                                            onChange={(e) => setData('github_url', e.target.value)}
                                            placeholder="https://github.com/xVLP/repo"
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-xs font-mono focus:border-[#70482B] focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-[#3D332B] mb-1 font-semibold">Live Preview / Demo URL</label>
                                        <input
                                            type="url"
                                            value={data.live_url}
                                            onChange={(e) => setData('live_url', e.target.value)}
                                            placeholder="https://my-app.com"
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-xs font-mono focus:border-[#70482B] focus:outline-none"
                                        />
                                    </div>

                                    <div className="sm:col-span-2 flex items-center gap-2 pt-2">
                                        <input
                                            type="checkbox"
                                            id="featured"
                                            checked={data.featured}
                                            onChange={(e) => setData('featured', e.target.checked)}
                                            className="w-4 h-4 rounded text-[#70482B] focus:ring-[#70482B]"
                                        />
                                        <label htmlFor="featured" className="text-xs font-mono text-[#3D332B] cursor-pointer font-semibold">
                                            Highlight on Homepage Featured Showcase
                                        </label>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E4DDD0]">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 rounded-xl bg-[#FAF8F3] hover:bg-[#F2ECE1] border border-[#E4DDD0] text-[#3D332B] text-xs font-mono"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-5 py-2 rounded-xl bg-[#70482B] hover:bg-[#593922] text-white font-semibold text-xs shadow-sm transition-all"
                                    >
                                        {processing ? 'Saving...' : editingProject ? 'Save Changes' : 'Create Project'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
