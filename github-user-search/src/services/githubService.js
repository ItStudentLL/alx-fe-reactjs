import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

/**
 * Service for interacting with the GitHub API
 */
const githubService = {
  /**
   * Search for GitHub users
   * @param {string} username - The username to search for
   * @returns {Promise} - Promise resolving to user data
   */
  searchUsers: async (username) => {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
        params: { q: username },
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_API_KEY 
            ? `token ${import.meta.env.VITE_GITHUB_API_KEY}` 
            : undefined
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub users:', error);
      throw error;
    }
  },

  /**
   * Get detailed information about a specific user
   * @param {string} username - The username to fetch
   * @returns {Promise} - Promise resolving to user details
   */
  getUserDetails: async (username) => {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`, {
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_API_KEY 
            ? `token ${import.meta.env.VITE_GITHUB_API_KEY}` 
            : undefined
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }
};

export default githubService;
