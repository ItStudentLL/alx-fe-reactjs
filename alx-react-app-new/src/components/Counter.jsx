import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '20px',
        fontSize: '1.8rem'
      }}>
        Counter Application
      </h2>
      
      <p style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#3498db',
        margin: '30px 0'
      }}>
        Current Count: {count}
      </p>
      
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#229954'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;