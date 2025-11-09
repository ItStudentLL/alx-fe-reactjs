function About() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <h1 style={{ color: '#2c3e50' }}>About Us</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2980b9' }}>Our Mission</h2>
        <p>To innovate, inspire, and deliver exceptional value to our clients worldwide.</p>
      </div>
    </div>
  );
}

export default About;