
import React, { useState, useEffect, useRef } from 'react';
import {
    Menu, X, Sun, Moon, ArrowDown, ExternalLink, Github, Linkedin,
    Mail, MessageCircle, Send, Terminal, Cpu, Zap, Globe,
    Brain, Eye, MessageSquare, Code, Loader2, CheckCircle2, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { PROJECTS, SKILLS, TECH_STACK } from './constants';

const Background = () => {
    return (
        <div className="mesh-bg">
            <motion.div
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mesh-gradient top-[-200px] left-[-200px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 100, 0],
                    y: [0, 50, -50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="mesh-gradient bottom-[-200px] right-[-200px] opacity-50"
            />
        </div>
    );
};

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Work', href: '#work' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all border ${scrolled ? 'bg-black/40 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'}`}>
                    <a href="#home" className="text-sm font-display font-bold tracking-tight text-white dark:text-white">
                        DK <span className="text-primary opacity-50">/</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="text-[11px] font-medium text-slate-500 hover:text-primary transition-colors uppercase tracking-[0.15em]">
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 text-slate-500 hover:text-primary transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <a href="#contact" className="px-5 py-2 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg">
                            Hiring?
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleDarkMode} className="text-slate-500">
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-500">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-white/10 py-8 px-8 flex flex-col gap-6 md:hidden shadow-2xl"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-4 bg-primary text-white text-center rounded-2xl text-[10px] font-bold uppercase tracking-widest"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            onClick={() => onClick(project)}
            className="bento-card group rounded-[2rem] overflow-hidden cursor-pointer flex flex-col h-full shadow-sm"
        >
            <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                {project.video ? (
                    <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                )}
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">{project.category}</span>
                <h3 className="font-display text-xl font-bold text-white dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm font-light line-clamp-2 mb-6 leading-relaxed">
                    {project.problem}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest">
                    View Case Study <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

const Toast = ({ message, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 right-10 glass px-6 py-4 rounded-2xl flex items-center gap-4 z-[100] shadow-2xl"
        >
            <CheckCircle2 size={18} className="text-accent" />
            <span className="text-sm font-medium dark:text-white">{message}</span>
            <button onClick={onClose} className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full"><X size={14} /></button>
        </motion.div>
    );
};

export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPlayingVideo, setIsPlayingVideo] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState(null);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 1500));
        setIsSubmitting(false);
        setToast("Message sent successfully!");
        setTimeout(() => setToast(null), 4000);
        e.target.reset();
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="relative font-sans text-slate-500 dark:text-slate-400 selection:bg-primary/30 transition-colors duration-500 dark:bg-darker bg-slate-50 min-h-screen">
            <Background />
            <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
            <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left" style={{ scaleX }} />

            <main className="relative z-10">
                {/* Hero */}
                <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 mb-10"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Available for high-impact projects
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-display text-5xl md:text-[7rem] font-bold text-black dark:text-white leading-[0.9] tracking-tight mb-12"
                        >
                            Building the next <br /> <span className="text-slate-400 dark:text-slate-600">billion users.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light mb-16 leading-relaxed"
                        >
                            I’m Destiny Kingsley. A Senior AI Engineer specializing in shipping machine learning solutions that actually solve real problems for emerging markets.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <a href="#work" className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-2xl">
                                Explore Work
                            </a>
                            <div className="flex gap-8 items-center text-slate-400 hover:text-primary dark:text-slate-500">
                                <a href="https://linkedin.com/in/destiny-kingsley" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-white transition-colors">
                                    <Linkedin size={22} strokeWidth={1.5} />
                                </a>
                                <a href="https://github.com/ahm-destino" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-white transition-colors">
                                    <Github size={22} strokeWidth={1.5} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                    >
                        <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-slate-400 dark:text-slate-600">Scroll Down</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                    </motion.div>
                </section>

                {/* Work / Projects */}
                <section id="work" className="py-40 px-6 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-6">
                        <h2 className="font-display text-5xl font-bold text-black dark:text-white tracking-tight">Select Works</h2>
                        <p className="max-w-sm text-slate-600 dark:text-slate-500 font-light">A curation of systems built for microfinance, logistics, and digital accessibility.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={(p) => setSelectedProject(p)} />
                        ))}
                    </div>
                </section>

                {/* Skills - Bento Style */}
                <section id="skills" className="py-40 px-6 max-w-7xl mx-auto">
                    <h2 className="font-display text-5xl font-bold text-black dark:text-white tracking-tight text-center mb-24">Core Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {SKILLS.map((skill, idx) => {
                            const Icon = { Brain, Eye, MessageSquare, Code }[skill.icon];
                            return (
                                <div key={idx} className="bento-card p-10 rounded-[2.5rem] flex flex-col justify-between group shadow-sm">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-transform">
                                        {Icon && <Icon size={24} strokeWidth={1.5} />}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-display text-lg font-bold mb-3">{skill.name}</h3>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">{skill.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* About */}
                <section id="about" className="py-40 px-6 max-w-5xl mx-auto text-center">
                    <h2 className="font-display text-5xl font-bold text-black dark:text-white tracking-tight mb-16">The Philosophy</h2>
                    <p className="text-3xl md:text-5xl font-display font-medium text-slate-500 dark:text-slate-400 leading-tight mb-20 tracking-tight">
                        “I build for the <span className="text-black dark:text-white italic">real world</span>. Tech shouldn't just be pretty—it needs to work in low-bandwidth, high-demand African markets.”
                    </p>
                    <div className="grid md:grid-cols-3 gap-12 border-t border-black/5 dark:border-white/10 pt-20">
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Efficiency</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-500 font-light">Optimized ML models that run on edge devices without needing a supercomputer.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Localization</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-500 font-light">Deep focus on local context, languages, and user behavior patterns.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Scalability</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-500 font-light">Architecture designed to handle the next 10 million users with zero friction.</p>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-40 px-6 max-w-7xl mx-auto">
                    <div className="bento-card rounded-[3rem] p-12 md:p-24 grid lg:grid-cols-2 gap-20 overflow-hidden relative shadow-xl">
                        <div className="relative z-10">
                            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">Let’s talk <br /> <span className="text-slate-400">innovation.</span></h2>
                            <p className="text-lg text-slate-300 font-light mb-16 leading-relaxed">
                                Whether you’re a founder looking to scale or a recruiter looking for a senior lead—I’m always open to discussing new opportunities.
                            </p>

                            <div className="space-y-8">
                                <a href="mailto:destiny@example.com" className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary transition-all shadow-sm">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-lg font-medium text-white group-hover:text-primary transition-colors tracking-tight">destinoboss@gmail.com</span>
                                </a>
                                <div className="flex gap-6 items-center">
                                    <a href="https://linkedin.com/in/destiny-kingsley" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-xl hover:text-primary transition-colors"><Linkedin size={20} /></a>
                                    <a href="https://github.com/ahm-destino" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/5 dark:bg-white/5 rounded-xl hover:text-primary transition-colors"><Github size={20} /></a>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleContactSubmit} className="space-y-10 relative z-10">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 transition-all text-white font-light placeholder:text-slate-500" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                    <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 transition-all text-white font-light placeholder:text-slate-500" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea required rows={4} placeholder="What’s on your mind?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 transition-all text-white font-light placeholder:text-slate-500 resize-none"></textarea>
                            </div>
                            <button
                                disabled={isSubmitting}
                                className="w-full py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all disabled:opacity-50 shadow-lg"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin mx-auto" /> : "Shoot Message"}
                            </button>
                        </form>
                    </div>
                </section>

                <footer className="py-20 px-6 border-t border-black/5 dark:border-white/10 text-center">
                    <p className="text-[9px] font-bold text-slate-400 dark:text-slate-700 uppercase tracking-[0.6em]">
                        Destiny Kingsley <span className="text-black/20 dark:text-white/20 mx-4">/</span> 2026 Portfolio
                    </p>
                </footer>
            </main>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl" onClick={() => { setSelectedProject(null); setIsPlayingVideo(false); }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                            onClick={e => e.stopPropagation()}
                            className="w-full max-w-4xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-[3rem] overflow-hidden shadow-3xl"
                        >
                            <div className="grid md:grid-cols-2">
                                <div className="h-64 md:h-auto overflow-hidden bg-black flex items-center justify-center">
                                    {isPlayingVideo && selectedProject.video ? (
                                        <video
                                            src={selectedProject.video}
                                            controls
                                            autoPlay
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <img
                                            // src={selectedProject.image.endsWith('.mp4') ? '/projects/forex-bot.png' : selectedProject.image}
                                            src={selectedProject.video}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-12 md:p-16">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-6 block">{selectedProject.category}</span>
                                    <h2 className="font-display text-4xl font-bold text-black dark:text-white mb-8 tracking-tight">{selectedProject.title}</h2>
                                    <div className="space-y-8 mb-12">
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase mb-3">Goal</h4>
                                            <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">{selectedProject.problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase mb-3">Impact</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.impact.map((imp, idx) => (
                                                    <li key={idx} className="text-sm text-slate-500 font-light flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {imp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => {
                                                if (selectedProject.video) {
                                                    setIsPlayingVideo(true);
                                                } else {
                                                    window.open(selectedProject.demo || '#', '_blank');
                                                }
                                            }}
                                            className="flex-1 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-md"
                                        >
                                            View Project
                                        </button>
                                        <button
                                            onClick={() => window.open(selectedProject.github || '#', '_blank')}
                                            className="px-6 py-4 border border-black/10 dark:border-white/10 rounded-2xl text-slate-500 hover:text-primary transition-all shadow-sm"
                                        >
                                            <Github size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {toast && <Toast message={toast} onClose={() => setToast(null)} />}
            </AnimatePresence>
        </div>
    );
}
