import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'

export default function ExpensesPage() {
  const expenses = [
    {
      id: 1,
      date: '2024-11-15',
      category: 'Infrastructure',
      description: 'Road repair project',
      amount: 45000,
      status: 'Approved',
    },
    {
      id: 2,
      date: '2024-11-10',
      category: 'Utilities',
      description: 'Barangay office electricity',
      amount: 5000,
      status: 'Approved',
    },
    {
      id: 3,
      date: '2024-11-05',
      category: 'Personnel',
      description: 'Staff salaries',
      amount: 30000,
      status: 'Pending',
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Expenses Management</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Expense
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Total Expenses</p>
            <p className="text-3xl font-bold text-red-600">₱80,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-2">This Month</p>
            <p className="text-3xl font-bold text-red-600">₱80,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Records</p>
            <p className="text-3xl font-bold text-purple-600">{expenses.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Expense Records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-900">{expense.date}</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{expense.category}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{expense.description}</td>
                    <td className="px-6 py-3 text-sm font-semibold text-gray-900">₱{expense.amount.toLocaleString()}</td>
                    <td className="px-6 py-3 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        expense.status === 'Approved' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {expense.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
