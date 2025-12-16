import React from "react";
import { Linkedin, Github, FileText } from "lucide-react";

/*
 Hero contains the doll image and the bottom Clouds.png band.
 The clouds element is animated on window scroll to rise up into Skills.
 Images are loaded from public/ (absolute paths).
*/
export default function Hero() {
  const cloudRef = React.useRef(null);
  const doll = "/Doll.png";

  React.useEffect(() => {
    const cloudEl = cloudRef.current;
    const homeSection = document.getElementById("home");
    if (!cloudEl || !homeSection) return;

    // Adjust this value to control when clouds disappear:
    // Higher number = clouds hide earlier (e.g., 800, 1000, 1500)
    // Lower number = clouds hide later (e.g., 100, 0, -200)
    const HIDE_THRESHOLD = -100;

    function onScroll() {
      const homeRect = homeSection.getBoundingClientRect();
      
      // Hide clouds when home section's bottom is above the threshold
      if (homeRect.bottom > HIDE_THRESHOLD) {
        cloudEl.style.opacity = '1';
        cloudEl.style.visibility = 'visible';
        cloudEl.style.transition = 'opacity 0.3s ease, visibility 0.1s ease';
        cloudEl.style.pointerEvents = 'none';
      } else {
        cloudEl.style.opacity = '0';
        cloudEl.style.visibility = 'hidden';
        cloudEl.style.transition = 'opacity 0.3s ease, visibility 0.1s ease';
        cloudEl.style.pointerEvents = 'none';
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <img src={doll} alt="doll" className="doll" />
        <div ref={cloudRef} className="bottom-clouds" aria-hidden="true" />
      </div>

      <div className="hero-right">
        <div className="greet">
          Hi, I am <span className="name">Maria!</span>
        </div>
        <p className="subtitle">
          I craft pixel-perfect, lightning-fast, and delightfully interactive frontends that turn ideas into experiences users can't forget.
        </p>

        <div style={{ marginTop: 36, display: "flex", gap: 24 }}>
          <a href="https://www.linkedin.com/in/mariaarangwala/" target="_blank" rel="noopener noreferrer" style={iconStyle} title="LinkedIn">
            <Linkedin size={32} color="white" />
          </a>
          <a href="https://github.com/maria-rangwala" target="_blank" rel="noopener noreferrer" style={iconStyle} title="GitHub">
            <Github size={32} color="white" />
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" style={iconStyle} title="Resume">
            <FileText size={32} color="white" />
          </a>
        </div>
      </div>
    </section>
  );
}

const iconStyle = {
  width: 72,
  height: 72,
  borderRadius: 36,
  background: "rgba(255,255,255,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
};
