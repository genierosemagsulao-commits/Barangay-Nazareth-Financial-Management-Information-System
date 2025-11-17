import { useNavigate } from 'react-router-dom'
import { BarChart3 } from 'lucide-react'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">FMIS</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Barangay Nazareth
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Financial Management Information System
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Efficient and transparent financial management for our community
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-medium"
          >
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard</h3>
            <p className="text-gray-600">
              Monitor real-time financial metrics and key performance indicators
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transactions</h3>
            <p className="text-gray-600">
              Track income and expenses with detailed reports and analytics
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reports</h3>
            <p className="text-gray-600">
              Generate comprehensive financial reports for transparency
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-12 mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to manage finances efficiently?</h3>
          <p className="text-lg mb-6">
            Login to access your financial dashboard and start managing your community's resources
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-medium"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-2 border-2 border-white text-white rounded-md hover:bg-blue-700 font-medium"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        <p>&copy; 2024 Barangay Nazareth Financial Management System. All rights reserved.</p>
      </footer>
    </div>
  )
}
