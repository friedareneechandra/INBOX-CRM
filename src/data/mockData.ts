export const conversations = [
  { id: '1', name: 'Sarah Johnson', initials: 'SJ', preview: 'Thank you for your help!', time: '2:30 PM' },
  { id: '2', name: 'Michael Chen', initials: 'MC', preview: 'I want to place a bulk order...', time: '1:45 PM' },
  { id: '3', name: 'Emily Davis', initials: 'ED', preview: 'Can you help with a return?', time: '11:20 AM' },
  { id: '4', name: 'Robert Wilson', initials: 'RW', preview: 'Great service, thanks!', time: 'Yesterday' },
  { id: '5', name: 'Sophia Lee', initials: 'SL', preview: 'What’s the shipping time?', time: 'Monday' },
]

export const messagesByConversation: Record<string, any[]> = {
  '1': [
    { from: 'me', text: 'Hello Sarah, how can I help you?', time: '2:00 PM', read: true },
    { from: 'them', text: 'Thank you for your help!', time: '2:30 PM', read: false },
  ],
  '2': [
    { from: 'me', text: 'Hi Michael!', time: '1:30 PM', read: true },
    { from: 'them', text: 'I want to place a bulk order...', time: '1:45 PM', read: false },
  ],
  '3': [
    { from: 'them', text: 'Can you help with a return?', time: '11:20 AM', read: false },
  ],
  '4': [
    { from: 'them', text: 'Great service, thanks!', time: 'Yesterday', read: false },
  ],
  '5': [
    { from: 'them', text: 'What’s the shipping time?', time: 'Monday', read: false },
  ],
}
