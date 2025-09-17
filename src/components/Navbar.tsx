export default function Navbar() {
  return (
    <header className='h-16 bg-white border-b shadow-sm flex items-center px-6'>
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 bg-emerald-500 text-white grid place-items-center rounded-full font-bold'>
          P
        </div>
        <h1 className='font-semibold text-lg'>Pebble Hub Inbox</h1>
      </div>
      <div className='ml-auto'>
        <input
          type='text'
          placeholder='Search...'
          className='px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-300'
        />
      </div>
    </header>
  )
}