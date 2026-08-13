import React from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Code2, Send } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-[#1C130E]/60 backdrop-blur-md transition-opacity animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#E6DFD3] z-10 my-8 animate-scaleUp bg-white">
                {/* Header Code Banner */}
                <div className="relative p-6 sm:p-8 bg-[#2C1E16] text-[#FAF8F5]">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Category Badge & Code Icon */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-sm">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/15 text-[#FAF8F5] border border-white/20">
                                <Sparkles className="w-3 h-3 text-[#D5C9B7]" />
                                {project.category}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-6 bg-white">
                    {/* Description */}
                    <div>
                        <h4 className="text-xs font-mono text-[#8C5228] uppercase tracking-wider mb-2 font-bold">
                            System Overview
                        </h4>
                        <p className="text-[#5C4D44] text-sm leading-relaxed sm:text-base">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                        <h4 className="text-xs font-mono text-[#8C5228] uppercase tracking-wider mb-2.5 flex items-center gap-2 font-bold">
                            <Layers className="w-3.5 h-3.5" /> Technologies & Architecture
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(project.tech_stack)
                                ? project.tech_stack.map((tech, idx) => (
                                      <span
                                          key={idx}
                                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#F4EFE6] text-[#4A3A2F] border border-[#E6DFD3]"
                                      >
                                          {tech}
                                      </span>
                                  ))
                                : typeof project.tech_stack === 'string'
                                ? JSON.parse(project.tech_stack || '[]').map((tech, idx) => (
                                      <span
                                          key={idx}
                                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#F4EFE6] text-[#4A3A2F] border border-[#E6DFD3]"
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
                            <h4 className="text-xs font-mono text-[#8C5228] uppercase tracking-wider mb-2.5 font-bold">
                                Highlights & Capabilities
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#5C4D44]">
                                {project.highlights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#8C5228] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Interactive System Flow Architecture Diagram */}
                    <div className="p-4 rounded-2xl border border-[#E6DFD3] bg-[#FAF8F5] space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs font-mono text-[#8C5228] uppercase tracking-wider flex items-center gap-2 font-bold">
                                <span className="w-2 h-2 rounded-full bg-[#8C5228] animate-ping" />
                                System Architecture Flow
                            </h4>
                            <span className="text-[10px] font-mono text-[#5C4D44]">Data Flow Pipeline</span>
                        </div>

                        {/* Node Flow Representation */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1 text-center">
                            <div className="p-2.5 rounded-xl bg-white border border-[#E6DFD3] text-xs">
                                <div className="text-[#8C5228] text-[10px] font-mono mb-0.5 font-bold">STEP 1</div>
                                <div className="font-bold text-[#1C130E]">User Interface</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#E6DFD3] text-xs">
                                <div className="text-[#8C5228] text-[10px] font-mono mb-0.5 font-bold">STEP 2</div>
                                <div className="font-bold text-[#1C130E]">API Gateway</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#E6DFD3] text-xs">
                                <div className="text-[#8C5228] text-[10px] font-mono mb-0.5 font-bold">STEP 3</div>
                                <div className="font-bold text-[#1C130E]">Processing Engine</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#E6DFD3] text-xs">
                                <div className="text-[#8C5228] text-[10px] font-mono mb-0.5 font-bold">STEP 4</div>
                                <div className="font-bold text-[#1C130E]">Database & Output</div>
                            </div>
                        </div>
                    </div>

                    {/* Links & CTA */}
                    <div className="pt-4 border-t border-[#E6DFD3] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#2C1E16] text-[#FAF8F5] hover:bg-[#8C5228] shadow-md transition-all"
                                >
                                    <Github className="w-4 h-4" /> View Repository
                                </a>
                            )}
                            <a
                                href="#contact"
                                onClick={onClose}
                                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-[#F4EFE6] text-[#8C5228] border border-[#E6DFD3] hover:bg-[#8C5228] hover:text-white transition-all"
                            >
                                <Send className="w-4 h-4" /> Consult on This System
                            </a>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-xs font-medium text-[#5C4D44] hover:text-[#1C130E] transition-colors"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

