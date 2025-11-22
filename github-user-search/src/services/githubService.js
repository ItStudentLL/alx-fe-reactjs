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
  },

  /**
   * Fetch user data by username
   * @param {string} username - The GitHub username to fetch
   * @returns {Promise} - Promise resolving to user data
   */
  fetchUserData: async (username) => {
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
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  /**
   * Advanced search for GitHub users with multiple criteria
   * @param {Object} searchParams - Search parameters object
   * @param {string} searchParams.username - Username to search for
   * @param {string} searchParams.location - Location filter
   * @param {number} searchParams.minRepos - Minimum number of repositories
   * @param {number} searchParams.page - Page number for pagination
   * @returns {Promise} - Promise resolving to search results
   */
  advancedSearch: async ({ username, location, minRepos, page = 1 }) => {
    try {
      // Build the query string
      let query = '';
      
      if (username) {
        query += username;
      }
      
      if (location) {
        query += ` location:${location}`;
      }
      
      if (minRepos) {
        query += ` repos:>=${minRepos}`;
      }

      const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
        params: { 
          q: query,
          page: page,
          per_page: 10
        },
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_API_KEY 
            ? `token ${import.meta.env.VITE_GITHUB_API_KEY}` 
            : undefined
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error performing advanced search:', error);
      throw error;
    }
  }
};

export default githubService;
