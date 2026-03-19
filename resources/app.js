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
  { value: "6+", label: "years across mobile, backend, cloud, and IoT systems" },
  { value: "AWS", label: "Cloud Practitioner certified" },
  { value: "Databases", label: "comfortable from schema design to query thinking" },
  { value: "End-to-end", label: "from React Native UX to APIs, dashboards, and rule engines" },
];

const timeline = [
  {
    year: "2014",
    title: "ICSE",
    place: "St. Helena's High School",
    city: "Pune",
    detail: "Built a strong academic foundation that later supported engineering and software development work.",
    type: "education",
  },
  {
    year: "2016",
    title: "ISC",
    place: "Hutchings Junior College",
    city: "Pune",
    detail: "Completed higher secondary education before moving into engineering studies full-time.",
    type: "education",
  },
  {
    year: "2020",
    title: "BTech",
    place: "Savitribai Phule Pune University",
    city: "Pune",
    detail: "Graduated with 8.7 SGPA and moved directly into product engineering work.",
    type: "education",
  },
  {
    year: "Jul 2020 - Mar 2022",
    title: "Software Consultant",
    place: "Fourier Technologies",
    city: "Pune",
    detail:
      "Worked on testing and app validation alongside React Native redesign work shaped by customer feedback, code optimization for 50+ device connections, and early backend exposure across Node.js, Spring Boot, AWS SDKs, and AWS IoT Core while working exclusively for Nuro Tech.",
    type: "work",
  },
  {
    year: "Apr 2022 - Dec 2023",
    title: "Full Stack Engineer",
    place: "Nuro Technologies · Full-time",
    city: "Pune, Maharashtra, India",
    detail:
      "Took full-stack ownership across React Native apps, Node.js APIs, database design, Spring Boot monitoring and rule-engine support, cron-based device monitoring, React admin dashboards, observability, Python and pandas aggregation scripts, Firebase notifications, and hybrid SQL and NoSQL data workflows.",
    type: "work",
  },
  {
    year: "Jan 2024 - Present",
    title: "Senior Full Stack Engineer",
    place: "Hexatic · Full-time",
    city: "Pune, Maharashtra, India",
    detail:
      "Leading product engineering in the agriculture and IoT domain with FarmX, redesigning field and customer-facing apps, improving engineering practices, managing a team of 6 to 7, working across BLE, NFC, Django, AWS ECS, deployment cost optimization, and client-facing issue resolution while also serving as the presiding officer for POSH.",
    type: "work",
  },
];

const techStacks = [
  {
    title: "App + Frontend",
    items: ["React Native", "React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "iOS setup"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Django", "REST APIs", "Schema design", "Cron jobs"],
  },
  {
    title: "Cloud + IoT",
    items: ["AWS IoT Core", "AWS SDKs", "EC2", "ECS", "S3", "Lambda", "DynamoDB", "MQTT", "BLE", "NFC", "Device flows"],
  },
  {
    title: "Data + Messaging",
    items: ["PostgreSQL", "MySQL", "Firebase", "Pandas", "DB schema design", "query planning", "XMPP", "Ejabberd", "chat client workflows", "Hybrid SQL + NoSQL systems"],
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
      "Connected-home product work across mobile, backend, automation, monitoring, and cloud-backed device workflows.",
    bullets: [
      "Started from testing and application validation, then moved into redesigning the app based on customer feedback.",
      "Optimized the codebase to handle more than 50 device connections while improving reliability in production behavior.",
      "Worked across Node.js APIs, database design and optimization, and Spring Boot services for monitoring and rule-engine support.",
      "Built cron-based device monitoring flows and worked deeply with AWS IoT Core, AWS SDKs, EC2, S3, Lambda, and DynamoDB.",
    ],
    insight:
      "This work shaped how I think about connected products: the app, device behavior, backend logic, and cloud workflows all need to feel coherent to the user.",
    href: "https://britehome.tech/integrate-google-smart-home-api-with-iot-devices/",
    hrefLabel: "Read article",
  },
  {
    id: "dealbazar",
    title: "Deal Bazar",
    type: "Work",
    image: asset("thigma-profile.jpg"),
    tags: ["React Native", "XMPP", "Ejabberd", "Firebase", "AWS S3", "AWS ECS"],
    summary:
      "Built a marketplace product from scratch with ownership across app design, backend systems, database design, chat, notifications, and deployment.",
    bullets: [
      "Played a key role in shaping the product direction and visual theme for Thigma, an app connecting artists and buyers securely.",
      "Created the app, server, and database design from scratch instead of extending an existing platform.",
      "Added a chat server using XMPP with Ejabberd, plus notification support through Firebase.",
      "Used AWS S3 for media storage and retrieval and AWS ECS for deployment, while staying close to customer feedback through the build.",
    ],
    insight:
      "The strongest part of this project was balancing product design decisions with backend and messaging infrastructure early enough to keep the experience clean.",
    href: "https://play.google.com/store/apps/details?id=co.dealbazar.test&hl=en_IN",
    hrefLabel: "View app",
  },
  {
    id: "farmx",
    title: "FarmX",
    type: "Work",
    tags: ["React Native", "BLE", "NFC", "Django", "AWS ECS", "Leadership"],
    summary:
      "Senior full-stack ownership across field operations, customer-facing apps, connected-device setup, and engineering process improvement.",
    bullets: [
      "Redesigned the field app and contributed heavily to the newer customer-facing product experience.",
      "Worked on mobile flows that connect with devices over BLE and NFC for configuration and data collection.",
      "Contributed on the Django server side and handled AWS ECS deployment and cost-optimization work.",
      "Managed a team of 6 to 7 engineers while working closely with international clients during installation and issue-resolution cycles.",
    ],
    insight:
      "This is where technical ownership and team leadership meet: shipping features, improving standards, and resolving operational issues without losing momentum.",
  },
  {
    id: "siemens",
    title: "Enlightened App",
    type: "Work",
    tags: ["React Native", "BLE", "Native Modules", "Tablet UX"],
    summary:
      "Product enhancement work for Siemens on a tablet-focused field app with bug fixes, new features, and native communication with BLE devices.",
    bullets: [
      "Resolved bugs and added requested features in an actively used React Native field application.",
      "Worked on native-layer integration to improve communication with BLE devices.",
      "Supported a tablet-first workflow where reliability and device communication mattered more than cosmetic changes.",
    ],
    insight:
      "Field tooling has little tolerance for fragile behavior, which makes careful debugging and native integration work especially important.",
  },
  {
    id: "carbon",
    title: "AI Carbon Impact",
    type: "Personal",
    image: asset("ai-carbon-screenshot.png"),
    tags: ["JavaScript", "Product Design", "Sustainability", "UI"],
    summary:
      "I created this project to make AI usage and carbon impact easier to understand through a clear visual experience.",
    bullets: [
      "I turned abstract AI consumption into something easier to understand with practical comparisons.",
      "I focused on clarity and user understanding, not only raw numbers.",
      "It reflects how I like to combine technical thinking with communication.",
    ],
    insight:
      "The fun part here was turning a complicated idea into something visual, clear, and easy to explore.",
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
      "This is a real part of who I am. It has taught me to stay calm under pressure, stay observant, and respond with steadiness instead of urgency.",
    image: asset("horse-with-you-2.jpeg"),
  },
  {
    title: "R+ and gentle guidance",
    text:
      "I am learning reward-based training with more focus on calm communication, trust, gentle guidance, and animal wellbeing. It has also made me a gentler communicator in the way I work with both people and animals.",
    image: asset("profile-horse.png"),
  },
  {
    title: "Basic medical knowledge",
    text:
      "I have learned basic first aid for horses during colic and injury situations, along with massage, relaxation techniques, and practical daily care that supports their wellbeing.",
    image: asset("horse-medical.jpeg"),
  },
];

const signals = [
  "I move comfortably from customer feedback and product thinking into practical implementation across app, backend, and cloud layers.",
  "My strongest work sits where mobile apps, backend services, databases, observability, and devices all need to agree with each other.",
  "I have worked across testing, redesign, monitoring, automation, and production stabilization rather than staying limited to one part of delivery.",
  "I care most about systems that are useful in the real world, especially when reliability matters more than surface polish.",
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
              <a
                className="button ghost"
                href="/niharika/resources/resume/Niharika-Argade-Resume.docx"
                download="Niharika-Argade-Resume.docx"
              >
                Download resume
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
            <h2>Selected work across product, cloud, and connected systems</h2>
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
                </div>
                <div className="project-title-row">
                  <h3>{selectedProject.title}</h3>
                  {selectedProject.href ? (
                    <a
                      className="project-link-icon"
                      href={selectedProject.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={selectedProject.hrefLabel || `Open ${selectedProject.title}`}
                      title={selectedProject.hrefLabel || `Open ${selectedProject.title}`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M14 5h5v5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14 19 5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : null}
                </div>
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
            <h2>Places to find my work</h2>
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
          <a href="mailto:argade.niharika@gmail.com">argade.niharika@gmail.com</a>
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
