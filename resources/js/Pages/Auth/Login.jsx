import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { Shield, Lock, Mail, ArrowLeft, Terminal } from 'lucide-react';

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
        <div className="min-h-screen flex items-center justify-center bg-[#07090e] text-slate-100 p-4 relative overflow-hidden">
            <Head title="Admin Login - Alex Vance Portfolio" />

            {/* Glowing Accent Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

            <div className="relative w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/20 shadow-2xl space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 mx-auto shadow-lg shadow-cyan-500/30">
                        <div className="w-full h-full bg-[#07090e] rounded-[14px] flex items-center justify-center">
                            <Shield className="w-6 h-6 text-cyan-400" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">
                        Admin Portal Login
                    </h1>
                    <p className="text-slate-400 text-xs font-mono">
                        Sign in to manage projects & messages
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl glass-panel bg-slate-900/80 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                        {errors.email && (
                            <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2 flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-cyan-400" /> Password
                        </label>
                        <input
                            type="password"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl glass-panel bg-slate-900/80 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                        {errors.password && (
                            <span className="text-xs text-rose-400 mt-1 block">{errors.password}</span>
                        )}
                    </div>

                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 font-mono">
                        💡 Default Credentials: <br />
                        Email: <strong className="text-white">admin@portfolio.com</strong> <br />
                        Password: <strong className="text-white">password</strong>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:opacity-90 transition-all"
                    >
                        {processing ? 'Authenticating...' : 'Sign In to Dashboard'}
                    </button>
                </form>

                {/* Back to Public Portfolio */}
                <div className="pt-4 border-t border-white/10 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Public Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}
