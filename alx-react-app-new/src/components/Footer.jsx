function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px 0',
      marginTop: '40px',
      position: 'relative',
      bottom: 0,
      width: '100%'
    }}>
      <p style={{ 
        margin: '5px 0',
        fontSize: '1rem'
      }}>
        © 2024 My Favorite Cities
      </p>
      <p style={{ 
        margin: '5px 0',
        fontSize: '0.9rem',
        color: '#bdc3c7'
      }}>
        Built with React and ❤️
      </p>
    </footer>
  );
}

export default Footer;