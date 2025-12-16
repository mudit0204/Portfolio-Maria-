import React from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [indicatorStyle, setIndicatorStyle] = React.useState({ width: 0, left: 0 });
  const navLinksRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200; // offset for better detection

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    // Update indicator position when active section changes
    if (navLinksRef.current) {
      const activeLink = navLinksRef.current.querySelector('.active');
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
      }
    }
  }, [activeSection]);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="topbar">
      <div className="brand">
        <div className="logo-pill">Maria Rangwala</div>
      </div>
      <div className="nav-links" ref={navLinksRef} style={{ position: 'relative' }}>
        <a 
          href="#home" 
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          HOME
        </a>
        <a 
          href="#skills" 
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => handleClick("skills")}
        >
          SKILLS
        </a>
        <a 
          href="#projects" 
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          PROJECTS
        </a>
        <a 
          href="#contact" 
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          CONTACT
        </a>
        
        {/* Animated sliding indicator */}
        <div 
          className="nav-indicator"
          style={{
            width: `${indicatorStyle.width}px`,
            left: `${indicatorStyle.left}px`,
          }}
        />
      </div>
    </nav>
  );
}
