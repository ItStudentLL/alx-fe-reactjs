import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <MainContent />
      
      {/* User Profiles Section */}
      <div style={{ marginTop: '30px' }}>
        <UserProfile 
          name="Alice Johnson" 
          age={28} 
          bio="Loves hiking and photography. Travel enthusiast exploring the world one city at a time."
        />
        <UserProfile 
          name="Bob Smith" 
          age={35} 
          bio="Software developer passionate about creating innovative solutions and mentoring junior developers."
        />
        <UserProfile 
          name="Carol Martinez" 
          age={42} 
          bio="Chef and food blogger sharing culinary adventures from around the globe."
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;