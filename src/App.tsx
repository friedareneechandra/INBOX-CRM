import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import InboxPage from './pages/InboxPage'

export default function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 bg-gray-50'>
          <Routes>
            <Route path='/' element={<InboxPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}