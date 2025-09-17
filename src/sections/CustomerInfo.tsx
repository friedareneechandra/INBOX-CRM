export default function CustomerInfo() {
  return (
    <aside className='w-80 bg-white border-l p-6 flex flex-col'>
      <div className='flex flex-col items-center'>
        <div className='w-20 h-20 rounded-full bg-emerald-500 grid place-items-center text-white text-2xl font-bold'>S</div>
        <h3 className='mt-3 text-lg font-semibold'>Sarah Johnson</h3>
        <span className='text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full mt-1'>Active</span>
      </div>

      <div className='mt-6 text-sm space-y-3'>
        <p><span className='font-medium'>Phone:</span> +1 555 123 4567</p>
        <p><span className='font-medium'>Order ID:</span> ORD-23948</p>
        <p><span className='font-medium'>Total Orders:</span> 5</p>
        <p><span className='font-medium'>Last Order:</span> 2 weeks ago</p>
      </div>

      <div className='mt-6 flex gap-2'>
        <span className='px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full'>VIP</span>
        <span className='px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full'>Repeat</span>
      </div>

      <div className='mt-auto flex flex-col gap-3'>
        <button className='w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600'>+ Add Note</button>
        <button className='w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50'>View History</button>
      </div>
    </aside>
  )
}