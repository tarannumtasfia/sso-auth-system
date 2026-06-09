import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-10 px-4">

        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              U
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
              <p className="text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-500">1</h2>
            <p className="text-gray-500 mt-1">Projects</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-4xl font-bold text-green-500">3</h2>
            <p className="text-gray-500 mt-1">Auth Methods</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-4xl font-bold text-purple-500">100%</h2>
            <p className="text-gray-500 mt-1">Secure</p>
          </div>
        </div>

        {/* Auth Methods Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Connected Auth Methods</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">Google</span>
              <span className="ml-auto text-green-500 text-sm font-medium">✓ Connected</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">GitHub</span>
              <span className="ml-auto text-green-500 text-sm font-medium">✓ Connected</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">Facebook</span>
              <span className="ml-auto text-green-500 text-sm font-medium">✓ Connected</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;