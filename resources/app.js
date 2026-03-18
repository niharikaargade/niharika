const { useEffect, useMemo, useState } = React;
const asset = (path) => `/niharika/resources/images/${path}`;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/niharika-argade-a78307189/",
    note: "Career profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/niharikaargade",
    note: "Code and experiments",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jam.jam2015/",
    note: "jam.jam horse account",
    image: asset("jamjam-profile.jpg"),
  },
  {
    label: "YouTube",
    href: "https://youtu.be/j0Z9Up9zviU",
    note: "Video window into the journey",
  },
];

const heroStats = [
  { value: "6+", label: "years across mobile, backend, and IoT" },
  { value: "AWS", label: "Cloud Practitioner certified" },
  { value: "Databases", label: "comfortable from schema design to query thinking" },
  { value: "End-to-end", label: "from APIs and chat clients to mobile UX" },
];

const timeline = [
  {
    year: "2014",
    title: "ICSE",
    place: "St. Helena's High School",
    city: "Pune",
    detail: "This is where I built the academic foundation that later carried into engineering and software work.",
    type: "education",
  },
  {
    year: "2016",
    title: "ISC",
    place: "Hutchings Junior College",
    city: "Pune",
    detail: "I completed higher secondary education here before moving into engineering full-time.",
    type: "education",
  },
  {
    year: "2020",
    title: "BTech",
    place: "Savitribai Phule Pune University",
    city: "Pune",
    detail: "I graduated with 8.7 SGPA and moved straight into building real products.",
    type: "education",
  },
  {
    year: "Jul 2020 - Mar 2022",
    title: "Software Consultant",
    place: "Fourier Technologies",
    city: "Pune",
    detail:
      "This phase built depth across app development, backend services, AWS, IoT workflows, and end-to-end delivery.",
    type: "work",
  },
  {
    year: "Apr 2022 - Dec 2023",
    title: "Full Stack Engineer",
    place: "Nuro Technologies · Full-time",
    city: "Pune, Maharashtra, India",
    detail:
      "This work involved connected-device systems, production cloud workflows, mobile features, and solving the practical issues that show up in real deployments.",
    type: "work",
  },
  {
    year: "Jan 2024 - Present",
    title: "Senior Full Stack Engineer",
    place: "Hexatic · Full-time",
    city: "Pune, Maharashtra, India",
    detail:
      "This role adds another layer of product ownership, from implementation detail to shipping features that have to work reliably in the hands of real users.",
    type: "work",
  },
];

const techStacks = [
  {
    title: "App + Frontend",
    items: ["React Native", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "iOS setup"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "REST APIs", "Schema design"],
  },
  {
    title: "Cloud + IoT",
    items: ["AWS IoT Core", "EC2", "S3", "Lambda", "DynamoDB", "MQTT", "Device flows"],
  },
  {
    title: "Data + Messaging",
    items: ["PostgreSQL", "MySQL", "Firebase", "DB schema design", "query planning", "XMPP", "Ejabberd", "chat client workflows"],
  },
  {
    title: "Testing + Tools",
    items: ["Postman", "JUnit", "Mockito", "Xcode", "Android Studio", "VS Code", "IntelliJ"],
  },
];

const projects = [
  {
    id: "britehome",
    title: "BriteHome",
    type: "Work",
    image: asset("britehome-article-cover.jpg"),
    tags: ["React Native", "AWS", "IoT", "Spring", "PostgreSQL"],
    summary:
      "I build connected-home features across mobile, backend, automation, and device workflows.",
    bullets: [
      "I work across app, server, and database layers instead of limiting myself to one tier.",
      "I have integrated device ecosystems including Google SmartThings and Alexa capabilities.",
      "I also wrote about integrating Google Smart Home APIs with IoT devices for BriteHome.",
      "My work here included AWS services such as IoT Core, EC2, S3, Lambda, and DynamoDB.",
    ],
    insight:
      "One of the coolest parts of this work is connecting real devices, cloud services, and user experience into something that feels seamless.",
    href: "https://britehome.tech/integrate-google-smart-home-api-with-iot-devices/",
    hrefLabel: "Read article",
  },
  {
    id: "dealbazar",
    title: "Deal Bazar",
    type: "Work",
    image: asset("thigma-profile.jpg"),
    tags: ["React Native", "XMPP", "Ejabberd", "Spring", "iOS"],
    summary:
      "I helped shape project semantics, database design, server setup, and iOS-ready React Native foundations.",
    bullets: [
      "I contributed to protocol and product-level decisions, not only ticket execution.",
      "I worked on API and Ejabberd server setup while also supporting end-to-end app functionality.",
      "A chat client workflow was part of the product setup, which added real-time messaging considerations to the build.",
      "I handled iOS-side setup as part of getting the React Native experience production ready.",
    ],
    insight:
      "What makes this project interesting is that it mixes product thinking, messaging flows, backend setup, and mobile delivery in one place.",
    href: "https://play.google.com/store/apps/details?id=co.dealbazar.test&hl=en_IN",
    hrefLabel: "View app",
  },
  {
    id: "carbon",
    title: "AI Carbon Impact",
    type: "Personal",
    image: asset("ai-carbon-screenshot.png"),
    tags: ["JavaScript", "Storytelling", "Sustainability", "Interactive UI"],
    summary:
      "I created this project to make AI usage and carbon impact easier to understand through interactive storytelling.",
    bullets: [
      "I turned abstract AI consumption into something easier to understand with practical comparisons.",
      "I focused on clarity and user understanding, not only raw numbers.",
      "It reflects how I like to combine technical thinking with communication.",
    ],
    insight:
      "The fun part here was turning a complicated idea into something visual, interactive, and easy to explore.",
    href: "https://niharikaargade.github.io/ai-carbon-impact/",
    hrefLabel: "Open site",
  },
  {
    id: "practice",
    title: "Spring Demo + Programming Questions",
    type: "Personal",
    tags: ["Java", "Spring", "Practice", "Problem Solving", "Mapping"],
    summary:
      "I keep smaller practice projects around to stay sharp on backend foundations and problem solving.",
    bullets: [
      "They help me keep Java and Spring skills active outside delivery work.",
      "They show that I learn by building, not only by reading.",
      "They support my broader full-stack profile with backend depth.",
    ],
    insight:
      "These projects are a reminder that strong fundamentals quietly make the bigger work better.",
  },
];

const horseStory = [
  {
    title: "Horse mom energy",
    text:
      "This is a real part of who I am. It has made me more observant, patient, and attentive in the way I care, communicate, and learn.",
    image: asset("horse-with-you-2.jpeg"),
  },
  {
    title: "R+ and gentle guidance",
    text:
      "I am learning reward-based training with more focus on calm communication, trust, gentle guidance, and animal wellbeing.",
    image: asset("profile-horse.png"),
  },
  {
    title: "Basic medical knowledge",
    text:
      "I also have basic medical knowledge for horses and practical awareness around everyday health, handling, and supportive care.",
    image: asset("horse-medical.jpeg"),
  },
];

const signals = [
  "I enjoy moving from product ideas into practical implementation without losing the bigger picture.",
  "The strongest work usually happens where mobile apps, backend services, databases, and devices all need to agree with each other.",
  "Debugging, automation, and production stabilization are part of the work I genuinely know how to sit with.",
  "The projects I enjoy most are the ones that feel useful, thoughtful, and grounded in real life.",
];

function App() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [projectFilter, setProjectFilter] = useState("All");
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 14 }, (_, index) => ({
      id: index,
      left: `${4 + index * 7}%`,
      top: `${6 + (index % 5) * 16}%`,
      delay: `${index * 0.35}s`,
      size: `${32 + (index % 5) * 18}px`,
    }));
    setBubbles(generated);
  }, []);

  const filters = useMemo(
    () => ["All", "Work", "Personal"],
    []
  );

  const visibleProjects = useMemo(() => {
    if (projectFilter === "All") return projects;
    return projects.filter((project) => project.type === projectFilter);
  }, [projectFilter]);

  const selectedProject =
    projects.find((project) => project.id === activeProject) || projects[0];

  useEffect(() => {
    if (!visibleProjects.some((project) => project.id === activeProject)) {
      setActiveProject(visibleProjects[0].id);
    }
  }, [activeProject, visibleProjects]);

  return (
    <div className="page-shell">
      <div className="floating-layer" aria-hidden="true">
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="bubble"
            style={{
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay,
              width: bubble.size,
              height: bubble.size,
            }}
          />
        ))}
      </div>

      <header className="hero">
        <nav className="topbar">
          <div className="topbar-links">
            <a href="#journey">Journey</a>
            <a href="#projects">Projects</a>
            <a href="#horse-life">Horse Life</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Full stack developer • AWS certified • horse mom</p>
            <h1>
              Explore how thoughtful products take shape with me.
            </h1>
            <p className="hero-text">
              Full stack work, connected-device systems, thoughtful database design, and a very real soft spot for horses all live here together.
            </p>

            <div className="cta-row">
              <a className="button primary" href="mailto:argade.niharika@gmail.com">
                Say hello
              </a>
              <a className="button ghost" href="https://github.com/niharikaargade" target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>

            <p className="company-line">
              A mix of product engineering, systems thinking, and real-world problem solving.
            </p>

            <div className="stat-grid">
              {heroStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="hero-visual">
            <div className="portrait-card tilt-card">
              <img
                src={asset("horse-with-you-1.jpeg")}
                alt="Niharika with a horse"
              />
              <div className="portrait-note">
                <span>Engineer by craft</span>
                <span>Horse mom by heart</span>
              </div>
            </div>
          </section>
        </div>
      </header>

      <main className="content">
        <section className="panel intro-panel">
          <div>
            <p className="panel-label">How I work</p>
            <h2>More than a job title.</h2>
          </div>
            <div className="signal-grid">
              {signals.map((signal) => (
                <article key={signal} className="signal-card">
                  <span className="signal-star">•</span>
                  <p>{signal}</p>
                </article>
              ))}
            </div>
        </section>

        <section id="journey" className="panel journey-panel">
          <div className="section-heading">
            <p className="panel-label">Education + work timeline</p>
            <h2>My journey so far</h2>
          </div>

          <div className="timeline-cards">
            {timeline.map((entry) => (
              <article key={`${entry.year}-${entry.title}`} className="timeline-card">
                <span className="timeline-year">{entry.year}</span>
                <h3>{entry.title}</h3>
                <p className="timeline-place">{entry.place}</p>
                <span className="city-chip">{entry.city}</span>
                <p>{entry.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel stack-panel">
          <div className="section-heading">
            <p className="panel-label">Tech stack</p>
            <h2>Technologies I have worked with</h2>
          </div>

          <div className="stack-grid">
            {techStacks.map((group) => (
              <article key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel projects-panel">
          <div className="section-heading">
            <p className="panel-label">Project highlights</p>
            <h2>What I have built across product, cloud, and mobile</h2>
          </div>

          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${projectFilter === filter ? "active" : ""}`}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            <div className="project-rail">
              {visibleProjects.map((project) => (
                <button
                  key={project.id}
                  className={`project-tab ${activeProject === project.id ? "active" : ""}`}
                  onClick={() => setActiveProject(project.id)}
                >
                  <span>{project.title}</span>
                  <small>{project.type}</small>
                </button>
              ))}
            </div>

            <article className="project-showcase tilt-card">
              {selectedProject.image ? (
                <div className="project-image-wrap">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
              ) : (
                <div className="project-image-wrap project-image-wrap empty">
                  <div className="empty-project-art">
                    <span>{selectedProject.title}</span>
                    <p>Built on steady fundamentals, practice, and curiosity.</p>
                  </div>
                </div>
              )}
              <div className="project-copy">
                <div className="project-topline">
                  <span className="detail-chip">{selectedProject.type}</span>
                  {selectedProject.href ? (
                    <a href={selectedProject.href} target="_blank" rel="noreferrer">
                      {selectedProject.hrefLabel || "Open link"}
                    </a>
                  ) : null}
                </div>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.summary}</p>
                <div className="tag-row">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="bullet-list">
                  {selectedProject.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="insight-card">
                  <span>Why clients work with me</span>
                  <p>{selectedProject.insight}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="horse-life" className="panel horse-panel">
          <div className="section-heading">
            <p className="panel-label">Horse life</p>
            <h2>The part of me rooted in care and wellbeing</h2>
          </div>

          <div className="horse-copy text-only">
            {horseStory.map((item) => (
              <article key={item.title} className="horse-note">
                <h3>{item.title}</h3>
                <div className={`horse-note-body ${item.image ? "with-image" : ""}`}>
                  {item.image ? <img src={item.image} alt={item.title} /> : null}
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel cert-panel">
          <div className="section-heading">
            <p className="panel-label">Certification</p>
            <h2>AWS credential</h2>
          </div>

          <div className="cert-grid">
            <div className="cert-image tilt-card">
              <img
                src={asset("aws-cloud-practitioner-1.png")}
                alt="AWS Certified Cloud Practitioner certificate"
              />
            </div>
            <article className="cert-copy">
              <span className="detail-chip">AWS Certified Cloud Practitioner</span>
              <p>
                This certification reflects my cloud foundation and the AWS work I have used
                in production projects.
              </p>
              <a
                className="button ghost"
                href="http://aws.amazon.com/verification"
                target="_blank"
                rel="noreferrer"
              >
                AWS verification page
              </a>
            </article>
          </div>
        </section>

        <section className="panel media-panel">
          <div className="section-heading">
            <p className="panel-label">Watch + follow</p>
            <h2>Places to find my work and story</h2>
          </div>

          <div className="media-grid">
            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/j0Z9Up9zviU"
                title="Niharika video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="link-stack">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className={`social-card ${link.image ? "with-image" : ""}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.image ? <img src={link.image} alt={link.label} /> : null}
                  <strong>{link.label}</strong>
                  <span>{link.note}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>If you have a product to build, bugs to untangle, or cloud chaos to calm down, I’m only one email away.</p>
        <p>
          Email: <a href="mailto:argade.niharika@gmail.com">argade.niharika@gmail.com</a>
        </p>
        <a
          className="bmc-link"
          href="https://buymeacoffee.com/niharikaara"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={asset("buymeacoffee-badge.svg")}
            alt="Buy Me a Coffee badge"
          />
        </a>
        <p className="copyright">
          Copyright © 2026 Niharika Argade. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
