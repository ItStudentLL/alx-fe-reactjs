import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem',
      borderRadius: '0 0 8px 8px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ color: '#ecf0f1', margin: 0 }}>CG Company</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link
            to="/"
            style={linkStyle}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={linkStyle}
          >
            About
          </Link>
          <Link
            to="/services"
            style={linkStyle}
          >
            Services
          </Link>
          <Link
            to="/contact"
            style={linkStyle}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background 0.3s'
};

export default Navbar;