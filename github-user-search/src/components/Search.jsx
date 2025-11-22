import React, { useState } from 'react';
import githubService from '../services/githubService';

/**
 * Search component for GitHub user search with advanced filtering
 * Allows users to search for GitHub users with multiple criteria
 */
const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      // If only username is provided and no filters, use fetchUserData for direct lookup
      if (username && !location && !minRepos) {
        const userData = await githubService.fetchUserData(username);
        setUsers([userData]);
        setHasMore(false);
      } else {
        // Use advanced search for filtered queries
        const data = await githubService.advancedSearch({
          username,
          location,
          minRepos: minRepos ? parseInt(minRepos) : null,
          page: 1
        });
        setUsers(data.items);
        setHasMore(data.total_count > data.items.length);
      }
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    
    try {
      const data = await githubService.advancedSearch({
        username,
        location,
        minRepos: minRepos ? parseInt(minRepos) : null,
        page: nextPage
      });
      setUsers([...users, ...data.items]);
      setPage(nextPage);
      setHasMore(users.length + data.items.length < data.total_count);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Search GitHub Users
      </h2>
      
      {/* Advanced Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., San Francisco"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Repositories
            </label>
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="e.g., 10"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Search Users
        </button>
      </form>

      {/* Loading State */}
      {loading && users.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg text-center">
          <p className="font-semibold">Looks like we cant find the user</p>
        </div>
      )}

      {/* Success State - Display Users List */}
      {users.length > 0 && !error && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-24 h-24 rounded-full border-4 border-gray-200 mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {user.login}
                  </h3>
                  {user.location && (
                    <p className="text-sm text-gray-600 mb-2">
                      📍 {user.location}
                    </p>
                  )}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 text-sm font-medium"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                disabled={loading}
                className="bg-gray-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-700 transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Results */}
      {users.length === 0 && !loading && !error && username && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No users found. Try different search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Search;
