import React from "react";

/*
  Skills.jsx — Row-based timeline so left and right content align perfectly.
  Uses /Single.png for the small decorative cloud.
*/

export default function Skills() {
  const cloud = "/Single.png";

  const timeline = [
    {
      years: "2023 - 2024",
      role: "Frontend Developer",
      tech: "React.js, Figma",
      bullets: [
        "Developed the AITR ACM Website using React.js with responsive design and modern UI components.",
        "Built the Prayatna 36-hour national level hackathon website featuring event registration and live updates.",
        "Created UniNote, a platform for notes and resource sharing between alumni, faculty, and students.",
        "Designed intuitive, accessible UIs and optimized frontend performance by 32%."
      ],
    },
    {
      years: "2024 - 2025",
      role: "Chairperson,ACM",
      tech: "Leadership, Event Management ",
      bullets: [
        "Led a team of 50+ members to organize technical workshops and hackathons.",
        "Managed event logistics, sponsorships, and budgets exceeding $10,000.",
        "Increased member engagement by 45% through strategic planning and outreach.",
      ],
    },
     {
      years: "2025",
      present: true,
      role: "Big Data Engineer",
      tech: "HiveQL, Hadoop",
      bullets: [
        "Designed and optimized Hive queries processing 10TB+ datasets daily.",
        "Built scalable ETL pipelines using Hadoop MapReduce and Spark.",
        "Reduced query execution time by 60% through partition optimization.",
      ],
    },
    // add more rows here as needed
  ];

  return (
    <section id="skills" className="timeline-section">
      <div className="container">
        <h1 className="timeline-title">My Work Experience</h1>

        <div className="timeline-grid">
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-row">
              {/* LEFT: years / role / tech + marker */}
              <div className="timeline-left-item">
                <div className="marker-wrap">
                  <div className="marker" aria-hidden="true" />
                  {/* connector line below marker is handled by .timeline-left-item::after */}
                </div>

                <div className="left-text">
                  <div className="years">
                    {item.years}
                    {item.present && <span style={{ fontSize: '20px', marginLeft: '8px', opacity: 0.8 }}>(Present)</span>}
                  </div>
                  <div className="role">{item.role}</div>
                  <div className="tech">{item.tech}</div>
                </div>

                {/* small decorative cloud for first row (optional) */}
                {idx === 0 && (
                  <img src={cloud} alt="" className="timeline-cloud" aria-hidden="true" />
                )}
              </div>

              {/* RIGHT: bullet list aligned with this row */}
              <div className="timeline-right-item">
                <ul className="detail-list">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                
                {/* small decorative cloud on right side for first row */}
                {idx === 0 && (
                  <img src={cloud} alt="" className="timeline-cloud-right" aria-hidden="true" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
