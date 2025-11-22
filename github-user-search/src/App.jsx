import React from 'react'
import Search from './components/Search'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            GitHub User Search Application
          </h1>
        </div>
      </header>
      <main className="py-8">
        <Search />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-600">
          <p>Built with React, Tailwind CSS, and GitHub API</p>
        </div>
      </footer>
    </div>
  )
}

export default App
