import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import LoginPage from '../public/LoginPage/page'
import SignUpPage from '../public/signup/page'
import HomePage from './pages/HomePage'
import IncomePage from './pages/IncomePage'
import ExpensesPage from './pages/ExpensesPage'
import BudgetPage from './pages/BudgetPage'
import ReportsPage from './pages/ReportsPage'
import UsersPage from './pages/UsersPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
