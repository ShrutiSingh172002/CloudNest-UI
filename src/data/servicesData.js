// src/data/servicesData.js
import {
  Cloud,
  Globe,
  Wrench,
  Rocket,
  Zap,
  ShieldCheck,
  Atom,
  Laptop,
  ShoppingCart,
  Smartphone,
  Link2,
  Bot,
  Eye,
  BarChart2,
  FileText,
  Settings,
  Brain,
  Bug,
  Flame,
  Search,
  Lock,
  ClipboardList,
  AlarmCheck,
  TrendingUp,
  Megaphone,
  PenTool,
  Target,
  Mail,
  PieChart,
  Apple,

  Paintbrush,
  AppWindow,
  TestTube2,
} from 'lucide-react';

export const servicesData = {
  "Cloud Services": [
    { name: "AWS Solutions", desc: "Complete AWS infrastructure setup", icon: <Cloud size={24} /> },
    { name: "Azure Integration", desc: "Microsoft Azure cloud services", icon: <Globe size={24} /> },
    { name: "Google Cloud", desc: "GCP deployment and management", icon: <Wrench size={24} /> },
    { name: "Cloud Migration", desc: "Seamless cloud transition", icon: <Rocket size={24} /> },
    { name: "DevOps & CI/CD", desc: "Automated deployment pipelines", icon: <Zap size={24} /> },
    { name: "Cloud Security", desc: "Advanced cloud protection", icon: <ShieldCheck size={24} /> }
  ],
  "Web Development": [
    { name: "React Development", desc: "Modern React applications", icon: <Atom size={24} /> },
    { name: "Full-Stack Solutions", desc: "End-to-end web development", icon: <Laptop size={24} /> },
    { name: "E-commerce Sites", desc: "Online store development", icon: <ShoppingCart size={24} /> },
    { name: "Progressive Web Apps", desc: "Fast, app-like experiences", icon: <Smartphone size={24} /> },
    { name: "API Development", desc: "RESTful and GraphQL APIs", icon: <Link2 size={24} /> },
    { name: "Website Maintenance", desc: "Ongoing support and updates", icon: <Wrench size={24} /> }
  ],
  "AI & Machine Learning": [
    { name: "ChatGPT Integration", desc: "AI-powered chat solutions", icon: <Bot size={24} /> },
    { name: "Computer Vision", desc: "Image and video analysis", icon: <Eye size={24} /> },
    { name: "Predictive Analytics", desc: "Data-driven insights", icon: <BarChart2 size={24} /> },
    { name: "Natural Language Processing", desc: "Text analysis and generation", icon: <FileText size={24} /> },
    { name: "AI Automation", desc: "Intelligent process automation", icon: <Settings size={24} /> },
    { name: "Machine Learning Models", desc: "Custom ML solutions", icon: <Brain size={24} /> }
  ],
  "Cybersecurity": [
    { name: "Antivirus Solutions", desc: "Advanced threat protection", icon: <Bug size={24} /> },
    { name: "Firewall Management", desc: "Network security setup", icon: <Flame size={24} /> },
    { name: "Penetration Testing", desc: "Security vulnerability assessment", icon: <Search size={24} /> },
    { name: "Data Encryption", desc: "Secure data protection", icon: <Lock size={24} /> },
    { name: "Security Audits", desc: "Comprehensive security reviews", icon: <ClipboardList size={24} /> },
    { name: "Incident Response", desc: "24/7 security monitoring", icon: <AlarmCheck size={24} /> }
  ],
  "Digital Marketing": [
    { name: "SEO Optimization", desc: "Search engine visibility", icon: <TrendingUp size={24} /> },
    { name: "Social Media Management", desc: "Multi-platform presence", icon: <Megaphone size={24} /> },
    { name: "Content Marketing", desc: "Engaging content creation", icon: <PenTool size={24} /> },
    { name: "PPC Advertising", desc: "Targeted ad campaigns", icon: <Target size={24} /> },
    { name: "Email Marketing", desc: "Automated email campaigns", icon: <Mail size={24} /> },
    { name: "Analytics & Reporting", desc: "Performance tracking", icon: <PieChart size={24} /> }
  ],
  "Mobile Development": [
    { name: "iOS Development", desc: "Native iPhone apps", icon: <Apple size={24} /> },
    { name: "Android Development", desc: "Native Android apps", icon: <Smartphone size={24} /> },

    { name: "React Native", desc: "Cross-platform mobile apps", icon: <Atom size={24} /> },
    { name: "Flutter Development", desc: "Google's UI toolkit", icon: <Paintbrush size={24} /> },
    { name: "App Store Optimization", desc: "Improve app visibility", icon: <AppWindow size={24} /> },
    { name: "Mobile Testing", desc: "Quality assurance testing", icon: <TestTube2 size={24} /> }
  ]
};
