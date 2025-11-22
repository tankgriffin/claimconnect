import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const MotorVehicleAccidentsPage = lazy(() => import('./pages/MotorVehicleAccidentsPage'))
const WorkplaceInjuriesPage = lazy(() => import('./pages/WorkplaceInjuriesPage'))
const MedicalMalpracticePage = lazy(() => import('./pages/MedicalMalpracticePage'))
const WorkersCompensationPage = lazy(() => import('./pages/WorkersCompensationPage'))

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#2563eb'
  }}>
    Loading...
  </div>
)

const ComingSoon = ({ page }) => (
  <div style={{
    padding: '4rem 1rem',
    textAlign: 'center',
    minHeight: '50vh'
  }}>
    <h1>{page} - Coming Soon</h1>
  </div>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/motor-vehicle-accidents" element={<MotorVehicleAccidentsPage />} />
            <Route path="/workplace-injuries" element={<WorkplaceInjuriesPage />} />
            <Route path="/medical-malpractice" element={<MedicalMalpracticePage />} />
            <Route path="/workers-compensation" element={<WorkersCompensationPage />} />
            <Route path="/about" element={<ComingSoon page="About Page" />} />
            <Route path="/contact" element={<ComingSoon page="Contact Page" />} />
            <Route path="/privacy-policy" element={<ComingSoon page="Privacy Policy" />} />
            <Route path="/terms-of-service" element={<ComingSoon page="Terms of Service" />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
