<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Veronica Louise Piando - Curriculum Vitae</title>
    <style>
        @page {
            size: A4;
            margin: 15mm;
        }
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #1e293b;
            line-height: 1.5;
            background: #f8fafc;
            margin: 0;
            padding: 20px;
        }
        .cv-card {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            overflow: hidden;
            display: grid;
            grid-template-columns: 280px 1fr;
        }
        .sidebar {
            background: #0f172a;
            color: #f8fafc;
            padding: 30px 24px;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        .main {
            padding: 35px 30px;
            background: #ffffff;
        }
        .profile-img-container {
            width: 140px;
            height: 140px;
            margin: 0 auto;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid #d97706;
            box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
        }
        .profile-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 10%;
        }
        .sidebar-section-title {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #f59e0b;
            border-bottom: 1px solid rgba(245, 158, 11, 0.3);
            padding-bottom: 5px;
            margin-bottom: 12px;
        }
        .contact-list {
            font-size: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: #cbd5e1;
        }
        .contact-list a {
            color: #38bdf8;
            text-decoration: none;
            word-break: break-all;
        }
        .skills-group {
            font-size: 12px;
            margin-bottom: 10px;
        }
        .skills-group-title {
            font-weight: 700;
            color: #fbbf24;
            margin-bottom: 4px;
        }
        .skills-list {
            list-style: none;
            padding: 0;
            margin: 0;
            color: #cbd5e1;
        }
        .skills-list li {
            margin-bottom: 3px;
            position: relative;
            padding-left: 10px;
        }
        .skills-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #d97706;
        }
        .main-header {
            border-bottom: 3px solid #d97706;
            padding-bottom: 15px;
            margin-bottom: 24px;
        }
        .main-header h1 {
            margin: 0;
            font-size: 28px;
            color: #0f172a;
            font-weight: 800;
            letter-spacing: -0.5px;
        }
        .main-header .title-badge {
            display: inline-block;
            margin-top: 6px;
            font-size: 13px;
            font-weight: 700;
            color: #d97706;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .main-section {
            margin-bottom: 24px;
        }
        .main-section-title {
            font-size: 15px;
            font-weight: 800;
            color: #0f172a;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 5px;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .summary-text {
            font-size: 13px;
            color: #334155;
            line-height: 1.6;
        }
        .timeline-item {
            margin-bottom: 18px;
            position: relative;
            padding-left: 14px;
            border-left: 2px solid #cbd5e1;
        }
        .timeline-header {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-weight: 700;
            color: #0f172a;
        }
        .timeline-sub {
            font-size: 12.5px;
            font-weight: 600;
            color: #d97706;
            margin-bottom: 4px;
        }
        .timeline-desc {
            font-size: 12.5px;
            color: #475569;
        }
        .timeline-bullets {
            margin: 6px 0 0 16px;
            padding: 0;
            font-size: 12px;
            color: #334155;
        }
        .timeline-bullets li {
            margin-bottom: 3px;
        }
        .awards-badge {
            display: inline-block;
            margin-top: 5px;
            padding: 3px 8px;
            background: #fef3c7;
            color: #92400e;
            font-size: 11px;
            font-weight: 700;
            border-radius: 4px;
            border: 1px solid #fcd34d;
        }
        .cert-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 6px;
            font-size: 12px;
            color: #334155;
        }
        .cert-item {
            padding: 6px 10px;
            background: #f8fafc;
            border-left: 3px solid #d97706;
            border-radius: 0 4px 4px 0;
        }
        .print-fab {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: linear-gradient(135deg, #d97706, #b45309);
            color: white;
            padding: 12px 24px;
            border-radius: 50px;
            border: none;
            font-weight: 700;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(217, 119, 6, 0.4);
            z-index: 999;
            transition: all 0.2s;
        }
        .print-fab:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(217, 119, 6, 0.5);
        }
        @media print {
            body { background: white; padding: 0; }
            .cv-card { box-shadow: none; border-radius: 0; max-width: 100%; }
            .print-fab { display: none; }
        }
    </style>
</head>
<body>
    <button onclick="window.print()" class="print-fab">🖨️ Print / Save PDF</button>

    <div class="cv-card">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="profile-img-container">
                <img src="/images/profile-avatar.jpg" alt="Veronica Louise Piando">
            </div>

            <div>
                <div class="sidebar-section-title">Contact Information</div>
                <div class="contact-list">
                    <div><strong>📍 Location:</strong> Legazpi City, Philippines 4500</div>
                    <div><strong>📞 Phone:</strong> +63 962 322 0518</div>
                    <div><strong>✉️ Email:</strong> <a href="mailto:veronicapiando.official@gmail.com">veronicapiando.official@gmail.com</a></div>
                    <div><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/veronica-louise-piando/" target="_blank">veronica-louise-piando</a></div>
                    <div><strong>🌐 Facebook:</strong> <a href="https://facebook.com/AnikaLana" target="_blank">facebook.com/AnikaLana</a></div>
                </div>
            </div>

            <div>
                <div class="sidebar-section-title">Technical Skills</div>
                
                <div class="skills-group">
                    <div class="skills-group-title">Programming Languages</div>
                    <ul class="skills-list">
                        <li>Java (Frameworks & Libraries)</li>
                        <li>Python (TensorFlow, PyTorch, OpenCV)</li>
                        <li>C, C++</li>
                        <li>PHP</li>
                        <li>Visual Basic</li>
                    </ul>
                </div>

                <div class="skills-group">
                    <div class="skills-group-title">UI/UX & Frontend Design</div>
                    <ul class="skills-list">
                        <li>Flutterflow, Figma</li>
                        <li>HTML5, CSS3, JavaScript</li>
                    </ul>
                </div>

                <div class="skills-group">
                    <div class="skills-group-title">Databases</div>
                    <ul class="skills-list">
                        <li>SQL, MySQL</li>
                        <li>MongoDB</li>
                        <li>Google Firebase</li>
                    </ul>
                </div>

                <div class="skills-group">
                    <div class="skills-group-title">Tools & Frameworks</div>
                    <ul class="skills-list">
                        <li>Visual Studio Code, Google Colab</li>
                        <li>Android Studio, Flutter</li>
                        <li>MS Office, Replit</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main">
            <div class="main-header">
                <h1>Veronica Louise Piando</h1>
                <div class="title-badge">COS Instructor & System Developer • Master's Candidate in Computer Vision</div>
            </div>

            <!-- Summary -->
            <div class="main-section">
                <div class="main-section-title">Professional Summary</div>
                <div class="summary-text">
                    Accomplished COS Instructor and former Program Chairperson at Central Bicol State University of Agriculture, with a proven track record in simplifying complex theories and enhancing students' practical coding logic. Master's Degree Candidate in Computer Science (Computer Vision Track) at Ateneo De Naga University with 30 units completed and Thesis 1 ongoing. Demonstrated expertise as a Project Manager, Data Analyst, and Full-Stack & Mobile Developer at Bicol University, receiving the BUCS Best in Paper Award.
                </div>
            </div>

            <!-- Education -->
            <div class="main-section">
                <div class="main-section-title">Education & Academic Advancement</div>

                <div class="timeline-item">
                    <div class="timeline-header">
                        <span>Master of Science: Computer Science - Computer Vision</span>
                        <span>Candidate (Thesis 1 Ongoing)</span>
                    </div>
                    <div class="timeline-sub">Ateneo De Naga University - Naga</div>
                    <div class="timeline-desc"><strong>Master's Degree Candidate • 30 Units Completed • Thesis 1 Ongoing</strong></div>
                    <ul class="timeline-bullets">
                        <li><strong>Advanced Graduate Coursework Completed:</strong></li>
                        <li>Advanced Data Structures & Algorithms, Advanced Operating Systems & Computer Organization</li>
                        <li>Advanced Theory of Programming Languages, Theory of Computation</li>
                        <li>Computer Graphics, Trends in Graphics & Computer Vision</li>
                        <li>Artificial Intelligence, Digital Image Processing, Computer Vision, Data Visualization</li>
                        <li>Completed 9-Unit Bridging Program (DSA, OOP, Database Systems)</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-header">
                        <span>Bachelor of Science: Computer Science</span>
                        <span>Graduated 07/2024</span>
                    </div>
                    <div class="timeline-sub">Bicol University College of Science - Legazpi City, Bicol Region, Philippines</div>
                    <div class="timeline-desc"><strong>Graduated with Cum Laude Honours</strong>, consistently made the Dean's List, and received service awards.</div>
                    <ul class="timeline-bullets">
                        <li><strong>Thesis:</strong> Varietal Classification of NSIC-Registered Pili Nut using Convolutional Neural Network</li>
                        <li><strong>Research Awards:</strong> BUCS Best in Paper • Second Place, 19th BU Student Research & Development Forum</li>
                    </ul>
                </div>
            </div>

            <!-- Professional Experience -->
            <div class="main-section">
                <div class="main-section-title">Professional Experience</div>

                <div class="timeline-item">
                    <div class="timeline-header">
                        <span>COS Instructor</span>
                        <span>08/2024 – Current</span>
                    </div>
                    <div class="timeline-sub">Central Bicol State University of Agriculture - Sipocot</div>
                    <div class="timeline-desc">Simplified complex theory through clear teachings with practical coding logic and real-life application scenarios.</div>
                    <ul class="timeline-bullets">
                        <li><strong>Subjects Handled:</strong> Computer Programming 1 & 2, Basics of Computer Science, System Integration & Architecture 2, Integrative Programming, Information Assurance & Security 1, Capstone Project & Research 2, Operating System Application, Quantitative Methods, Multimedia Communication & IT.</li>
                        <li>Collaborated with faculty to share best practices and enhance teaching techniques.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-header">
                        <span>Program Chairperson</span>
                        <span>10/2024 – 01/2025</span>
                    </div>
                    <div class="timeline-sub">Central Bicol State University of Agriculture - Sipocot</div>
                    <ul class="timeline-bullets">
                        <li>Chaired programme meetings for decision-making, policy development, and strategic planning.</li>
                        <li>Catered to stakeholders and faculty for updated policies and operations.</li>
                        <li>Reviewed accreditation reports, recommendations, and operational observations.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-header">
                        <span>Project Manager | Data Analyst | Full-Stack & Mobile Developer</span>
                        <span>08/2023 – 06/2024</span>
                    </div>
                    <div class="timeline-sub">Bicol University</div>
                    <div class="timeline-desc">Developed a mobile vision app using pre-trained Convolutional Neural Network (CNN) models for automated Pili varietal classification.</div>
                    <div class="awards-badge">🏆 BUCS Best in Paper Award • 🥈 2nd Place 19th BU Student R&D Forum</div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-header">
                        <span>Project Manager | UI/UX Designer | Front-End Developer</span>
                        <span>06/2023 – 08/2023</span>
                    </div>
                    <div class="timeline-sub">Bicol University Information and Communication Technology Office - Legazpi</div>
                    <div class="timeline-desc">Developed the Bicol University Design System UI and web interface, managing university tech from programming to academic/administrative support.</div>
                </div>
            </div>

            <!-- Certifications & Training -->
            <div class="main-section">
                <div class="main-section-title">Certifications & Training</div>
                <div class="cert-grid">
                    <div class="cert-item">🛡️ <strong>ETHICAL HACKING</strong> (2025-02-17)</div>
                    <div class="cert-item">🤖 <strong>INTELLIGENT FRONTIERS:</strong> Integrating Machine Learning, Cybersecurity & AI (2025-06-20)</div>
                    <div class="cert-item">🧠 <strong>AI VOLUTION:</strong> The Synergy of Marketing and Artificial Intelligence (2023-08-01)</div>
                    <div class="cert-item">🔒 <strong>Fortinet End-User Training:</strong> LAN, WLAN (2023-06-01)</div>
                    <div class="cert-item">📞 <strong>Grandstream Unified Communications:</strong> IP Voice & Video (2023-06-01)</div>
                    <div class="cert-item">🎓 <strong>Google Developer Student Club:</strong> Team Member & Graphic Designer (2023)</div>
                    <div class="cert-item">👩‍💻 <strong>Women in Computing Student Research Forum</strong> (2023-05-01)</div>
                </div>
            </div>

            <!-- Key Accomplishments -->
            <div class="main-section">
                <div class="main-section-title">Key Accomplishments</div>
                <ul class="timeline-bullets">
                    <li>Adviser of the College of Information Technology Student Council.</li>
                    <li>College Adviser of Capstone Project and Research (Specializing in Machine Learning).</li>
                    <li>Developed an automated scheduling system with Artificial Intelligence.</li>
                    <li>High ratings by students and immediate supervisor through IPCR overall performance evaluations.</li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
