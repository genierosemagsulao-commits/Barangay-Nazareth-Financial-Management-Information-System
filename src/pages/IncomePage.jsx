import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'

export default function IncomePage() {
  const navigate = useNavigate()

  const incomes = [
    {
      id: 1,
      date: '2024-11-15',
      source: 'Community Fundraiser',
      category: 'Donation',
      description: 'Barangay fiesta collection',
      amount: 15000,
      status: 'Received',
    },
    {
      id: 2,
      date: '2024-11-10',
      source: 'Government Grant',
      category: 'Grant',
      description: 'Infrastructure fund',
      amount: 75000,
      status: 'Received',
    },
    {
      id: 3,
      date: '2024-11-05',
      source: 'Business Permit Fees',
      category: 'Fee',
      description: 'Monthly business permits',
      amount: 22000,
      status: 'Received',
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Income Management</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Income
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Total Income</p>
            <p className="text-3xl font-bold text-blue-600">₱112,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-2">This Month</p>
            <p className="text-3xl font-bold text-green-600">₱112,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Records</p>
            <p className="text-3xl font-bold text-purple-600">{incomes.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Income Records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Source</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((income) => (
                  <tr key={income.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-900">{income.date}</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{income.source}</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{income.category}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{income.description}</td>
                    <td className="px-6 py-3 text-sm font-semibold text-gray-900">₱{income.amount.toLocaleString()}</td>
                    <td className="px-6 py-3 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        income.status === 'Received' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {income.status}
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
