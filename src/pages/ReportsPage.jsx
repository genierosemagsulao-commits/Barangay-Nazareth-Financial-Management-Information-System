import DashboardLayout from '../components/DashboardLayout'

export default function ReportsPage() {
  const reports = [
    { name: 'Monthly Financial Report', date: '2024-11-01', type: 'PDF', size: '2.4 MB' },
    { name: 'Quarterly Summary', date: '2024-10-01', type: 'PDF', size: '3.1 MB' },
    { name: 'Annual Report 2024', date: '2024-01-01', type: 'PDF', size: '5.2 MB' },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Financial Reports</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Available Reports</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Report Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Size</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-3 text-sm text-gray-900">{report.name}</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{report.date}</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{report.type}</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{report.size}</td>
                    <td className="px-6 py-3 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 font-semibold">Download</button>
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
