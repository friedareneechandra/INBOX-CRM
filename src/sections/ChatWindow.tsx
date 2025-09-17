import { useState, useEffect } from 'react'
import { Send, CheckCheck } from 'lucide-react'
import { messagesByConversation } from '../data/mockData'

interface ChatWindowProps {
  chatId: string | null
}

export default function ChatWindow({ chatId }: ChatWindowProps) {
  const [text, setText] = useState('')
  const [chat, setChat] = useState<any[]>([])

  useEffect(() => {
    if (chatId) {
      setChat(messagesByConversation[chatId] || [])
    }
  }, [chatId])

  const handleSend = () => {
    if (!text.trim() || !chatId) return
    const newMsg = { from: 'me', text, time: 'Now', read: false }
    setChat([...chat, newMsg])
    messagesByConversation[chatId] = [...(messagesByConversation[chatId] || []), newMsg]
    setText('')
  }

  if (!chatId) {
    return (
      <section className='flex-1 flex items-center justify-center bg-gray-100 text-gray-400'>
        Select a conversation to start chatting
      </section>
    )
  }

  return (
    <section className='flex-1 flex flex-col bg-gray-100'>
      <div className='flex-1 overflow-y-auto p-4 space-y-3'>
        {chat.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm shadow ${
                m.from === 'me'
                  ? 'bg-emerald-500 text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none'
              }`}
            >
              <p>{m.text}</p>
              <div className='text-[10px] mt-1 flex items-center gap-1 justify-end opacity-70'>
                {m.time}
                {m.from === 'me' && <CheckCheck size={12} className={m.read ? 'text-blue-400' : ''} />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='p-3 bg-white border-t flex gap-2'>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
          placeholder='Type a message...'
          rows={1}
          className='flex-1 resize-none border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-300'
        />
        <button
          onClick={handleSend}
          className='bg-emerald-500 hover:bg-emerald-600 text-white px-4 rounded-lg flex items-center'
        >
          <Send size={18} />
        </button>
      </div>
    </section>
  )
}
