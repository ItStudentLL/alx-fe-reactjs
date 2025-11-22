import React, { useState } from 'react';
import githubService from '../services/githubService';

/**
 * Search component for GitHub user search
 * Allows users to search for GitHub users and displays results
 */
const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="search-container">
      <h2>Search GitHub Users</h2>
      
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="search-input"
          required
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-message">
          <p>Looks like we cant find the user</p>
        </div>
      )}

      {/* Success State - Display User Data */}
      {userData && !loading && !error && (
        <div className="user-card">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`}
            className="user-avatar"
          />
          <h3>{userData.name || userData.login}</h3>
          <p className="user-login">@{userData.login}</p>
          {userData.bio && <p className="user-bio">{userData.bio}</p>}
          <div className="user-stats">
            <span>Followers: {userData.followers}</span>
            <span>Following: {userData.following}</span>
            <span>Public Repos: {userData.public_repos}</span>
          </div>
          <a 
            href={userData.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-link"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
