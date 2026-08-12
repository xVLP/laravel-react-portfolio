<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\ContactMessage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Default Admin Account
        User::updateOrCreate(
            ['email' => 'admin@portfolio.com'],
            [
                'name' => 'Alex Vance Admin',
                'password' => Hash::make('password'),
            ]
        );

        // Seed Sample Projects
        $projects = [
            [
                'title' => 'NexusAI - Autonomous Enterprise Agent Platform',
                'slug' => 'nexus-ai',
                'category' => 'AI/ML',
                'description' => 'Multi-agent orchestration engine powered by LLMs, Vector Search (Qdrant), and Laravel real-time WebSockets queue processing.',
                'tech_stack' => ['Laravel 11', 'React', 'Inertia.js', 'Python', 'Qdrant', 'Tailwind CSS'],
                'highlights' => [
                    'Built asynchronous Python microservices integration via Laravel HTTP clients',
                    'Implemented streaming SSE text completions for low latency user feedback',
                    'Handled 50,000+ daily agent workflow invocations'
                ],
                'image_url' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
                'live_url' => 'https://nexusai.demo.dev',
                'github_url' => 'https://github.com/alexvance/nexus-ai',
                'featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Horizon Cloud Orchestrator',
                'slug' => 'horizon-cloud',
                'category' => 'Cloud/DevOps',
                'description' => 'A unified Kubernetes & Docker container management dashboard for automated CI/CD deployments and resource monitoring.',
                'tech_stack' => ['React', 'Laravel', 'Docker', 'Kubernetes', 'Prometheus', 'Tailwind CSS'],
                'highlights' => [
                    'Reduced pipeline deployment times by 40% using parallelized runner nodes',
                    'Integrated Grafana metrics dashboard with real-time websocket updates',
                ],
                'image_url' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
                'live_url' => 'https://horizoncloud.demo.dev',
                'github_url' => 'https://github.com/alexvance/horizon-cloud',
                'featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Vortex Analytics - Realtime Data Pipeline',
                'slug' => 'vortex-analytics',
                'category' => 'Web Apps',
                'description' => 'High-throughput clickstream data analytics platform serving 1M+ monthly active users with sub-millisecond query aggregation.',
                'tech_stack' => ['Laravel 11', 'React', 'ClickHouse', 'Redis', 'Tailwind CSS'],
                'highlights' => [
                    'Built scalable Redis stream ingestion with ClickHouse column database backend',
                    'Zero-latency dashboard updates using custom React state management'
                ],
                'image_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
                'live_url' => 'https://vortex.demo.dev',
                'github_url' => 'https://github.com/alexvance/vortex-analytics',
                'featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Pulse Health Mobile Suite',
                'slug' => 'pulse-health',
                'category' => 'Mobile',
                'description' => 'Cross-platform biometrics monitoring mobile web app with offline-first synchronization and biometric security.',
                'tech_stack' => ['React', 'PWA', 'Tailwind CSS', 'Laravel API', 'SQLite'],
                'highlights' => [
                    'IndexedDB offline persistence synced seamlessly to Laravel backend when reconnected',
                    'HIPAA compliant encrypted data transmission'
                ],
                'image_url' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
                'live_url' => 'https://pulsehealth.demo.dev',
                'github_url' => 'https://github.com/alexvance/pulse-health',
                'featured' => true,
                'order' => 4,
            ]
        ];

        foreach ($projects as $p) {
            Project::updateOrCreate(['slug' => $p['slug']], $p);
        }

        // Seed Skills
        $skills = [
            ['name' => 'React & Next.js', 'category' => 'Frontend', 'proficiency' => 96],
            ['name' => 'Laravel 11 / Inertia.js', 'category' => 'Backend', 'proficiency' => 98],
            ['name' => 'JavaScript (ES6+) & TypeScript', 'category' => 'Frontend', 'proficiency' => 95],
            ['name' => 'Tailwind CSS & Glassmorphism UI', 'category' => 'Frontend', 'proficiency' => 98],
            ['name' => 'REST APIs & GraphQL', 'category' => 'Backend', 'proficiency' => 94],
            ['name' => 'MySQL / PostgreSQL / SQLite', 'category' => 'Backend', 'proficiency' => 92],
            ['name' => 'LLM Engineering & LangChain', 'category' => 'AI/ML', 'proficiency' => 88],
            ['name' => 'Python / PyTorch Basics', 'category' => 'AI/ML', 'proficiency' => 84],
            ['name' => 'Docker & Kubernetes', 'category' => 'DevOps', 'proficiency' => 90],
            ['name' => 'CI/CD & GitHub Actions', 'category' => 'DevOps', 'proficiency' => 92],
        ];

        foreach ($skills as $s) {
            Skill::updateOrCreate(['name' => $s['name']], $s);
        }

        // Seed Experiences
        $experiences = [
            [
                'role' => 'Principal Software Architect',
                'company' => 'AetherTech Labs',
                'period' => '2023 - Present',
                'description' => 'Lead architect driving cloud infrastructure, microservices migration, and AI agent integration for enterprise SaaS platforms.',
                'achievements' => [
                    'Architected multi-tenant Laravel + React SaaS handling 2M+ requests/day',
                    'Spearheaded transition to Docker & Kubernetes, saving 35% monthly infrastructure costs',
                    'Mentored team of 12 full-stack engineers across 3 time zones'
                ],
                'order' => 1,
            ],
            [
                'role' => 'Senior Full Stack Engineer',
                'company' => 'Vortex Digital Solutions',
                'period' => '2020 - 2023',
                'description' => 'Built high-throughput web apps, real-time analytics engines, and customer dashboards using Laravel, Vue/React, and Redis.',
                'achievements' => [
                    'Spearheaded Inertia.js adoption, accelerating feature delivery by 50%',
                    'Designed automated test suites achieving 94% code coverage'
                ],
                'order' => 2,
            ],
            [
                'role' => 'Full Stack Developer',
                'company' => 'Apex Systems Inc.',
                'period' => '2018 - 2020',
                'description' => 'Developed custom web applications, e-commerce integrations, and database schemas for enterprise clients.',
                'achievements' => [
                    'Built custom payment processing gateway integrated with Stripe & PayPal',
                    'Optimized MySQL query bottlenecks improving response times by 3x'
                ],
                'order' => 3,
            ]
        ];

        foreach ($experiences as $e) {
            Experience::updateOrCreate(['role' => $e['role'], 'company' => $e['company']], $e);
        }

        // Seed Sample Contact Message
        ContactMessage::updateOrCreate(
            ['email' => 'recruiter@techinnovators.io'],
            [
                'name' => 'Elena Rostova',
                'email' => 'recruiter@techinnovators.io',
                'subject' => 'Senior AI & Full Stack Architect Role',
                'message' => 'Hi Alex, we loved your portfolio projects! We have a staff architect opportunity leading our new AI platform team. Would love to schedule a call this week.',
                'is_read' => false,
            ]
        );
    }
}
