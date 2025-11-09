function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '15px', 
      margin: '15px auto',
      maxWidth: '400px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ 
        color: 'blue',
        marginTop: 0,
        fontSize: '1.5rem',
        marginBottom: '10px'
      }}>
        {props.name}
      </h2>
      <p style={{ margin: '8px 0', fontSize: '1rem' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>
      </p>
      <p style={{ 
        margin: '8px 0',
        lineHeight: '1.5',
        color: '#555'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;