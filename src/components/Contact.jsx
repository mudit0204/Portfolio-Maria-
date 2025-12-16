import React from "react";

export default function Contact() {
  const donut = "/Donut.png";
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formPayload = new FormData();
    formPayload.append('access_key', '4436bbb1-2373-4c3c-86e2-d713b6850935'); // Get from web3forms.com
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);
    formPayload.append('subject', `Portfolio Contact from ${formData.name}`);
    formPayload.append('from_name', 'Portfolio Contact Form');
    formPayload.append('redirect', 'false');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully! ✓');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('Failed to send. Please try again.');
        setTimeout(() => setStatus(''), 4000);
      }
    } catch {
      setStatus('Failed to send. Please try again.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Pink gradient from bottom */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(to top, rgba(255, 192, 203, 0.6), rgba(255, 255, 255, 0.3), transparent)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <div style={{ display: "flex", gap: 48, alignItems: "flex-start", position: 'relative', zIndex: 1, flexDirection: 'column' }}>
        <div style={{ display: "flex", gap: 48, width: "100%" }}>
        <div className="contact-card">
          <h2 style={{ fontSize: 48, fontWeight: 800 }}>Let's Talk</h2>
          <p style={{ maxWidth: 520 }}>
            Whether you are looking to a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
          </p>

          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", marginTop: 22, fontWeight: 700 }}>Full Name</label>
            <input 
              className="form-field" 
              placeholder="Your full name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label style={{ display: "block", marginTop: 18, fontWeight: 700 }}>Email ID</label>
            <input 
              className="form-field" 
              placeholder="your@email.com" 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label style={{ display: "block", marginTop: 18, fontWeight: 700 }}>Message</label>
            <textarea 
              className="form-field" 
              rows={6} 
              placeholder="Tell me about your project"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button 
              type="submit"
              style={{
                marginTop: 24,
                padding: '16px 40px',
                background: 'white',
                color: '#d86a7e',
                border: 'none',
                borderRadius: '999px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#5ef0ff';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.25)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
              }}
            >
              Send Message
            </button>
            {status && <p style={{ marginTop: 12, color: status.includes('success') ? '#5ef0ff' : '#ff6b6b', fontWeight: 600 }}>{status}</p>}
          </form>
        </div>
        </div>

        {/* Donut positioned below contact card */}
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", paddingLeft:100, marginTop: -340 }}>
          <img src={donut} alt="donut" style={{ width: 380 }} />
        </div>
      </div>
    </section>
  );
}
