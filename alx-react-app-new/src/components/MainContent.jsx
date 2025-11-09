function MainContent() {
  return (
    <main style={{ 
      padding: '20px',
      minHeight: '400px',
      backgroundColor: '#f0f0f0',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        fontSize: '2rem',
        marginBottom: '20px'
      }}>
        Welcome to Our Application
      </h2>
      <p style={{ 
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;