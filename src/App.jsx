import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

// Layouts
import MainLayout from './layouts/MainLayout'

// Pages
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'
import IncomePage from './pages/IncomePage'
import ExpensesPage from './pages/ExpensesPage'
import BudgetPage from './pages/BudgetPage'
import ReportsPage from './pages/ReportsPage'
import UsersPage from './pages/UsersPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<SignUpPage onSignUp={() => setIsAuthenticated(true)} />} />
        
        {/* Protected Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
