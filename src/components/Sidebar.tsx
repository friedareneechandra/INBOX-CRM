import { NavLink } from 'react-router-dom'
import { Inbox, Settings, User } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className='w-20 bg-white border-r flex flex-col items-center py-4 gap-6'>
      <NavLink to='/' className='p-3 rounded-lg hover:bg-gray-100 relative'>
        <Inbox />
        <span className='absolute top-2 right-2 bg-emerald-500 text-white text-xs px-1 rounded-full'>3</span>
      </NavLink>
      <NavLink to='/settings' className='p-3 rounded-lg hover:bg-gray-100'>
        <Settings />
      </NavLink>
      <NavLink to='/profile' className='p-3 rounded-lg hover:bg-gray-100'>
        <User />
      </NavLink>
    </aside>
  )
}