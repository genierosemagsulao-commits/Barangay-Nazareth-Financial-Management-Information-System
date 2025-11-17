import { useNavigate } from 'react-router-dom'
import { BarChart3, Home, TrendingUp, TrendingDown, FileText, Users, LogOut } from 'lucide-react'

export default function DashboardLayout({ children }) {
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Income', path: '/income', icon: TrendingUp },
    { name: 'Expenses', path: '/expenses', icon: TrendingDown },
    { name: 'Budget', path: '/budget', icon: FileText },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Users', path: '/users', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xl font-bold">FMIS</span>
            </div>
            <button
              onClick={() => {
                navigate('/login')
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-blue-700 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white shadow-sm">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Menu</h3>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition text-left"
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        <main className="flex-1">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
