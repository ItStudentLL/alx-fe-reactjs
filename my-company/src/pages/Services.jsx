function Services() {
  const services = [
    'Technology Consulting',
    'Market Analysis',
    'Product Development',
    'Digital Transformation',
    'Cloud Solutions'
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <h1 style={{ color: '#2c3e50' }}>Our Services</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((service, index) => (
          <li
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ecf0f1',
              margin: '10px 0',
              padding: '15px',
              borderRadius: '8px',
              fontSize: '1.2rem',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;