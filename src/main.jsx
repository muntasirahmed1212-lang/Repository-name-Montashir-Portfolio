import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Code2,
  Database,
  Globe,
  Terminal,
  ExternalLink
} from 'lucide-react';

import './styles.css';

const skills = [
  ['Java', 'Strong foundation'],
  ['JavaScript', 'Frontend & logic'],
  ['Python', 'Automation & scripting'],
  ['PHP', 'Web development'],
  ['HTML & CSS', 'Responsive UI'],
  ['Databases', 'DB management'],
  ['Git & GitHub', 'Version control'],
  ['MS Office', 'Word, Excel & Office']
];

const projects = [
  {
    title: 'IoT Performance Dashboard',
    desc: 'A clean dashboard concept for monitoring connected devices, metrics and system performance.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: '◈',
    link: '#'
  },
  {
    title: 'Cloud vs On-Premise Study',
    desc: 'A presentation and analysis comparing deployment models, cost, scalability and performance.',
    tags: ['Research', 'Cloud', 'Analysis'],
    icon: '☁',
    link: '#'
  },
  {
    title: 'Developer Utility App',
    desc: 'A practical web utility demonstrating JavaScript interactions, responsive layouts and reusable UI.',
    tags: ['JavaScript', 'CSS', 'API'],
    icon: '⌘',
    link: '#'
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const nav = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });

    setOpen(false);
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header>
        <div className="nav wrap">

          <button
            className="logo"
            onClick={() => nav('#home')}
          >
            SM<span>.</span>
          </button>

          <nav className={open ? 'show' : ''}>
            {[
              ['#about', 'About'],
              ['#skills', 'Skills'],
              ['#projects', 'Projects'],
              ['#contact', 'Contact']
            ].map(([id, title]) => (
              <button
                key={id}
                onClick={() => nav(id)}>
                {title}
              </button>
            ))}
          </nav>

          <div className="navActions">

            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <button
              className="hamb"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>

          </div>

        </div>
      </header>


      <main>

        {/* HERO */}
        <section
          id="home"
          className="hero wrap"
        >

          <div className="heroCopy">

            <div className="eyebrow">
              <i />
              Available for opportunities
            </div>

            <h1>
              Hi, I'm <span>Montashir.</span>
              <br />
              I build things for the web.
            </h1>

            <p className="lead">
              BCA graduate and developer focused on building
              clean, useful and reliable digital experiences
              with modern web technologies.
            </p>

            <div className="buttons">

              <button
                className="primary"
                onClick={() => nav('#projects')}
              >
                View my work
                <ArrowUpRight size={18} />
              </button>

              <a
                className="secondary"
                href="/resume.pdf"
              >
                <Download size={17} />
                Resume
              </a>

            </div>


            {/* SOCIAL LINKS */}
            <div className="socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="socialTextIcon">
                  GH
                </span>
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="socialTextIcon">
                  in
                </span>
                LinkedIn
              </a>

            </div>

          </div>


          {/* CODE CARD */}
          <div className="heroCard">

            <div className="codebar">
              <span />
              <span />
              <span />
              <small>developer.js</small>
            </div>

            <pre>
{`const developer = {
  name: "Montashir",
  degree: "BCA",
  focus: [
    "Web Development",
    "Problem Solving",
    "Clean UI"
  ],
  status: "open_to_work"
};`}
            </pre>

          </div>

        </section>


        {/* ABOUT */}
        <section
          id="about"
          className="section wrap"
        >

          <div className="sectionHead">
            <span>01</span>
            <h2>About me</h2>
          </div>

          <div className="aboutGrid">

            <div>

              <h3>
                Curious mind.
                <em> Practical builder.</em>
              </h3>

              <p>
                I’m a BCA graduate with a strong foundation
                in programming, web technologies and database
                management. I enjoy turning ideas into simple,
                functional products and continuously improving
                how I build them.
              </p>

              <p>
                I'm currently looking for opportunities where
                I can apply my skills, learn from experienced
                teams and contribute to meaningful software.
              </p>

            </div>


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
                <span>Open to opportunities</span>
              </div>

            </div>

          </div>

        </section>


        {/* SKILLS */}
        <section
          id="skills"
          className="section alt"
        >

          <div className="wrap">

            <div className="sectionHead">
              <span>02</span>
              <h2>Skills & tools</h2>
            </div>


            <div className="skillGrid">

              {skills.map(([name, description], index) => (

                <div
                  className="skill"
                  key={name}
                >

                  <div className="skillIcon">

                    {index < 2 ? (
                      <Code2 size={19} />
                    ) : index < 4 ? (
                      <Terminal size={19} />
                    ) : index < 6 ? (
                      <Database size={19} />
                    ) : (
                      <Globe size={19} />
                    )}

                  </div>


                  <div>
                    <b>{name}</b>
                    <small>{description}</small>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* PROJECTS */}
        <section
          id="projects"
          className="section wrap"
        >

          <div className="sectionHead">
            <span>03</span>
            <h2>Selected projects</h2>
          </div>


          <div className="projectGrid">

            {projects.map((project) => (

              <article
                className="project"
                key={project.title}
              >

                <div className="projectVisual">

                  <span>
                    {project.icon}
                  </span>

                  <a
                    href={project.link}
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>


                <div className="projectBody">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.desc}
                  </p>


                  <div className="tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* CONTACT */}
        <section
          id="contact"
          className="contact"
        >
  <h2>Contact Me</h2>
  <p>Feel free to get in touch with me.</p>
  <a href="mailto:muntasirahmed1212@gmail.com">
    muntasirahmed1212@gmail.com
  </a>
          <div className="wrap contactInner">

            <div>

              <div className="sectionHead">
                <span>04</span>
                <h2>Let's build something.</h2>
              </div>

              <p>
                Have an opportunity, project or just want
                to say hello? Send me a message.
              </p>


              <div className="contactLinks">

                <a
                  href="mailto:your.email@example.com"
                >
                  <Mail />
                  your.email@example.com
                </a>


                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="socialTextIcon">
                    GH
                  </span>
                  github.com/yourusername
                </a>

              </div>

            </div>


            {/* CONTACT FORM */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >

              <label>
                Name

                <input
                  required
                  placeholder="Your name"
                />
              </label>


              <label>
                Email

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                />
              </label>


              <label>
                Message

                <textarea
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                />
              </label>


              <button
                className="primary"
                type="submit"
              >
                {sent
                  ? 'Message ready to send ✓'
                  : 'Send message'}

                <ArrowUpRight size={18} />
              </button>

            </form>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="wrap">

          <span>
            © 2026 S M Montashir Ahmed
          </span>

          <span>
            Built with React & curiosity.
          </span>

        </div>

      </footer>

    </div>
  );
}


createRoot(
  document.getElementById('root')
).render(
  <App />
);
