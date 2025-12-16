import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <h2 style={{ fontSize: 56, fontWeight: 800, textAlign: "center" }}>
        Featured <span style={{ color: "rgba(94,240,255,0.95)" }}>Projects</span>
      </h2>
      <p style={{ textAlign: "center", maxWidth: 760, margin: "12px auto 0 auto", opacity: 0.95 }}>
        Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
      </p>

      <div className="projects-grid" style={{ marginTop: 36 }}>
        <div className="card">
          <div style={{ padding: 12, borderRadius: 10, marginBottom: 12 }}>
            <img src="LegalSeva.png" alt="LegalSeva preview" style={{ width: "100%", borderRadius: 8 }} />
          </div>
          <div className="tags">
            <div className="tag">React.js</div>
            <div className="tag">Node.js</div>
            <div className="tag">python</div>
          </div>
          <h3>LegalSeva</h3>
          <p>An interactive virtual herbal garden that educates users on medicinal herbs through immersive 3D visuals and intuitive tools.</p>
        </div>

        <div className="card featured">
          <div style={{ padding: 12, borderRadius: 10 }}>
            <img src="Swara.png" alt="preview" style={{ width: "100%", borderRadius: 8 }} />
          </div>
          <div className="tags" style={{ marginTop: 12 }}>
            <div className="tag">React.js</div>
            <div className="tag">Node.js</div>
            <div className="tag">python</div>
          </div>
          <h3>Jansunwai</h3>
          <p>Vani is a voice first AI assistant designed to help citizens seamlessly register municipal complaints in seconds — no typing, no forms, just voice.</p>
        </div>

        <div className="card">
          <div style={{ padding: 12, borderRadius: 10, marginBottom: 12 }}>
            <img src="HerbSphere.png" alt="HerbSphere preview" style={{ width: "100%", borderRadius: 8 }} />
          </div>
          <div className="tags">
            <div className="tag">React.js</div>
            <div className="tag">Node.js</div>
            <div className="tag">python</div>
          </div>
          <h3>HerbSphere</h3>
          <p>An interactive virtual herbal garden that educates users on medicinal herbs through immersive 3D visuals and intuitive tools.</p>
        </div>
      </div>
    </section>
  );
}
