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
        // Veronica Louise Piando Admin Accounts
        User::updateOrCreate(
            ['email' => 'veronicapiando.official@gmail.com'],
            [
                'name' => 'Veronica Louise Piando',
                'password' => Hash::make('password'),
            ]
        );

        User::updateOrCreate(
            ['email' => 'admin@portfolio.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('password'),
            ]
        );

        // Seed Authentic xVLP Repositories & Enterprise Systems
        $projects = [
            [
                'title' => 'Banana Leaf Health Assessment Engine',
                'slug' => 'bananaleaf-health-ai-assessment',
                'category' => 'Computer Vision',
                'description' => 'Computer vision diagnostic platform engineered for real-time visual pathology analysis, automated leaf disease classification, and foliage health scoring.',
                'tech_stack' => ['Python', 'OpenCV', 'PyTorch', 'Computer Vision', 'Tailwind CSS', 'JavaScript'],
                'highlights' => [
                    'Developed deep learning visual models for multi-class pathology detection',
                    'Architected interactive web portal for automated diagnostic evaluation',
                    'Optimized image preprocessing pipeline for high-accuracy model inference'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/bananaleaf_health_ai_assessment',
                'github_url' => 'https://github.com/xVLP/bananaleaf_health_ai_assessment',
                'featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Pili Variety Species Classifier',
                'slug' => 'pili-variety-classification',
                'category' => 'Mobile Engineering',
                'description' => 'Cross-platform mobile vision application leveraging embedded neural network models for on-device plant species identification and visual classification.',
                'tech_stack' => ['Dart', 'Flutter', 'TensorFlow Lite', 'Mobile Vision', 'Mobile UI'],
                'highlights' => [
                    'Constructed offline-capable mobile classifier running lightweight neural net weights',
                    'Engineered intuitive mobile interface for real-time camera inference',
                    'Achieved over 92% classification accuracy across validation datasets'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/Pili-Variety-Classification',
                'github_url' => 'https://github.com/xVLP/Pili-Variety-Classification',
                'featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Biometric Facial Verification System',
                'slug' => 'face-attendance-app',
                'category' => 'Mobile Engineering',
                'description' => 'Biometric attendance management application utilizing facial feature vector extraction, deep feature embeddings, and low-latency identity matching.',
                'tech_stack' => ['Dart', 'Flutter', 'Biometrics AI', 'Camera API', 'REST API'],
                'highlights' => [
                    'Implemented facial feature vector extraction with low-latency verification',
                    'Integrated secure cloud attendance logging with offline transaction queuing',
                    'Deployed for automated biometric verification and identity management'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/face_attendance_app',
                'github_url' => 'https://github.com/xVLP/face_attendance_app',
                'featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Text-to-Speech Processing Engine',
                'slug' => 'text-to-speech-engine',
                'category' => 'Software Architecture',
                'description' => 'Speech synthesis system and natural language parsing engine built for phonetic translation, voice generation, and software accessibility.',
                'tech_stack' => ['Python', 'NLP', 'Speech Synthesis', 'Audio APIs', 'Software Architecture'],
                'highlights' => [
                    'Engineered modular audio synthesizer converting plain text into natural voice output',
                    'Designed robust REST interface for external software system integration',
                    'Applied advanced text normalization and phonetic translation pipelines'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/Text-to-Speech-Software-Engineering-1',
                'github_url' => 'https://github.com/xVLP/Text-to-Speech-Software-Engineering-1',
                'featured' => true,
                'order' => 4,
            ],
            [
                'title' => 'BU Institutional Design System',
                'slug' => 'bu-design-system',
                'category' => 'Web Architecture',
                'description' => 'Standardized institutional UI/UX design framework and PHP component library developed for responsive web portals and frontend systems.',
                'tech_stack' => ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'UI Design System'],
                'highlights' => [
                    'Created unified responsive component framework ensuring brand consistency',
                    'Accelerated software development lifecycles across institutional web projects',
                    'Built accessibility-compliant components meeting WCAG international standards'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/BU-Design-System',
                'github_url' => 'https://github.com/xVLP/BU-Design-System',
                'featured' => true,
                'order' => 5,
            ],
            [
                'title' => 'Laravel React Full-Stack Platform',
                'slug' => 'laravel-react-portfolio',
                'category' => 'Web Architecture',
                'description' => 'Modern full-stack enterprise web platform combining Laravel 12 API backend, Inertia.js React frontend, administrative panel, and dynamic content management.',
                'tech_stack' => ['Laravel 12', 'React 18', 'Inertia.js', 'Vite', 'Tailwind CSS', 'MySQL'],
                'highlights' => [
                    'Architected seamless single-page application experience using Inertia.js server routing',
                    'Implemented glassmorphic UI design system with high-contrast typography',
                    'Constructed protected administrative control panel for dynamic record management'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/laravel-react-portfolio',
                'github_url' => 'https://github.com/xVLP/laravel-react-portfolio',
                'featured' => true,
                'order' => 6,
            ],
            [
                'title' => 'Computer Vision Data Augmentation Suite',
                'slug' => 'data-augmentation-techniques',
                'category' => 'Computer Vision',
                'description' => 'Image processing algorithms, spatial pixel manipulation pipelines, and data augmentation routines engineered for machine learning datasets.',
                'tech_stack' => ['Python', 'Jupyter Notebook', 'OpenCV', 'NumPy', 'Data Engineering'],
                'highlights' => [
                    'Developed custom spatial transformation & color space manipulation algorithms',
                    'Enhanced machine learning model generalization on constrained training datasets'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/Data-Augmentation-Techniques',
                'github_url' => 'https://github.com/xVLP/Data-Augmentation-Techniques',
                'featured' => true,
                'order' => 7,
            ],
            [
                'title' => 'Numerical Computing & Algorithmic Analysis Suite',
                'slug' => 'numerical-analysis-codes',
                'category' => 'Scientific Computing',
                'description' => 'Implementation of numerical computing routines, matrix factorizations, differential solvers, and mathematical modeling algorithms.',
                'tech_stack' => ['MATLAB', 'Numerical Methods', 'Algorithms', 'Linear Algebra'],
                'highlights' => [
                    'Constructed high-performance matrix solvers and root-finding numerical algorithms',
                    'Applied scientific computing models to simulate complex mathematical systems'
                ],
                'image_url' => null,
                'live_url' => 'https://github.com/xVLP/Numerical-Analysis-codes',
                'github_url' => 'https://github.com/xVLP/Numerical-Analysis-codes',
                'featured' => true,
                'order' => 8,
            ]
        ];

        foreach ($projects as $p) {
            Project::updateOrCreate(['slug' => $p['slug']], $p);
        }

        // 3. SEED EXPERIENCES & ROLES FROM OFFICIAL CV
        $experiences = [
            [
                'role' => 'COS Instructor',
                'company' => 'Central Bicol State University of Agriculture - Sipocot',
                'period' => '08/2024 - Present',
                'description' => 'Simplified complex theory through clear, practical coding logic. Teaching core computer science, programming, system architecture, and capstone research courses.',
                'achievements' => [
                    'Subjects Handled: Computer Programming 1 & 2, Basics of CS, System Integration & Architecture 2',
                    'Integrative Programming, Information Assurance & Security 1, Capstone Project & Research 2, Operating System Application, Quantitative Methods, Multimedia Communication',
                    'Collaborated with faculty to share best practices and enhance students\' practical coding expertise'
                ],
                'order' => 1,
            ],
            [
                'role' => 'Program Chairperson',
                'company' => 'Central Bicol State University of Agriculture - Sipocot',
                'period' => '10/2024 - 01/2025',
                'description' => 'Chaired programme meetings for strategic decision-making, policy development, strategic planning, and operational alignment with institutional stakeholders.',
                'achievements' => [
                    'Catered to stakeholders and faculty for updated policies and program operations',
                    'Reviewed reports, recommendations, and requests from academic accreditations and observations'
                ],
                'order' => 2,
            ],
            [
                'role' => 'Project Manager | Data Analyst | Full-stack & Mobile Developer',
                'company' => 'Bicol University',
                'period' => '08/2023 - 06/2024',
                'description' => 'Developed automated Pili varietal classification mobile app using pre-trained Convolutional Neural Network (CNN) models. Recipient of BUCS Best in Paper Award.',
                'achievements' => [
                    'Awarded BUCS Best in Paper Award for Pili Nut Varietal Classification CNN research',
                    'Awarded 2nd Place, 19th BU Student Research and Development Forum',
                    'Engineered mobile vision application and managed team workflows for AI classification pipeline'
                ],
                'order' => 3,
            ],
            [
                'role' => 'Project Manager | UI/UX Designer | Front-End Developer',
                'company' => 'Bicol University ICT Office - Legazpi',
                'period' => '06/2023 - 08/2023',
                'description' => 'Architected and developed the Bicol University Design System UI and web interface, managing institutional tech and frontend systems.',
                'achievements' => [
                    'Developed the Bicol University Design System UI and web component interface',
                    'Managed university tech infrastructure supporting academic and administrative functions'
                ],
                'order' => 4,
            ]
        ];

        foreach ($experiences as $e) {
            Experience::updateOrCreate(['role' => $e['role'], 'company' => $e['company']], $e);
        }

        // 4. SEED OFFICIAL CV SKILLS
        $skills = [
            ['name' => 'Python (TensorFlow, PyTorch, OpenCV, Data Science)', 'category' => 'AI/ML', 'proficiency' => 96],
            ['name' => 'Java (Frameworks & Object-Oriented Engineering)', 'category' => 'Backend', 'proficiency' => 92],
            ['name' => 'C, C++ & Low-Level Computing', 'category' => 'Scientific', 'proficiency' => 90],
            ['name' => 'PHP, Laravel 12 & Full-Stack Web Systems', 'category' => 'Backend', 'proficiency' => 94],
            ['name' => 'Dart & Flutter Cross-Platform Mobile Engineering', 'category' => 'Mobile', 'proficiency' => 95],
            ['name' => 'UI/UX Design (Figma, Flutterflow, HTML, CSS)', 'category' => 'Frontend', 'proficiency' => 95],
            ['name' => 'Database Management (SQL, MySQL, MongoDB, Firebase)', 'category' => 'Backend', 'proficiency' => 92],
            ['name' => 'Development Tools (VS Code, Colab, Android Studio, Replit)', 'category' => 'DevOps', 'proficiency' => 94],
        ];

        foreach ($skills as $s) {
            Skill::updateOrCreate(['name' => $s['name']], $s);
        }

        // Seed Professional Inquiry Message
        ContactMessage::updateOrCreate(
            ['email' => 'client@techsolutions.com'],
            [
                'name' => 'Alex Rivera',
                'email' => 'client@techsolutions.com',
                'subject' => 'System Development Project Inquiry & Technical Consultation',
                'message' => 'Hello Ms. Piando, I reviewed your software engineering portfolio and repository architecture. I would like to initiate a technical discussion regarding a custom system development project.',
                'is_read' => false,
            ]
        );
    }
}

