import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Mail, ArrowUpRight, Download, Menu, X,
  Code2, Database, Globe, Terminal, ExternalLink, GitFork
} from 'lucide-react';

import './styles.css';

const skills = [
  { name: 'JavaScript', category: 'Frontend', desc: 'React, ES6+, DOM', icon: <Code2 size={20} /> },
  { name: 'Python', category: 'Backend', desc: 'Django, APIs, Scripts', icon: <Terminal size={20} /> },
  { name: 'HTML & CSS', category: 'Frontend', desc: 'Responsive UI, Tailwind', icon: <Globe size={20} /> },
  { name: 'Java', category: 'Backend', desc: 'Spring Boot, OOP', icon: <Database size={20} /> },
  { name: 'SQL / NoSQL', category: 'Database', desc: 'PostgreSQL, MongoDB', icon: <Database size={20} /> },
  { name: 'Git & GitHub', category: 'Tools', desc: 'Version control, CI/CD', icon: <Terminal size={20} /> },
];

const projects = [
  {
    title: 'Blue Collar Services App',
    desc: 'A platform connecting users with local service professionals (plumbers, electricians). Features search, location mapping, and service provider profiles.',
    tags: ['HTML/CSS', 'JavaScript', 'Python'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
    link: 'https://blue-collar-igoy.vercel.app/',
    github: 'https://github.com/muntasirahmed1212-lang/blue_collar'
  },
  {
    title: 'IoT Performance Dashboard',
    desc: 'A modern, responsive dashboard for monitoring connected devices, analyzing real-time metrics, and optimizing system performance.',
    tags: ['React', 'CSS', 'APIs'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#',
    github: '#'
  },
  {
    title: 'Developer Utility Suite',
    desc: 'A collection of developer tools and utilities bundled into a fast web app, demonstrating advanced JavaScript interactions.',
    tags: ['JavaScript', 'DOM', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    link: '#',
    github: '#'
  }
];

// Hook for scroll animations
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function Reveal({ children, className = '', delay = '' }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} ${delay} ${className}`}>
      {children}
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const nav = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header>
        <div className="nav wrap">
          <button className="logo" onClick={() => nav('#home')}>
            SM<span>.</span>
          </button>

          <nav className={open ? 'show' : ''}>
            {[
              ['#about', 'About'],
              ['#skills', 'Skills'],
              ['#projects', 'Projects'],
              ['#contact', 'Contact']
            ].map(([id, title]) => (
              <button key={id} onClick={() => nav(id)}>
                {title}
              </button>
            ))}
          </nav>

          <div className="navActions">
            <a href="mailto:muntasirahmed1212@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <button className="hamb" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero wrap">
          <div className="heroCopy">
            <div className="eyebrow">
              <i /> Available for work
            </div>
            
            <Reveal>
              <h1>
                Hi, I'm Montashir.<br />
                <span>Full-Stack Web Developer.</span>
              </h1>
            </Reveal>

            <Reveal delay="delay-1">
              <p className="lead">
                I build fast, accessible, and scalable web applications. 
                I specialize in turning complex problems into elegant, user-centric digital experiences.
              </p>
            </Reveal>

            <Reveal delay="delay-2">
              <div className="buttons">
                <button className="primary" onClick={() => nav('#projects')}>
                  View Projects
                </button>
                <a className="secondary" href="#resume" aria-label="Download Resume">
                  <Download size={17} /> Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay="delay-3">
              <div className="socials">
                <a href="https://github.com/muntasirahmed1212-lang" target="_blank" rel="noreferrer">
                  <span className="socialTextIcon">GH</span> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  <span className="socialTextIcon">IN</span> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* CODE CARD */}
          <Reveal delay="delay-1">
            <div className="heroCard">
              <div className="codebar">
                <span />
                <span />
                <span />
                <small>developer.json</small>
              </div>
              <pre>
{`{
  "name": "Montashir Ahmed",
  "role": "Software Developer",
  "degree": "BCA",
  "focus": [
    "Web Applications",
    "Frontend Architecture",
    "Creative UI/UX"
  ],
  "status": "ready_to_hire"
}`}
              </pre>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section id="about" className="section wrap">
          <Reveal>
            <div className="sectionHead">
              <span>01</span>
              <h2>About me</h2>
            </div>
          </Reveal>

          <div className="aboutGrid">
            <Reveal delay="delay-1">
              <h3>
                Curious mind.<br />
                <em>Practical builder.</em>
              </h3>
              <p>
                I’m a BCA graduate with a strong foundation in programming, web technologies, and database management. I enjoy turning ideas into simple, functional products and continuously improving how I build them.
              </p>
              <p>
                I'm currently looking for opportunities where I can apply my skills, learn from experienced teams, and contribute to meaningful software that impacts users directly.
              </p>
            </Reveal>

            <Reveal delay="delay-2">
              <div className="facts">
                <div>
                  <b>2023–2026</b>
                  <span>BCA · Brainware University</span>
                </div>
                <div>
                  <b>6.8 CGPA</b>
                  <span>Academic performance</span>
                </div>
                <div>
                  <b>India</b>
                  <span>Open to remote/onsite opportunities</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section alt">
          <div className="wrap">
            <Reveal>
              <div className="sectionHead">
                <span>02</span>
                <h2>Technical Arsenal</h2>
              </div>
            </Reveal>

            <div className="skillGrid">
              {skills.map((skill, index) => (
                <Reveal delay={`delay-${(index % 3) + 1}`} key={skill.name}>
                  <div className="skill">
                    <div className="skillIcon">
                      {skill.icon}
                    </div>
                    <div>
                      <b>{skill.name}</b>
                      <small>{skill.desc}</small>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section wrap">
          <Reveal>
            <div className="sectionHead">
              <span>03</span>
              <h2>Selected projects</h2>
            </div>
          </Reveal>

          <div className="projectGrid">
            {projects.map((project, index) => (
              <Reveal delay={`delay-${(index % 3) + 1}`} key={project.title}>
                <article className="project">
                  <div className="projectVisual">
                    <img src={project.image} alt={project.title} />
                    <div className="projectLinks">
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Source">
                        <GitFork size={18} color="#fff" />
                      </a>
                      <a href={project.link} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <ExternalLink size={18} color="#fff" />
                      </a>
                    </div>
                  </div>

                  <div className="projectBody">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="wrap contactInner">
            <Reveal>
              <div>
                <div className="sectionHead">
                  <span>04</span>
                  <h2>Let's build something.</h2>
                </div>
                <p>
                  Have an opportunity, project, or just want to say hello? I'm currently open for new opportunities.
                </p>

                <div className="contactLinks">
                  <a href="mailto:muntasirahmed1212@gmail.com">
                    <Mail /> muntasirahmed1212@gmail.com
                  </a>
                  <a href="https://github.com/muntasirahmed1212-lang" target="_blank" rel="noreferrer">
                    <GitFork /> github.com/muntasirahmed1212-lang
                  </a>
                </div>
              </div>
            </Reveal>

            {/* CONTACT FORM */}
            <Reveal delay="delay-1">
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label>
                  Name
                  <input name="name" required placeholder="John Doe" />
                </label>
                <label>
                  Email
                  <input name="email" required type="email" placeholder="john@example.com" />
                </label>
                <label>
                  Message
                  <textarea name="message" required placeholder="Tell me about your project or role..." />
                </label>
                <button className="primary" type="submit">
                  {sent ? 'Message Sent ✓' : 'Send message'}
                  {!sent && <ArrowUpRight size={18} />}
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <span>© 2026 S M Montashir Ahmed</span>
          <span>
            Built with React & Vite. Hosted on GitHub Pages.
          </span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
