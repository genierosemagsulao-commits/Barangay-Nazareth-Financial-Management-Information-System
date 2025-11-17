import { BarChart3, DollarSign, TrendingUp, Users } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const chartData = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 9800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's your financial overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Income */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Income</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₱145,000</p>
              <p className="text-green-600 text-xs mt-2">+12% from last month</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₱82,500</p>
              <p className="text-red-600 text-xs mt-2">+5% from last month</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        {/* Budget Balance */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Budget Balance</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₱62,500</p>
              <p className="text-blue-600 text-xs mt-2">57% of budget used</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Users</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">24</p>
              <p className="text-purple-600 text-xs mt-2">2 new this week</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income vs Expenses Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Budget Allocation */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Budget Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#3b82f6" />
              <Bar dataKey="expenses" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-3 text-sm text-gray-700">2024-11-15</td>
                <td className="px-6 py-3 text-sm text-gray-700">Community Fund</td>
                <td className="px-6 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Income</span></td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">+₱5,000</td>
                <td className="px-6 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Completed</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-3 text-sm text-gray-700">2024-11-14</td>
                <td className="px-6 py-3 text-sm text-gray-700">Office Supplies</td>
                <td className="px-6 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Expense</span></td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">-₱1,200</td>
                <td className="px-6 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Completed</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-3 text-sm text-gray-700">2024-11-13</td>
                <td className="px-6 py-3 text-sm text-gray-700">Infrastructure</td>
                <td className="px-6 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Expense</span></td>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">-₱15,000</td>
                <td className="px-6 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
