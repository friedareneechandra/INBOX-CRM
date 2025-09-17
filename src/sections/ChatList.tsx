import { useState } from 'react'
import { Search } from 'lucide-react'
import { conversations } from '../data/mockData'

interface ChatListProps {
  selectedChatId: string | null
  onSelectChat: (id: string) => void
}

export default function ChatList({ selectedChatId, onSelectChat }: ChatListProps) {
  const [query, setQuery] = useState('')

  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <aside className='w-80 border-r bg-white flex flex-col'>
      <div className='p-3 relative'>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='Search...'
          className='w-full pl-8 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-300'
        />
        <Search size={16} className='absolute left-5 top-6 text-gray-400' />
      </div>
      <div className='flex-1 overflow-y-auto'>
        {filtered.map(c => (
          <div
            key={c.id}
            onClick={() => onSelectChat(c.id)}
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 ${
              selectedChatId === c.id ? 'bg-emerald-50 border-l-4 border-emerald-500' : ''
            }`}
          >
            <div className='w-12 h-12 rounded-full bg-emerald-500 text-white grid place-items-center font-bold'>
              {c.initials}
            </div>
            <div className='flex-1'>
              <p className='font-medium'>{c.name}</p>
              <p className='text-sm text-gray-500 truncate'>{c.preview}</p>
            </div>
            <span className='text-xs text-gray-400'>{c.time}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
