import DashboardLayout from '../components/DashboardLayout'

export default function BudgetPage() {
  const budgets = [
    { category: 'Infrastructure', allocated: 200000, used: 145000, remaining: 55000 },
    { category: 'Healthcare', allocated: 100000, used: 75000, remaining: 25000 },
    { category: 'Education', allocated: 150000, used: 120000, remaining: 30000 },
    { category: 'Utilities', allocated: 50000, used: 35000, remaining: 15000 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Budget Management</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {budgets.map((budget) => {
            const percentage = (budget.used / budget.allocated) * 100
            return (
              <div key={budget.category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{budget.category}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Allocated</span>
                      <span className="font-semibold">₱{budget.allocated.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Used</span>
                      <span className="font-semibold">₱{budget.used.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="text-gray-600">Remaining</span>
                      <span className="font-semibold text-green-600">₱{budget.remaining.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">{Math.round(percentage)}% used</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
