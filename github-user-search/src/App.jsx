import React from 'react'
import './App.css'
import Search from './components/Search'

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>GitHub User Search Application</h1>
      </header>
      <main>
        <Search />
      </main>
      <footer>
        <p>Built with React and GitHub API</p>
      </footer>
    </div>
  )
}

export default App
