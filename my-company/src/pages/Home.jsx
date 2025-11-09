function Home() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#2c3e50', fontSize: '3rem' }}>Welcome to CG Company LTD</h1>
      <p style={{ fontSize: '1.3rem', color: '#555', maxWidth: '800px', margin: '1.5rem auto' }}>
        We are dedicated to delivering excellence in all our services.
      </p>
      <button style={{
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '12px 30px',
        fontSize: '1.1rem',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </div>
  );
}

export default Home;