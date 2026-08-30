const { useEffect, useState } = React;
const asset = (path) => `resources/images/${path}`;
const videoAsset = (path) => `resources/videos/${path}`;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/niharika-argade-a78307189/",
  },
  {
    label: "GitHub",
    href: "https://github.com/niharikaargade",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jam.jam2015/",
  },
  {
    label: "YouTube",
    href: "https://youtu.be/j0Z9Up9zviU",
  },
];

const resumeHref = "resources/resume/Niharika-Argade-Resume.docx";
const youtubeHref = "https://youtu.be/j0Z9Up9zviU";
const youtubeThumbnail = "https://i.ytimg.com/vi/j0Z9Up9zviU/hqdefault.jpg";

const featuredWriting = {
  title: "Google Smart Home + IoT devices",
  note: "Niharika Argade",
  role: "MTS, Nuro Technologies",
  href: "https://britehome.tech/integrate-google-smart-home-api-with-iot-devices/",
};

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    href: asset("aws-cloud-practitioner-1.png"),
    preview: asset("aws-cloud-practitioner-1.png"),
    alt: "AWS Certified Cloud Practitioner certificate",
  },
  {
    title: "Scrum Basics",
    href: "resources/certificates/Agile.pdf",
    preview: "resources/certificates/Agile.png",
    alt: "Scrum Basics certificate",
    featured: true,
  },
  {
    title: "GenAI Academy APAC 2026",
    href: "resources/certificates/2026H2S07GCGENAIAPACC2-P00804.pdf",
    preview: "resources/certificates/2026H2S07GCGENAIAPACC2-P00804.png",
    alt: "GenAI Academy APAC 2026 certificate",
  },
];

const highlights = [
  {
    kind: "article",
    title: featuredWriting.title,
    role: featuredWriting.role,
    href: featuredWriting.href,
  },
  ...certifications.map((certificate) => ({
    kind: "certificate",
    ...certificate,
  })),
];

const timeline = [
  {
    year: "Jun 2019 - Mar 2022",
    title: "Software Consultant",
    place: "Fourier Technologies",
  },
  {
    year: "Apr 2022 - Dec 2023",
    title: "Full Stack Engineer",
    place: "Nuro Technologies",
  },
  {
    year: "Jan 2024 - Present",
    title: "Senior Full Stack Engineer",
    place: "Hexatic",
  },
];

const workTimeline = [...timeline].reverse();

const techGroups = [
  {
    label: "Frontend",
    items: ["React Native", "React.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Node.js", "Django", "REST APIs", "WebSocket"],
  },
  {
    label: "Cloud & Data",
    items: ["PostgreSQL", "MySQL", "AWS Cloud", "Google Cloud", "Firebase", "Pandas"],
  },
  {
    label: "Devices & AI",
    items: ["BLE", "NFC", "MQTT", "Agentic AI applications"],
  },
];

const projects = [
  {
    id: "britehome",
    title: "BriteHome",
    summary:
      "Connected-home product work across mobile, backend, automation, monitoring, and cloud-backed device workflows.",
    href: "https://play.google.com/store/apps/details?id=tech.nuro.brite&pcampaignid=web_share",
  },
  {
    id: "dealbazar",
    title: "Deal Bazar",
    summary:
      "Built a marketplace product from scratch with ownership across app design, backend systems, database design, chat, notifications, and deployment.",
    href: "https://play.google.com/store/apps/details?id=co.dealbazar.test&hl=en_IN",
  },
  {
    id: "farmx",
    title: "FarmX",
    summary:
      "Senior full-stack ownership across field operations, customer-facing apps, connected-device setup, and engineering process improvement.",
  },
  {
    id: "siemens",
    title: "Enlightened App",
    summary:
      "Product enhancement work for Siemens on a tablet-focused field app with bug fixes, new features, and native communication with BLE devices.",
  },
  {
    id: "carbon",
    title: "AI Carbon Impact",
    summary:
      "I created this project to make AI usage and carbon impact easier to understand through a clear visual experience.",
    href: "https://niharikaargade.github.io/ai-carbon-impact/",
  },
];

const horseStory = [
  {
    title: "Gentle guidance",
    image: asset("horse-with-you-2.jpeg"),
  },
  {
    title: "R+ training",
    image: asset("profile-horse.png"),
  },
  {
    title: "Daily care",
    image: asset("horse-medical.jpeg"),
  },
  {
    title: "Watch on YouTube",
    image: youtubeThumbnail,
    href: youtubeHref,
  },
];

function SocialIcon({ label }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.8c0-3.46-1.85-5.06-4.31-5.06-1.99 0-2.88 1.1-3.38 1.87V8.5H9.38V20h3.37v-6.42c0-.34.03-.68.12-.93.27-.68.88-1.38 1.9-1.38 1.35 0 1.9 1.04 1.9 2.55V20h3.37v-7.2Z" fill="currentColor" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.36-1.22-3.36-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.11-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.9-1.32 2.75-1.05 2.75-1.05.54 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23 7.2a2.95 2.95 0 0 0-2.08-2.09C19.08 4.6 12 4.6 12 4.6s-7.08 0-8.92.5A2.95 2.95 0 0 0 1 7.2a30.6 30.6 0 0 0-.5 5.7A30.6 30.6 0 0 0 1 18.6a2.95 2.95 0 0 0 2.08 2.09c1.84.5 8.92.5 8.92.5s7.08 0 8.92-.5A2.95 2.95 0 0 0 23 18.6a30.6 30.6 0 0 0 .5-5.7 30.6 30.6 0 0 0-.5-5.7ZM9.75 16.4V9.4l6.1 3.5-6.1 3.5Z" fill="currentColor" />
    </svg>
  );
}

function CertificateCard({ certificate, duplicate = false }) {
  const cardClassName = `certification-link ${certificate.featured ? "featured" : ""} ${duplicate ? "is-duplicate" : ""}`;
  const content = (
    <>
      <div className="certification-preview">
        <img src={certificate.preview} alt={duplicate ? "" : certificate.alt} />
      </div>
      <div className="certification-copy">
        <strong>{certificate.title}</strong>
      </div>
    </>
  );

  if (duplicate) {
    return (
      <div className={cardClassName} aria-hidden="true">
        {content}
      </div>
    );
  }

  return (
    <a
      className={cardClassName}
      href={certificate.href}
      target="_blank"
      rel="noreferrer"
      title={certificate.title}
    >
      {content}
    </a>
  );
}

function HighlightCard({ item, duplicate = false }) {
  if (item.kind === "article") {
    const className = `certification-link article-highlight-card ${duplicate ? "is-duplicate" : ""}`;
    const content = (
      <>
        <div className="article-highlight-preview">
          <span className="article-highlight-label">Article</span>
          <strong>{item.title}</strong>
        </div>
        <div className="certification-copy article-highlight-copy">
          <p>{item.role}</p>
        </div>
      </>
    );

    if (duplicate) {
      return (
        <div className={className} aria-hidden="true">
          {content}
        </div>
      );
    }

    return (
      <a
        className={className}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        title={item.title}
      >
        {content}
      </a>
    );
  }

  return <CertificateCard certificate={item} duplicate={duplicate} />;
}

function WorkCard({ project, duplicate = false }) {
  const className = `work-card project-showcase ${duplicate ? "is-duplicate" : ""}`;
  const content = (
    <div className="project-copy work-card-copy">
      <div className="project-title-row">
        <h3>{project.title}</h3>
        {project.href ? (
          <span className="project-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
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
          </span>
        ) : null}
      </div>
      <p>{project.summary}</p>
    </div>
  );

  if (duplicate) {
    return (
      <div className={className} aria-hidden="true">
        {content}
      </div>
    );
  }

  if (!project.href) {
    return <article className={className}>{content}</article>;
  }

  return (
    <a
      className={className}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
      title={`Open ${project.title}`}
    >
      {content}
    </a>
  );
}

function App() {
  const [portraitAnimating, setPortraitAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!portraitAnimating) {
      return;
    }

    const animationTimer = window.setTimeout(() => {
      setPortraitAnimating(false);
    }, 680);

    return () => window.clearTimeout(animationTimer);
  }, [portraitAnimating]);

  useEffect(() => {
    const sections = document.querySelectorAll(".screen-section");
    if (!sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll(".screen-section")];
    if (sections.length < 2) {
      return;
    }

    let wheelLocked = false;
    let unlockTimer;
    const handleWheel = (event) => {
      if (
        Math.abs(event.deltaY) < 8 ||
        event.target.closest(".work-marquee, .certification-marquee, .project-rail")
      ) {
        return;
      }

      event.preventDefault();
      if (wheelLocked) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const currentIndex = sections.reduce((closestIndex, section, index) => {
        const closest = sections[closestIndex].getBoundingClientRect();
        const currentDistance = Math.abs(
          closest.top + closest.height / 2 - viewportCenter,
        );
        const candidate = section.getBoundingClientRect();
        const candidateDistance = Math.abs(
          candidate.top + candidate.height / 2 - viewportCenter,
        );
        return candidateDistance < currentDistance ? index : closestIndex;
      }, 0);
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(
        0,
        Math.min(sections.length - 1, currentIndex + direction),
      );

      if (nextIndex === currentIndex) {
        return;
      }

      wheelLocked = true;
      sections[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
      unlockTimer = window.setTimeout(() => {
        wheelLocked = false;
      }, 760);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.clearTimeout(unlockTimer);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  const triggerPortraitAnimation = () => {
    setPortraitAnimating(false);
    window.requestAnimationFrame(() => {
      setPortraitAnimating(true);
    });
  };

  return (
    <div className="page-shell">
      <div className="floral-layer" aria-hidden="true">
        <span className="floral floral-top-left"></span>
        <span className="floral floral-top-right"></span>
        <span className="floral floral-vine-left"></span>
        <span className="floral floral-center-left"></span>
        <span className="floral floral-center-vine-left"></span>
        <span className="floral floral-mid-center-left"></span>
        <span className="floral floral-top-center"></span>
        <span className="floral floral-mid-left"></span>
        <span className="floral floral-bottom-left"></span>
        <span className="floral floral-center-right"></span>
        <span className="floral floral-center-vine-right"></span>
        <span className="floral floral-mid-center-right"></span>
        <span className="floral floral-mid-right"></span>
        <span className="floral floral-bottom-center"></span>
        <span className="floral floral-bottom-right"></span>
        <span className="floral floral-vine-right"></span>
      </div>
      <header className="hero screen-section screen-hero is-visible">
        <nav className="topbar">
          <div className="topbar-links">
            <a href="#journey">Journey</a>
            <a href="#work">Work</a>
            <a href="#horse-life">Horse Life</a>
            <a href="#highlights">Article & Certifications</a>
            <a href={resumeHref} target="_blank" rel="noreferrer">Resume</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            type="button"
            className="mobile-menu-button"
            aria-controls="mobile-navigation-drawer"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span aria-hidden="true">☰</span>
            <span>Menu</span>
          </button>
        </nav>

        {isMobileMenuOpen ? (
          <div className="mobile-drawer-wrap">
            <button
              type="button"
              className="mobile-drawer-backdrop"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <aside
              id="mobile-navigation-drawer"
              className="mobile-navigation-drawer"
              aria-label="Mobile navigation"
            >
              <div className="mobile-drawer-header">
                <span>Niharika Argade</span>
                <button
                  type="button"
                  className="mobile-drawer-close"
                  aria-label="Close navigation menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ×
                </button>
              </div>
              <div className="mobile-drawer-links">
                <a href="#journey" onClick={() => setIsMobileMenuOpen(false)}>Journey</a>
                <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
                <a href="#horse-life" onClick={() => setIsMobileMenuOpen(false)}>Horse Life</a>
                <a href="#highlights" onClick={() => setIsMobileMenuOpen(false)}>Article & Certifications</a>
                <a href={resumeHref} target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </aside>
          </div>
        ) : null}

        <div className="hero-grid editorial-hero">
          <section className="hero-copy hero-copy-editorial">
            <p className="eyebrow">Full stack developer • AWS certified • horse mom</p>
            <h1>
              Explore how thoughtful products take shape with me
            </h1>

            <p className="hero-connection">Building tech and connection with a little sparkle</p>
          </section>

          <section className="hero-visual hero-visual-editorial">
            <button
              type="button"
              className={`portrait-card hero-portrait-card tilt-card interactive-portrait ${portraitAnimating ? "is-animating" : ""}`}
              onClick={triggerPortraitAnimation}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  triggerPortraitAnimation();
                }
              }}
              aria-label="Animate hero portrait"
            >
              <img
                src={asset("horse-with-you-1.jpeg")}
                alt="Niharika with a horse"
              />
            </button>
          </section>
        </div>
      </header>

      <main className="content">
        <section id="journey" className="screen-section screen-journey">
          <section className="panel journey-panel compact-panel">
            <div className="section-heading">
              <h2>Journey</h2>
            </div>

            <div className="timeline-cards timeline-cards-editorial work-bubble-grid">
              {workTimeline.map((entry) => (
                <article key={`${entry.year}-${entry.title}`} className="timeline-card timeline-card-work work-bubble-card">
                  <span className="timeline-year">{entry.year}</span>
                  <h3>{entry.title}</h3>
                  <p className="timeline-place">{entry.place}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel stack-panel compact-panel">
            <div className="section-heading">
              <h2>Core stack</h2>
            </div>

            <div className="stack-lines stack-group-grid">
              {techGroups.map((group) => (
                <article key={group.label} className="stack-line stack-group-card">
                  <span className="stack-group-label">{group.label}</span>
                  <div className="stack-track">
                    {group.items.map((item) => (
                      <span
                        key={`${group.label}-${item}`}
                        className="stack-bubble"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section id="work" className="screen-section screen-work">
        <span id="horse-life" className="screen-anchor" aria-hidden="true"></span>
        <section className="panel projects-panel editorial-projects-panel">
          <div className="section-heading">
            <h2>Work</h2>
          </div>

          <div className="work-marquee">
            <div className="work-track">
              {projects.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))}
              {projects.map((project, index) => (
                <WorkCard
                  key={`${project.id}-duplicate-${index}`}
                  project={project}
                  duplicate={true}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="panel horse-panel compact-panel">
          <div className="section-heading">
            <h2>Horse life</h2>
          </div>

          <div className="horse-copy horse-gallery-grid">
            {horseStory.map((item) => {
              const content = (
                <>
                  {item.image ? <img src={item.image} alt={item.title} /> : null}
                  <div className="horse-note-caption">
                    {item.badge ? <span className="horse-note-badge">{item.badge}</span> : null}
                    <h3>{item.title}</h3>
                  </div>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.title}
                    className="horse-note horse-note-link youtube-thumb-card"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${item.title}`}
                    title={item.title}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <article key={item.title} className="horse-note">
                  {content}
                </article>
              );
            })}
          </div>
        </section>
        </section>

        <section id="highlights" className="screen-section screen-contact">
        <span id="contact" className="screen-anchor" aria-hidden="true"></span>
        <section className="panel certification-panel compact-panel highlights-panel">
          <div className="section-heading">
            <h2>Article & Certifications</h2>
          </div>

          <div className="highlights-stack">
            <div className="certification-marquee">
              <div className="certification-track">
                {highlights.map((item) => (
                  <HighlightCard key={`${item.kind}-${item.title}`} item={item} />
                ))}
                {highlights.map((item, index) => (
                  <HighlightCard
                    key={`${item.kind}-${item.title}-duplicate-${index}`}
                    item={item}
                    duplicate={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="panel watch-panel contact-panel compact-panel">
          <div className="contact-layout">
            <a
              className="watch-loop contact-portrait"
              href={youtubeHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Niharika YouTube video"
              title="Open Niharika YouTube video"
            >
              <video
                src={videoAsset("horse-watch-follow.mp4")}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </a>

            <div className="contact-copy-block">
              <h2>Get in touch</h2>
              <p className="contact-copy-text">
                Products, bugs, and cloud work. One email away.
              </p>
              <div className="watch-icons-wrap contact-icons">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="social-icon-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <SocialIcon label={link.label} />
                  </a>
                ))}
              </div>
              <div className="contact-actions">
                <a className="button primary" href="mailto:argade.niharika@gmail.com">
                  argade.niharika@gmail.com
                </a>
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
              </div>
            </div>
          </div>
        </section>

        <footer className="panel footer compact-panel">
          <p className="copyright">
            Copyright © 2026 Niharika Argade. All rights reserved.
          </p>
        </footer>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
