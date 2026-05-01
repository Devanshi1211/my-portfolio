import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Database, Cpu, Award, BookOpen, GraduationCap, Mail, Phone, MapPin, 
  ExternalLink, Download, CheckCircle, Calendar, ChevronRight, Menu, X, 
  FileText, Briefcase, Send, BarChart, User, Github, Linkedin, Twitter,
  Sparkles, Brain, Search, Lightbulb, Rocket, Target, Star, History, TrendingUp, Settings, Globe, Trophy, Zap
} from 'lucide-react';

// Typewriter Component
const Typewriter = ({ texts, delay = 150, pause = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));
        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, delay, pause]);

  return (
    <span className="text-primary-blue border-r-4 border-primary-blue animate-pulse ml-2">
      {currentText}
    </span>
  );
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [resumeTab, setResumeTab] = useState('education');
  const [portfolioTab, setPortfolioTab] = useState('all');
  const [certTab, setCertTab] = useState('all');
  const [achievementTab, setAchievementTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'resume', 'profiles', 'certificates', 'badges', 'achievements', 'hackathons', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Resume', href: 'resume' },
    { name: 'Profiles', href: 'profiles' },
    { name: 'Certificates', href: 'certificates' },
    { name: 'Badges', href: 'badges' },
    { name: 'Achievements', href: 'achievements' },
    { name: 'Hackathons', href: 'hackathons' },
    { name: 'Contact', href: 'contact' },
  ];

  const personalInfo = {
    name: "DEVANSHI JITENDRABHAI CHAUHAN",
    shortName: "Devanshi Chauhan",
    role: "Aspiring Data Scientist & AI Engineer",
    intro: "I am a B.Tech IT student passionate about Data Science, Machine Learning, AI, and building real-world problem-solving projects through internships, hackathons, research, and hands-on development.",
    email: "devanshiis20051211@gmail.com",
    linkedin: "https://www.linkedin.com/in/devanshi1211/",
    github: "https://github.com/Devanshi1211",
    college: "Sigma University",
    location: "Vadodara, Gujarat",
    roles: ["Data Scientist", "AI Engineer", "Data Analyst", "ML Enthusiast"]
  };

  const whatIDo = [
    { title: "Data Analysis", desc: "Extracting insights from complex datasets using Pandas, NumPy, and SQL.", icon: <BarChart size={32} /> },
    { title: "Machine Learning", desc: "Building predictive models with Scikit-learn, Random Forest, and SVM.", icon: <Brain size={32} /> },
    { title: "AI & NLP", desc: "Developing intelligent systems using NLP techniques and TF-IDF vectorization.", icon: <Sparkles size={32} /> },
    { title: "Computer Vision", desc: "Image processing and shape detection using OpenCV and deep learning.", icon: <Search size={32} /> },
    { title: "Problem Solving", desc: "Solving complex DSA problems with optimized time and space complexity.", icon: <Target size={32} /> },
    { title: "Web / App Projects", desc: "Creating functional dashboards and AI tools using React and Streamlit.", icon: <Code size={32} /> }
  ];

  const projects = [
    { id: 1, title: "SevaSync AI", cat: "ai", desc: "Smart Resource Allocation System for NGOs.", tech: "React, AI Logic", link: "#", icon: <Sparkles /> },
    { id: 2, title: "Movie Recommendation", cat: "ml", desc: "Suggests movies based on user preferences.", tech: "Python, Streamlit", link: "https://devanshi1211.github.io/Movie_recommed_system/", icon: <Database /> },
    { id: 3, title: "Spam Detection", cat: "nlp", desc: "NLP-based SMS spam classifier.", tech: "NLP, Scikit-learn", link: "#", icon: <Mail /> },
    { id: 4, title: "Laptop Price Predictor", cat: "ml", desc: "ML app for predicting laptop costs.", tech: "Python, Pandas", link: "#", icon: <TrendingUp /> },
    { id: 5, title: "AI Study Planner", cat: "ai", desc: "Helps students manage learning goals.", tech: "Python, Streamlit", link: "#", icon: <Calendar /> },
    { id: 6, title: "SkillMap", cat: "analysis", desc: "College skill and career insight system.", tech: "Matplotlib, Analytics", link: "#", icon: <BarChart /> },
    { id: 7, title: "AI Chat Assistant", cat: "ai", desc: "Intelligent chatbot for user queries.", tech: "GenAI, Python", link: "#", icon: <Globe /> },
    { id: 8, title: "Multiplayer Tic Tac Toe", cat: "app", desc: "Real-time game with socket integration.", tech: "React, Node.js", link: "#", icon: <Target /> },
    { id: 9, title: "P&ID Shape Detection", cat: "vision", desc: "OpenCV based symbol identification.", tech: "OpenCV, Python", link: "#", icon: <Search /> }
  ];

  const filteredProjects = useMemo(() => {
    if (portfolioTab === 'all') return projects;
    return projects.filter(p => p.cat === portfolioTab);
  }, [portfolioTab]);

  const education = [
    { title: "B.Tech in Information Technology", inst: "Sigma University", period: "2023 - 2027", result: "CGPA: 9.64 / 10" },
    { title: "Class 12 (PCM)", inst: "HSC Board", period: "2022 - 2023", result: "Percentage: 89%" },
    { title: "Class 10", inst: "SSC Board", period: "2020 - 2021", result: "Percentage: 97.91%" }
  ];

  const experience = [
    { title: "Data Extraction & Analytics Intern", inst: "Tech Mahindra", period: "July 2025 - Oct 2025", desc: "Worked on PDF text extraction, OpenCV shape detection, and ML classification using Logistic Regression and Random Forest." }
  ];

  const technicalSkills = [
    { name: "Python", val: 95 },
    { name: "SQL", val: 85 },
    { name: "Pandas/NumPy", val: 90 },
    { name: "Scikit-learn", val: 85 },
    { name: "Power BI/Excel", val: 80 },
    { name: "OpenCV/NLP", val: 75 },
    { name: "React/Streamlit", val: 80 }
  ];

  const professionalSkills = [
    { name: "Problem Solving", val: 90 },
    { name: "Communication", val: 85 },
    { name: "Teamwork", val: 95 },
    { name: "Research", val: 80 },
    { name: "Project Management", val: 85 }
  ];

  const profiles = [
    { name: "GitHub", val: "Devanshi1211", icon: <Github />, link: "https://github.com/Devanshi1211" },
    { name: "LinkedIn", val: "devanshi1211", icon: <Linkedin />, link: "https://www.linkedin.com/in/devanshi1211/" },
    { name: "LeetCode", val: "Practice Profile", icon: <Code />, link: "#" },
    { name: "CodeChef", val: "Competitive Coding", icon: <Target />, link: "#" },
    { name: "Coding Ninjas", val: "DSA Path", icon: <Brain />, link: "#" },
    { name: "GeeksforGeeks", val: "Skill Building", icon: <Rocket />, link: "#" },
    { name: "Codolio", val: "Portfolio Hub", icon: <Globe />, link: "#" }
  ];

  const certificatesData = [
    { id: 1, title: "Responsive Web Design", platform: "freeCodeCamp", cat: "web", date: "March 7, 2024", details: "Completed Responsive Web Design Developer Certification, approximately 300 hours of work.", platformLink: "https://www.freecodecamp.org/", certLink: "https://freecodecamp.org/certification/DEVANSHI_1211/responsive-web-design", icon: <Globe />, image: "/fcc.webp" },
    { id: 2, title: "Python Course for Beginners", platform: "Scaler Topics", cat: "data science", date: "July 3, 2024", details: "Completed Python course with 121 video tutorials, 16 modules, and 10 challenges.", platformLink: "https://www.scaler.com/topics/", certLink: "#", icon: <Award />, image: "/scaler.jpeg" },
    { id: 3, title: "Machine Learning Training", platform: "Acmegrade / Mood Indigo IIT Bombay", cat: "ai/ml", date: "March 12, 2024 – April 12, 2024", details: "Completed Machine Learning training program.", platformLink: "https://moodi.org/", certLink: "#", icon: <Cpu />, image: "/acme.jpeg" },
    { id: 4, title: "Placement Preparation Programme", platform: "Abhyuday IIT Bombay / Indian Institute of Placement", cat: "placement", date: "July 16–17, 2024", details: "Attended 2-day placement preparation programme.", platformLink: "https://www.abhyudayiitb.org/", certLink: "#", icon: <Target />, image: "/iit.webp" },
    { id: 5, title: "Data Science Bootcamp", platform: "GeeksforGeeks", cat: "data science", date: "Completed", details: "Completed 6-week Data Science Bootcamp from analyzing data to creating ML models.", platformLink: "https://www.geeksforgeeks.org/", certLink: "#", icon: <Database />, image: "/gfg.jpeg" },
    { id: 6, title: "SAP Code Unnati Foundation", platform: "SAP + Edunet Foundation", cat: "ai/ml", date: "2024–2025", details: "Completed training on Python Programming, Data Analysis with Python, AI, and SAP Conversational AI Chatbot.", platformLink: "https://edunetfoundation.org/", certLink: "#", icon: <Settings />, image: "/sap.webp" },
    { id: 7, title: "SAP Code Unnati Advanced", platform: "SAP + Edunet Foundation", cat: "ai/ml", date: "2025–2026", details: "Completed advanced training on AI/ML, Deep Learning, Edge Computing, SAP Analytics Cloud, and SAP ABAP on BTP.", platformLink: "https://edunetfoundation.org/", certLink: "#", icon: <Settings />, image: "/sap.webp" },
    { id: 8, title: "Data Structures & Algorithms", platform: "Code360 by Coding Ninjas", cat: "dsa", date: "March 30, 2025", details: "Completed Data Structures & Algorithms Beginner to Intermediate guided path.", platformLink: "https://www.naukri.com/code360", certLink: "#", icon: <Brain />, image: "/coding_ninja.jpeg" },
    { id: 9, title: "OOPs in Python", platform: "Code360 by Coding Ninjas", cat: "data science", date: "March 29, 2025", details: "Completed OOPs in Python guided path.", platformLink: "https://www.naukri.com/code360", certLink: "#", icon: <Code />, image: "/coding_ninja.jpeg" },
    { id: 10, title: "Introduction to Artificial Intelligence", platform: "IBM SkillsBuild", cat: "ai/ml", date: "February 2, 2026", details: "Completed Introduction to Artificial Intelligence course.", platformLink: "https://skillsbuild.org/", certLink: "#", icon: <Cpu />, image: "/ibm.jpeg" },
    { id: 11, title: "Enterprise Design Thinking Practitioner", platform: "IBM SkillsBuild", cat: "placement", date: "February 9, 2026", details: "Completed Enterprise Design Thinking Practitioner credential.", platformLink: "https://skillsbuild.org/", certLink: "#", icon: <Target />, image: "/ibm.jpeg" },
    { id: 12, title: "Introduction to C", platform: "SoloLearn", cat: "dsa", date: "January 11, 2024", details: "Completed Introduction to C course.", platformLink: "https://www.sololearn.com/", certLink: "#", icon: <Award />, image: "/solo.jpeg" },
    { id: 13, title: "Learn Python Programming", platform: "CodeChef", cat: "data science", date: "August 11, 2023", details: "Completed all lessons of Learn Python Programming.", platformLink: "https://www.codechef.com/", certLink: "#", icon: <Award />, image: "/chef.webp" },
    { id: 14, title: "500 Difficulty Rating", platform: "CodeChef", cat: "dsa", date: "August 9, 2024", details: "Completed all practice problems of 500 difficulty rating.", platformLink: "https://www.codechef.com/", certLink: "#", icon: <Target />, image: "/chef.webp" },
    { id: 15, title: "SQL 50 Badge", platform: "LeetCode", cat: "dsa", date: "March 2025", details: "Earned SQL 50 badge on LeetCode.", platformLink: "https://leetcode.com/", certLink: "#", icon: <Database /> },
    { id: 16, title: "Securing Our Business", platform: "Tech Mahindra", cat: "internship", date: "August 1, 2025", details: "Completed Tech Mahindra security learning certificate.", platformLink: "https://www.techmahindra.com/", certLink: "#", icon: <Award /> },
    { id: 17, title: "Internship Completion Certificate", platform: "Tech Mahindra", cat: "internship", date: "November 6, 2025", details: "Completed internship on Data Extraction and Analytics.", platformLink: "https://www.techmahindra.com/", certLink: "#", icon: <Briefcase /> }
  ];

  const codingBadges = [
    { title: "DSA Master Badge", platform: "Code360", desc: "Achieved Master level in DSA guided path.", link: "https://www.naukri.com/code360/profile/15d930a2-a8d9-4253-87aa-39036c236bed", image: "/coding_ninja.jpeg", btnText: "View Profile" },
    { title: "DSA Specialist Badge", platform: "Code360", desc: "Completed multiple guided paths and achieved Specialist level.", link: "https://www.naukri.com/code360/profile/15d930a2-a8d9-4253-87aa-39036c236bed", image: "/coding_ninja.jpeg", btnText: "View Profile" },
    { title: "DSA Achiever Badge", platform: "Code360", desc: "Solved problems across Arrays, Hash Table, Linked List, Math, Sorting, Strings.", link: "https://www.naukri.com/code360/profile/15d930a2-a8d9-4253-87aa-39036c236bed", image: "/coding_ninja.jpeg", btnText: "View Profile" },
    { title: "Basics of Machine Learning", platform: "Code360", desc: "Completed ML guided learning path.", link: "https://www.naukri.com/code360/profile/15d930a2-a8d9-4253-87aa-39036c236bed", image: "/coding_ninja.jpeg", btnText: "View Profile" },
    { title: "Data Structures Badge", platform: "Code360", desc: "Strong foundation in core DSA topics.", link: "https://www.naukri.com/code360/profile/15d930a2-a8d9-4253-87aa-39036c236bed", image: "/coding_ninja.jpeg", btnText: "View Profile" },
    { title: "SQL 50 Badge", platform: "LeetCode", desc: "Completed SQL 50 problem set.", link: "https://leetcode.com/medal/?showImg=0&id=6567526&isLevel=false", icon: <Database />, btnText: "View Badge" },
    { title: "Achievement Badge", platform: "LeetCode", desc: "Problem-solving achievement badge.", link: "https://leetcode.com/medal/?showImg=0&id=6358906&isLevel=false", icon: <Award />, btnText: "View Badge" },
    { title: "Pandas Badge", platform: "Code360", desc: "Completed Pandas/data analysis learning path.", link: "https://www.naukri.com/code360/profile/15d930a2-a8d9-4253-87aa-39036c236bed", image: "/coding_ninja.jpeg", btnText: "View Profile" }
  ];

  const personalAchievements = [
    { 
      id: 1, 
      title: "Best Research Award – Machine Learning Research", 
      desc: "Received Best Research Award for research paper titled: “Analyzing the Impact of Overtime Study Hours on Academic Performance Using Machine Learning Regression Techniques.”",
      details: ["Applied ML regression models (SVR, Linear Regression)", "Analyzed real-world student data", "Identified negative impact of excessive study hours on performance", "Recognized as best research among submissions"],
      tags: ["Machine Learning", "Research", "Data Analysis"],
      icon: <Star />,
      isTop: true,
      cat: 'Academic'
    },
    { id: 2, title: "Mathematics Competition Winner", platform: "Sigma University", desc: "Secured 1st position in Mathematics competition, demonstrating strong analytical thinking and problem-solving ability.", icon: <Award />, cat: 'Academic' },
    { id: 3, title: "Research Paper Presentation", desc: "Presented machine learning-based research on student performance and behavioral data analysis.", icon: <FileText />, cat: 'Academic' },
    { id: 4, title: "1st Prize – Badminton", platform: "Sigma University Sports", desc: "Achieved 1st position in badminton tournament, showcasing discipline, focus, and competitive excellence.", icon: <Trophy />, cat: 'Sports' },
    { id: 5, title: "Runner-Up – Kho Kho", platform: "University Sports", desc: "Secured runner-up position in Kho Kho competition, demonstrating teamwork, coordination, and agility.", icon: <Zap />, cat: 'Sports' },
    { id: 6, title: "Tech Mahindra Internship Experience", desc: "Worked on real-world data extraction, computer vision, and ML-based systems using Python and OpenCV.", icon: <Briefcase />, cat: 'Technical' },
    { id: 7, title: "900+ Coding Problems Solved", desc: "Solved 900+ coding problems across platforms including LeetCode, CodeChef, GFG, HackerRank, Code360, and InterviewBit.", stats: { total: 900, dsa: 437, cp: 416, fundamental: 15 }, icon: <Code />, cat: 'Technical' },
    { id: 8, title: "Built AI/ML Project Portfolio", desc: "Developed multiple real-world projects in Machine Learning, NLP, Computer Vision, and Data Analytics.", icon: <Rocket />, cat: 'Technical' },
    { id: 9, title: "Google Solution Challenge 2026", desc: "Currently developing SevaSync AI – an AI-powered Smart Resource Allocation System for real-world social impact.", status: "Ongoing", tags: ["AI", "ML", "Social Impact", "MVP"], icon: <Globe />, cat: 'Hackathons' },
    { id: 10, title: "Gandhinagar Craftathon 2026 Participant", desc: "Participated in a 2-day offline hackathon focused on real-world problem solving, rapid prototyping, and teamwork.", note: "Participation verified via ID card", icon: <Target />, cat: 'Hackathons' }
  ];

  const filteredAchievements = useMemo(() => {
    if (achievementTab === 'all') return personalAchievements;
    return personalAchievements.filter(ach => ach.cat.toLowerCase() === achievementTab.toLowerCase());
  }, [achievementTab]);

  const hackathons = [
    { 
      title: "Google Solution Challenge 2026", 
      status: "Ongoing", 
      desc: "Working on AI-based Smart Resource Allocation System (SevaSync AI) focused on solving real-world problems using machine learning and data systems.",
      tags: ["AI", "ML", "Social Impact", "MVP"]
    },
    { 
      title: "Gandhinagar Craftathon 2026", 
      status: "Participant", 
      desc: "Participated in a 2-day offline hackathon focused on real-world problem solving, teamwork, and rapid prototyping.",
      tags: ["Participation verified via ID card"]
    }
  ];

  const filteredCertificates = useMemo(() => {
    if (certTab === 'all') return certificatesData;
    return certificatesData.filter(cert => cert.cat === certTab);
  }, [certTab]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-text-primary selection:bg-primary-blue/20 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-text-primary"
            onClick={() => scrollTo('home')}
            style={{ cursor: 'pointer' }}
          >
            <span className="text-primary-blue">D</span>EVANSHI.
          </motion.div>
          
          <div className="hidden lg:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-xs font-black uppercase tracking-widest transition-all hover:text-primary-blue ${activeSection === link.href ? 'text-primary-blue' : 'text-text-secondary'}`}
              >
                {link.name}
              </button>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-primary-blue text-white rounded-full text-xs font-black uppercase tracking-widest shadow-3d hover:bg-primary-light transition-all"
            >
              Resume
            </motion.button>
          </div>

          <button className="lg:hidden text-text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 w-full z-40 bg-white border-b border-border lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-lg font-black uppercase tracking-widest text-left ${activeSection === link.href ? 'text-primary-blue' : 'text-text-primary'}`}
                >
                  {link.name}
                </button>
              ))}
              <button className="w-full py-4 bg-primary-blue text-white rounded-xl text-lg font-black uppercase tracking-widest">
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-black uppercase tracking-[0.3em] text-text-secondary mb-4">
              Welcome to my world
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-text-primary">
              Hi, I'm <span className="text-primary-blue">{personalInfo.shortName}</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-text-primary h-20">
              <Typewriter texts={personalInfo.roles} />
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-xl leading-relaxed">
              {personalInfo.intro}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6">Find me at</div>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin />, href: personalInfo.linkedin },
                    { icon: <Github />, href: personalInfo.github },
                    { icon: <Mail />, href: `mailto:${personalInfo.email}` }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      href={social.href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 flex items-center justify-center bg-white border border-border rounded-xl text-text-secondary hover:text-primary-blue hover:border-primary-blue/30 transition-all shadow-sm"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6">Best skills on</div>
                <div className="flex gap-4">
                  {[
                    <svg key="vscode" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.583 2.166L9.416 10.333L3.583 6.583L2 7.75L7.083 12L2 16.25L3.583 17.416L9.416 13.666L17.583 21.833L22 19.5V4.5L17.583 2.166ZM17.5 17.5L11.5 12L17.5 6.5V17.5Z" fill="#007ACC"/>
                    </svg>,
                    <div key="creative" className="relative">
                      <Lightbulb size={24} className="text-[#F59E0B] fill-[#F59E0B]/20" />
                      <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>,
                    <svg key="python" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.83 1C5.645 1 6.014 3.689 6.014 3.689L6.023 6.467H11.95V7.308H3.593C3.593 7.308 1 7.023 1 12.352C1 17.681 3.284 17.382 3.284 17.382H5.321V14.511C5.321 14.511 5.176 11.002 8.667 11.002H14.534C14.534 11.002 17.643 11.114 17.643 7.822V4.549C17.643 4.549 18.066 1 11.83 1ZM9.141 2.744C9.721 2.744 10.19 3.213 10.19 3.793C10.19 4.373 9.721 4.842 9.141 4.842C8.561 4.842 8.092 4.373 8.092 3.793C8.092 3.213 8.561 2.744 9.141 2.744Z" fill="#3776AB"/>
                      <path d="M12.17 23C18.355 23 17.986 20.311 17.986 20.311L17.977 17.533H12.05V16.692H20.407C20.407 16.692 23 16.977 23 11.648C23 6.319 20.716 6.618 20.716 6.618H18.679V9.489C18.679 9.489 18.824 12.998 15.333 12.998H9.466C9.466 12.998 6.357 12.886 6.357 16.178V19.451C6.357 19.451 5.934 23 12.17 23ZM14.859 21.256C14.279 21.256 13.81 20.207C13.81 20.207C13.81 19.627 14.279 19.158 14.859 19.158C15.439 19.158 15.908 19.627 15.908 20.207C15.908 20.787 15.439 21.256 14.859 21.256Z" fill="#FFD43B"/>
                    </svg>
                  ].map((skill, i) => (
                    <div key={i} className="w-16 h-16 flex items-center justify-center bg-white border border-border rounded-xl shadow-sm hover:shadow-3d transition-all group">
                      <div className="group-hover:scale-110 transition-transform">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square glass-card rounded-[3rem] p-4">
              <div className="w-full h-full bg-light-bg rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                 <User size={200} className="text-primary-blue/10" />
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-bl-[100%] animate-pulse"></div>
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-blue/5 rounded-tr-[100%]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / What I Do Section */}
      <section id="about" className="py-32 bg-light-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Features</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">What I Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIDo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white rounded-[2rem] border border-border hover:bg-gradient-to-br hover:from-white hover:to-primary-blue/[0.03] hover:shadow-3d hover:translate-y-[-8px] transition-all duration-300"
              >
                <div className="text-primary-blue mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                <div className="mt-8 text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity">
                   <ChevronRight size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="mb-20"
          >
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Visit my projects and share your feedback</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">My Projects</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['all', 'ml', 'ai', 'nlp', 'analysis', 'vision', 'app'].map((cat) => (
              <button
                key={cat}
                onClick={() => setPortfolioTab(cat)}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${portfolioTab === cat ? 'bg-primary-blue text-white shadow-3d' : 'bg-light-bg text-text-secondary hover:text-primary-blue'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-[2rem] border border-border overflow-hidden shadow-sm hover:shadow-3d hover:translate-y-[-8px] transition-all"
                >
                  <div className="aspect-video bg-light-bg p-10 flex items-center justify-center text-primary-blue/20 group-hover:bg-primary-blue/5 transition-colors">
                     {React.cloneElement(project.icon, { size: 64 })}
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary-blue">{project.cat}</span>
                    </div>
                    <h3 className="text-xl font-black mb-4 group-hover:text-primary-blue transition-colors text-text-primary">{project.title}</h3>
                    <p className="text-sm text-text-secondary mb-8">{project.desc}</p>
                    <a href={project.link} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-blue hover:gap-4 transition-all">
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-32 bg-light-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">3+ Years of Learning Journey</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">My Resume</h2>
          </div>

          <div className="flex justify-center mb-16 bg-white p-2 rounded-2xl border border-border inline-flex mx-auto overflow-hidden">
             {['education', 'technical', 'professional'].map(tab => (
               <button
                 key={tab}
                 onClick={() => setResumeTab(tab)}
                 className={`px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${resumeTab === tab ? 'bg-primary-blue text-white shadow-3d' : 'text-text-secondary hover:text-primary-blue'}`}
               >
                 {tab === 'technical' ? 'Technical Skills' : tab === 'professional' ? 'Prof. Skills' : 'Education'}
               </button>
             ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {resumeTab === 'education' && (
              <div className="grid md:grid-cols-2 gap-12">
                 <div>
                    <h3 className="text-2xl font-black mb-10 text-text-primary">Education Quality</h3>
                    <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-1 before:bg-border">
                       {education.map((edu, i) => (
                         <div key={i} className="pl-8 relative before:absolute before:left-[-6px] before:top-4 before:w-3 before:h-3 before:bg-primary-blue before:rounded-full">
                            <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-3d transition-all group">
                               <div className="flex justify-between items-start mb-4">
                                  <h4 className="font-bold text-lg group-hover:text-primary-blue transition-colors text-text-primary">{edu.title}</h4>
                                  <span className="px-3 py-1 bg-primary-blue/5 text-primary-blue text-[10px] font-black rounded-lg">{edu.period}</span>
                               </div>
                               <div className="text-sm text-text-secondary mb-2">{edu.inst}</div>
                               <div className="text-sm font-black text-primary-blue">{edu.result}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div>
                    <h3 className="text-2xl font-black mb-10 text-text-primary">Work Experience</h3>
                    <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-1 before:bg-border">
                       {experience.map((exp, i) => (
                         <div key={i} className="pl-8 relative before:absolute before:left-[-6px] before:top-4 before:w-3 before:h-3 before:bg-primary-blue before:rounded-full">
                            <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-3d transition-all group">
                               <div className="flex justify-between items-start mb-4">
                                  <h4 className="font-bold text-lg group-hover:text-primary-blue transition-colors text-text-primary">{exp.title}</h4>
                                  <span className="px-3 py-1 bg-primary-blue/5 text-primary-blue text-[10px] font-black rounded-lg">{exp.period}</span>
                               </div>
                               <div className="text-sm text-text-secondary mb-4">{exp.inst}</div>
                               <p className="text-xs text-text-secondary leading-relaxed">{exp.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

            {(resumeTab === 'technical' || resumeTab === 'professional') && (
              <div className="grid md:grid-cols-2 gap-16 p-10 bg-white rounded-[2rem] border border-border shadow-sm">
                 {(resumeTab === 'technical' ? technicalSkills : professionalSkills).map((skill, i) => (
                   <div key={i} className="space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-xs font-black uppercase tracking-widest text-text-secondary">{skill.name}</span>
                         <span className="text-xs font-black text-text-secondary">{skill.val}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-light-bg rounded-full overflow-hidden border border-border p-0.5">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${skill.val}%` }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="h-full bg-primary-blue rounded-full relative shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                         >
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/30"></div>
                         </motion.div>
                      </div>
                   </div>
                 ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section id="profiles" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Coding Platforms</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">Online Profiles</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {profiles.map((profile, i) => (
              <motion.a
                key={i}
                href={profile.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, shadow: "var(--shadow-3d-hover)" }}
                className="p-8 bg-white border border-border rounded-[2rem] flex flex-col items-center text-center group hover:border-primary-blue/30 transition-all"
              >
                <div className="w-14 h-14 bg-light-bg rounded-2xl flex items-center justify-center text-text-secondary group-hover:text-primary-blue group-hover:bg-primary-blue/5 transition-all mb-6">
                  {profile.icon}
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-text-primary">{profile.name}</h4>
                <p className="text-[10px] font-bold text-text-secondary uppercase">{profile.val}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-32 bg-light-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Courses & Professional Credentials</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-12">Certificates</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['all', 'ai/ml', 'data science', 'dsa', 'web', 'placement', 'internship'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCertTab(tab)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${certTab === tab ? 'bg-primary-blue text-white shadow-3d' : 'bg-white text-text-secondary border border-border hover:border-primary-blue/30'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-sm hover:shadow-3d transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[16/10] bg-light-bg p-4 flex items-center justify-center group-hover:bg-primary-blue/5 transition-colors relative overflow-hidden">
                    <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center">
                        {cert.image ? (
                          <div className="w-full h-full flex items-center justify-center p-0">
                            <img src={cert.image} alt={cert.title} className="max-w-[220px] max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest text-primary-blue bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                              {cert.cat}
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 border border-border group-hover:border-primary-blue/30 transition-all">
                              {cert.icon}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-primary-blue bg-primary-blue/5 px-3 py-1 rounded-full inline-block">
                              {cert.cat}
                            </div>
                          </>
                        )}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-text-secondary text-[10px] font-black uppercase tracking-widest mb-4">
                        <Calendar size={12} /> {cert.date}
                    </div>
                    <h3 className="text-xl font-black mb-2 text-text-primary group-hover:text-primary-blue transition-colors leading-tight">{cert.title}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6">{cert.platform}</p>
                    
                    <div className="mt-auto grid grid-cols-2 gap-4">
                        <a 
                          href={cert.certLink} 
                          className="py-3.5 bg-primary-blue text-white rounded-xl text-[10px] font-black uppercase tracking-widest text-center shadow-sm hover:bg-primary-light transition-all"
                        >
                          View Certificate
                        </a>
                        <a 
                          href={cert.platformLink} 
                          className="py-3.5 bg-light-bg text-text-primary rounded-xl text-[10px] font-black uppercase tracking-widest text-center border border-border hover:border-primary-blue/30 transition-all"
                        >
                          Platform
                        </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Coding Badges Section */}
      <section id="badges" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Problem Solving & Learning Achievements</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">Coding Badges</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codingBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-sm hover:shadow-3d hover:border-primary-blue/30 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] bg-light-bg p-4 flex items-center justify-center group-hover:bg-primary-blue/5 transition-colors relative overflow-hidden">
                    <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center">
                        {badge.image ? (
                          <div className="w-full h-full flex items-center justify-center p-0">
                            <img src={badge.image} alt={badge.title} className="max-w-[220px] max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        ) : (
                          <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center border border-border group-hover:border-primary-blue/30 transition-all">
                             {React.cloneElement(badge.icon, { size: 40, className: "text-primary-blue" })}
                          </div>
                        )}
                        <div className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-widest text-success-green bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-success-green/20">
                          Verified via profile
                        </div>
                    </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary-blue mb-2">{badge.platform}</div>
                  <h3 className="text-xl font-black mb-3 text-text-primary group-hover:text-primary-blue transition-colors leading-tight">{badge.title}</h3>
                  <p className="text-sm text-text-secondary mb-8 leading-relaxed line-clamp-2">{badge.desc}</p>
                  
                  <div className="mt-auto">
                      <a 
                        href={badge.link} 
                        className="w-full block py-4 bg-primary-blue text-white rounded-xl text-[10px] font-black uppercase tracking-widest text-center shadow-sm hover:bg-primary-light transition-all"
                      >
                        {badge.btnText}
                      </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 bg-light-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Career Highlights</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-12">Achievements</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['all', 'academic', 'technical', 'sports', 'hackathons'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setAchievementTab(tab)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${achievementTab === tab ? 'bg-primary-blue text-white shadow-3d' : 'bg-white text-text-secondary border border-border hover:border-primary-blue/30'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredAchievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`${ach.isTop ? 'lg:col-span-3 border-2 border-primary-blue/30 bg-primary-blue/[0.02]' : ''} p-10 bg-white border border-border rounded-[2.5rem] group hover:border-primary-blue/30 transition-all shadow-sm hover:shadow-3d flex flex-col md:flex-row gap-8 relative overflow-hidden`}
                >
                  <div className={`${ach.isTop ? 'w-20 h-20' : 'w-14 h-14'} shrink-0 bg-primary-blue/5 rounded-2xl flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all`}>
                    {React.cloneElement(ach.icon, { size: ach.isTop ? 40 : 24 })}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                       {ach.isTop && (
                         <span className="px-4 py-1.5 bg-primary-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                           ⭐ Top Achievement
                         </span>
                       )}
                       {!ach.isTop && (
                         <span className="px-3 py-1 bg-primary-blue/5 text-primary-blue text-[8px] font-black uppercase tracking-widest rounded-full border border-primary-blue/10">
                           {ach.cat}
                         </span>
                       )}
                       <h4 className={`${ach.isTop ? 'text-2xl' : 'text-lg'} font-black text-text-primary group-hover:text-primary-blue transition-colors leading-tight`}>{ach.title}</h4>
                    </div>
                    
                    <p className={`${ach.isTop ? 'text-lg' : 'text-sm'} text-text-secondary leading-relaxed mb-6`}>{ach.desc}</p>
                    
                    {ach.isTop && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <ul className="space-y-3">
                          {ach.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-text-secondary font-bold">
                               <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" />
                               {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 content-start">
                          {ach.tags.map((tag, j) => (
                            <span key={j} className="px-4 py-2 bg-primary-blue/5 text-primary-blue text-[10px] font-black uppercase tracking-widest rounded-xl border border-primary-blue/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {ach.stats && (
                      <div className="flex flex-wrap gap-6 mt-6">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-1">DSA</span>
                           <span className="text-lg font-black text-primary-blue">{ach.stats.dsa}+</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-1">Competitive</span>
                           <span className="text-lg font-black text-primary-blue">{ach.stats.cp}+</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-1">Fundamentals</span>
                           <span className="text-lg font-black text-primary-blue">{ach.stats.fundamental}+</span>
                        </div>
                      </div>
                    )}

                    {ach.status && (
                       <div className="mt-6 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-success-green">{ach.status}</span>
                       </div>
                    )}

                    {ach.note && (
                       <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-text-secondary italic">
                          {ach.note}
                       </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Competitions & Innovation</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">Hackathons</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {hackathons.map((hack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-12 pb-12 border-l-2 border-border last:border-0 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary-blue shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"></div>
                
                <div className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-3d hover:translate-x-4 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                    <h3 className="text-2xl font-black text-text-primary">{hack.title}</h3>
                    <span className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${hack.status === 'Ongoing' ? 'bg-success-green/10 text-success-green' : 'bg-primary-blue/10 text-primary-blue'}`}>
                      {hack.status}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                    {hack.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {hack.tags.map((tag, j) => (
                      <span key={j} className="px-4 py-2 bg-light-bg border border-border rounded-xl text-[10px] font-black uppercase tracking-widest text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">Contact</div>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">Contact With Me</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
             {/* Info Card */}
             <div className="lg:col-span-2 p-10 bg-white border border-border rounded-[2.5rem] shadow-sm flex flex-col h-full">
                <div className="aspect-square bg-light-bg rounded-[2rem] mb-10 overflow-hidden flex items-center justify-center">
                   <User size={120} className="text-primary-blue/10" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-text-primary">{personalInfo.shortName}</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">I am available for freelance work and full-time opportunities. Connect with me via and call in my account.</p>
                
                <div className="space-y-4 mb-10">
                   <div className="flex items-center gap-4 text-sm font-bold text-text-secondary">
                      <Phone size={18} className="text-primary-blue" /> +91-XXXXXXXXXX
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold text-text-secondary">
                      <Mail size={18} className="text-primary-blue" /> {personalInfo.email}
                   </div>
                </div>

                <div className="mt-auto">
                   <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6">Find me in</div>
                   <div className="flex gap-4">
                      {[<Linkedin />, <Github />, <Twitter />].map((icon, i) => (
                        <div key={i} className="w-12 h-12 flex items-center justify-center bg-white border border-border rounded-xl text-text-secondary hover:text-primary-blue hover:shadow-3d transition-all cursor-pointer">
                          {icon}
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Form Card */}
             <div className="lg:col-span-3 p-10 bg-white border border-border rounded-[2.5rem] shadow-sm">
                <form className="space-y-8" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been submitted successfully.");
                }}>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Your Name</label>
                         <input type="text" className="w-full bg-light-bg border border-border rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-blue outline-none transition-all" required />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Phone Number</label>
                         <input type="text" className="w-full bg-light-bg border border-border rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-blue outline-none transition-all" />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Email</label>
                      <input type="email" className="w-full bg-light-bg border border-border rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-blue outline-none transition-all" required />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Subject</label>
                      <input type="text" className="w-full bg-light-bg border border-border rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-blue outline-none transition-all" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Your Message</label>
                      <textarea rows={6} className="w-full bg-light-bg border border-border rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-blue outline-none transition-all" required></textarea>
                   </div>
                   <button type="submit" className="w-full py-5 bg-primary-blue text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-3d hover:bg-primary-light transition-all flex items-center justify-center gap-3">
                      Send Message <Send size={18} />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-light-bg">
        <div className="container mx-auto px-6 text-center">
           <div className="text-3xl font-black text-text-primary mb-6">
             <span className="text-primary-blue">D</span>EVANSHI.
           </div>
           <p className="text-text-secondary text-sm mb-10 max-w-sm mx-auto">Aspiring Data Scientist and AI Engineer dedicated to transforming data into actionable insights.</p>
           <div className="flex justify-center flex-wrap gap-8 mb-16">
             {navLinks.map(link => (
               <button key={link.name} onClick={() => scrollTo(link.href)} className="text-xs font-black uppercase tracking-widest text-text-secondary hover:text-primary-blue transition-all">
                 {link.name}
               </button>
             ))}
           </div>
           <div className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/50">
             © 2026 DEVANSHI JITENDRABHAI CHAUHAN. ALL RIGHTS RESERVED.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
