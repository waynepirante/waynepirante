import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  MapPin,
  Menu,
  PenTool,
  Rocket,
  Search,
  Lightbulb,
  X,
  Sparkles,
} from "lucide-react";

import "./App.css";

const info = {
  firstName: "JOHN WAYNE",
  lastName: "PIRANTE",
  email: "pirante_johnwayne@fbc.ph.education",
  location: "Philippines",
  photo: "/image.png",
};

const chips = [
  { label: "CSS", name: "CSS", x: 30, y: 20, r: -12, depth: 26, tone: "blue" },
  { label: "HTML", name: "HTML", x: 72, y: 14, r: 10, depth: 18, tone: "gold" },
  { label: "Pr", name: "Premiere Pro", x: 33, y: 58, r: 8, depth: 34, tone: "blue" },
  { label: "PHP", name: "PHP", x: 70, y: 44, r: -8, depth: 22, tone: "gold" },
  { label: "PS", name: "Photoshop", x: 58, y: 72, r: 12, depth: 30, tone: "red" },
];

const projects = [
  {
    title: "LearnSpace",
    category: "E-learning platform",
    description:
      "Students explore lessons, take quizzes, and track their learning progress.",
    tech: ["React", "Supabase", "CSS"],
    theme: "dark",
    heading: "Learn at your own pace",
  },
  {
    title: "School Services System",
    category: "Systems integration",
    description:
      "Connects student enrollment, library services, and notifications in one system.",
    tech: ["PHP", "MySQL", "RabbitMQ"],
    theme: "light",
    heading: "One school, one system",
  },
  {
    title: "Bible Study Scheduler",
    category: "Web application",
    description:
      "Organizes Bible study sessions and campus ministry activities.",
    tech: ["PHP", "MySQL", "JavaScript"],
    theme: "red",
    heading: "Plan every session",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "MySQL",
  "Supabase",
  "Photoshop",
  "Premiere Pro",
  "UI/UX Design",
];

const process = [
  {
    icon: Search,
    title: "Discover",
    text: "Understand the goal, the audience, and what the project needs.",
  },
  {
    icon: Lightbulb,
    title: "Ideate",
    text: "Plan, sketch, and shape the right concept.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Craft clean visuals with a focus on user experience.",
  },
  {
    icon: Code2,
    title: "Develop",
    text: "Build fast, responsive, and reliable websites.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    text: "Test, polish, and launch with care.",
  },
];

const navItems = ["Work", "Skills", "Music", "Contact"];

const highlights = [
  "Featured projects",
  "Tools & skills",
  "Goal: pro developer",
];

const musicGallery = [
  {
    title: "Behind the Drums",
    category: "RHYTHM & PRAISE",
    description: "Keeping the rhythm and serving with every beat.",
    image:
      "https://images.unsplash.com/photo-1588032786045-59cefda005c0?auto=format&fit=crop&w=1400&q=85",
    alt: "Drummer playing a drum set on stage",
    credit: "Aliane Schwartzhaupt",
    source:
      "https://unsplash.com/photos/man-playing-drum-set-on-stage-QdmUva6qBTk",
    style: "drums",
  },
  {
    title: "Moments of Worship",
    category: "ONE HEART. ONE VOICE.",
    description: "A space to worship, sing, and give all the glory to God.",
    image:
      "https://images.unsplash.com/photo-1660834772989-c15d049c35d7?auto=format&fit=crop&w=1600&q=85",
    alt: "Worship team and congregation at a church service",
    credit: "Nathan Mullet",
    source:
      "https://unsplash.com/photos/a-group-of-people-on-a-stage-with-a-band-playing-giUXRlcEqCY",
    style: "worship",
  },
  {
    title: "Strings & Sound",
    category: "GUITAR & MELODY",
    description: "Finding expression through guitar, melody, and music.",
    image:
      "https://images.unsplash.com/photo-1712132810776-0d2f0377f95b?auto=format&fit=crop&w=1400&q=85",
    alt: "Musician playing an electric guitar under stage lights",
    credit: "Thirdy Bobiles",
    source:
      "https://unsplash.com/photos/a-person-playing-a-guitar-on-a-stage-0Dw6HwCzOWs",
    style: "guitar",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoOk, setPhotoOk] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sendStatus, setSendStatus] = useState("");

  function handleContactChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setSendStatus("");
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject);

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Message:\n${form.message}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(info.email)}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(gmailUrl, "_blank");

    setSendStatus(
      "Your Gmail message is ready. Please review and click Send in Gmail."
    );
  }

  function handleSitePointerMove(event) {
    event.currentTarget.style.setProperty(
      "--cursor-x",
      `${event.clientX}px`
    );

    event.currentTarget.style.setProperty(
      "--cursor-y",
      `${event.clientY}px`
    );
  }

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    event.currentTarget.style.setProperty("--mx", x.toFixed(3));
    event.currentTarget.style.setProperty("--my", y.toFixed(3));
  }

  return (
    <div className="site" onPointerMove={handleSitePointerMove}>
      {/* NAVIGATION */}
      <header className="topbar">
        <a className="brand" href="#top">
          <strong>WEB DEVELOPER</strong>
          <span>Digital creator</span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <span className="freelance">
          Open to opportunities <Sparkles size={13} />
        </span>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="top" onPointerMove={handlePointerMove}>
        <h1 className="hero-giant" aria-hidden="true">
          PORTFOLIO
        </h1>

        <div className="hero-photo">
          {photoOk ? (
            <img
              src={info.photo}
              alt={`${info.firstName} ${info.lastName}`}
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div className="photo-placeholder">
              <span className="ph-head" />
              <span className="ph-body" />
              <em>Check public/image.png</em>
            </div>
          )}
        </div>

        {chips.map((chip) => (
          <div
            key={chip.name}
            className={`chip chip-${chip.tone}`}
            title={chip.name}
            style={{
              "--x": chip.x,
              "--y": chip.y,
              "--r": `${chip.r}deg`,
              "--depth": chip.depth,
            }}
          >
            <span>{chip.label}</span>
          </div>
        ))}

        <div className="hero-intro">
          <p className="script">Hello, I'm</p>

          <h2 className="name">
            {info.firstName}
            <br />
            {info.lastName}
          </h2>

          <p className="role">
            FRONTEND DEVELOPER &
            <br />
            WEB DESIGNER
          </p>

          <p className="bio">
            I build modern, user-focused websites that combine clean code
            with thoughtful design. Still learning, always improving, and
            excited to make things that work well and look great.
          </p>

          <p className="where">
            <MapPin size={14} /> {info.location}
          </p>
        </div>

        <p className="hero-tagline">
          <Sparkles size={16} />
          <span>
            Turning ideas into
            <br />
            useful digital experiences.
          </span>
        </p>

        <ul className="stats" aria-label="Portfolio highlights">
          {highlights.map((label) => (
            <li key={label}>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="block" id="work">
        <div className="block-head">
          <h2>SELECTED PROJECTS</h2>
          <span className="rule" />

          <a href="#contact" className="view-all">
            Start a project <ArrowRight size={16} />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className={`mock mock-${project.theme}`}>
                <div className="mock-bar">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="mock-body">
                  <h3>{project.heading}</h3>

                  <div className="mock-lines">
                    <b />
                    <b />
                    <b />
                  </div>

                  <span className="mock-btn" />
                </div>
              </div>

              <div className="project-meta">
                <span className="project-num">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{project.title}</h3>
                  <small>{project.category}</small>
                </div>

                <ArrowUpRight size={22} className="project-arrow" />
              </div>

              <p>{project.description}</p>

              <ul className="tech">
                {project.tech.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* GRADIENT SKILLS */}
      <section className="band" id="skills">
        <span className="band-giant" aria-hidden="true">
          CREATOR
        </span>

        <p className="band-quote q1">
          “From idea to screen.”
        </p>

        <p className="band-quote q2">
          “Creativity in every line of code.”
        </p>

        <div className="band-content">
          <h2>Skills &amp; technologies</h2>

          <ul className="skill-tiles">
            {skills.map((skill, index) => (
              <li
                key={skill}
                style={{
                  "--tilt": `${
                    (index % 2 ? 1 : -1) * (2 + (index % 3))
                  }deg`,
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MUSIC AND WORSHIP GALLERY */}
      <section className="music-showcase" id="music">
        <div className="music-showcase-head">
          <div>
            <p className="music-eyebrow">
              A LITTLE MORE ABOUT ME
            </p>

            <h2>
              WORSHIP. <span>RHYTHM.</span>
              <br />
              GUITAR.
            </h2>
          </div>

          <p className="music-intro">
            Beyond technology, I enjoy music and worship. These
            moments remind me to stay creative, grounded, and inspired.
          </p>
        </div>

        <div className="music-grid">
          {musicGallery.map((item) => (
            <article
              className={`music-card music-card-${item.style}`}
              key={item.title}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <div className="music-card-overlay" />

              <div className="music-card-content">
                <span className="music-card-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <a
                className="music-credit"
                href={item.source}
                target="_blank"
                rel="noreferrer"
              >
                Photo by {item.credit}
              </a>
            </article>
          ))}
        </div>

        <div className="music-showcase-footer">
          <span>CREATIVITY IN EVERY FORM</span>
          <span className="music-footer-line" />
          <span>FAITH · MUSIC · PURPOSE</span>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact contact-solo" id="contact">
        <form
          className="message-form"
          onSubmit={handleContactSubmit}
        >
          <div className="form-heading">
            <div>
              <p className="contact-eyebrow">
                HAVE A QUESTION OR PROJECT?
              </p>

              <h2>SEND ME A MESSAGE</h2>
            </div>
          </div>

          <p className="form-recipient">
            To: {info.email}
          </p>

          <label>
            Your name
            <input
              name="name"
              value={form.name}
              onChange={handleContactChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Your email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleContactChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={handleContactChange}
              placeholder="What would you like to discuss?"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleContactChange}
              placeholder="Write your message here..."
              rows="5"
              required
            />
          </label>

          <button className="send-button" type="submit">
            Open Gmail to send <ArrowUpRight size={18} />
          </button>

          {sendStatus && (
            <p className="form-note" role="status">
              {sendStatus}
            </p>
          )}

          <p className="form-note">
            Your message will be addressed to {info.email}.
            Review it and click Send in Gmail.
          </p>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <span>
          © {new Date().getFullYear()} John Wayne Pirante
        </span>

        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;