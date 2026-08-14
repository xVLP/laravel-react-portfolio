import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { Shield, Lock, Mail, ArrowLeft, Sparkles } from 'lucide-react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: 'admin@portfolio.com',
        password: 'password',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8F6F0] text-[#1F1915] p-4 relative overflow-hidden font-sans selection:bg-[#70482B] selection:text-white">
            <Head title="Admin Login - Veronica Louise Piando Portfolio" />

            {/* Subtle Soft Background Accents */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#EFECE6] blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#F4EFE6] blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-[#E4DDD0] shadow-xl space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#70482B] p-0.5 mx-auto shadow-md shadow-[#70482B]/20 flex items-center justify-center text-white">
                        <Shield className="w-7 h-7" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#1F1915] font-serif-editorial">
                        Admin Portal Login
                    </h1>
                    <p className="text-[#786C62] text-xs font-mono">
                        Sign in to manage projects & visitor inquiries
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-mono text-[#3D332B] mb-2 flex items-center gap-1.5 font-semibold">
                            <Mail className="w-3.5 h-3.5 text-[#70482B]" /> Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-sm focus:border-[#70482B] focus:outline-none transition-colors"
                        />
                        {errors.email && (
                            <span className="text-xs text-rose-600 mt-1 block">{errors.email}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-[#3D332B] mb-2 flex items-center gap-1.5 font-semibold">
                            <Lock className="w-3.5 h-3.5 text-[#70482B]" /> Password
                        </label>
                        <input
                            type="password"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#E4DDD0] text-[#1F1915] text-sm focus:border-[#70482B] focus:outline-none transition-colors"
                        />
                        {errors.password && (
                            <span className="text-xs text-rose-600 mt-1 block">{errors.password}</span>
                        )}
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#E6DFD3] text-xs text-[#70482B] font-mono leading-relaxed">
                        💡 Default Credentials: <br />
                        Email: <strong className="text-[#1F1915]">admin@portfolio.com</strong> <br />
                        Password: <strong className="text-[#1F1915]">password</strong>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-3.5 rounded-xl bg-[#70482B] hover:bg-[#593922] text-white font-semibold text-sm shadow-md shadow-[#70482B]/20 hover:opacity-95 transition-all"
                    >
                        {processing ? 'Authenticating...' : 'Sign In to Control Center'}
                    </button>
                </form>

                {/* Back to Public Portfolio */}
                <div className="pt-4 border-t border-[#E4DDD0] text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#786C62] hover:text-[#70482B] transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Public Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}
