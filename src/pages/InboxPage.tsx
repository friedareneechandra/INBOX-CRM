import { useState } from 'react'
import ChatList from '../sections/ChatList'
import ChatWindow from '../sections/ChatWindow'
import CustomerInfo from '../sections/CustomerInfo'

export default function InboxPage() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)

  return (
    <div className='flex h-full'>
      <ChatList selectedChatId={selectedChatId} onSelectChat={setSelectedChatId} />
      <ChatWindow chatId={selectedChatId} />
      <CustomerInfo />
    </div>
  )
}
