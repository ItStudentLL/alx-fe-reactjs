import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      padding: '20px',
      border: '2px solid #3498db',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f8f9fa'
    }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>User Details</h2>
      <p style={{ fontSize: '1.1rem', margin: '10px 0' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: '1.1rem', margin: '10px 0' }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;