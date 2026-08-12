import React from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Calendar } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20 z-10 my-8 animate-scaleUp">
                {/* Header Image / Gradient Banner */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-950">
                    <img
                        src={project.image_url || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full glass-panel hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Badge & Category */}
                    <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-2">
                                <Sparkles className="w-3 h-3" />
                                {project.category}
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                {project.title}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-6">
                    {/* Description */}
                    <div>
                        <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                            Overview
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed sm:text-base">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                        <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5" /> Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(project.tech_stack)
                                ? project.tech_stack.map((tech, idx) => (
                                      <span
                                          key={idx}
                                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 text-slate-200 border border-white/10"
                                      >
                                          {tech}
                                      </span>
                                  ))
                                : typeof project.tech_stack === 'string'
                                ? JSON.parse(project.tech_stack || '[]').map((tech, idx) => (
                                      <span
                                          key={idx}
                                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 text-slate-200 border border-white/10"
                                      >
                                          {tech}
                                      </span>
                                  ))
                                : null}
                        </div>
                    </div>

                    {/* Key Highlights / Features */}
                    {project.highlights && (
                        <div>
                            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5">
                                Highlights & Impact
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                                {project.highlights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Links & CTA */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex gap-3">
                            {project.live_url && (
                                <a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 hover:opacity-90 shadow-lg shadow-cyan-500/20 transition-all"
                                >
                                    <ExternalLink className="w-4 h-4" /> Live Application
                                </a>
                            )}
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl glass-panel hover:bg-white/10 text-slate-200 transition-all border border-white/10"
                                >
                                    <Github className="w-4 h-4" /> Source Code
                                </a>
                            )}
                        </div>
                        <button
                            onClick={onClose}
                            className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                        >
                            Close Preview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
