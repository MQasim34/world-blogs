// app/dashboard/pages/page.tsx
import Link from 'next/link';
import { lato } from '../../fonts/fonts';
import '@/app/wp-admin/ui/pages/pages.css'

export default function PageManagement() {
  const pages = [
    { id: 1, title: 'About Us', author: 'DEV1', status: 'Published', date: '2025/04/05 at 9:22 pm' },
    { id: 2, title: 'Contact Us', author: 'DEV1', status: 'Published', date: '2025/04/05 at 11:44 pm' },
    { id: 3, title: 'Dock/Cargo Services', author: 'DEV1', status: 'Published', date: '2025/04/05 at 11:36 pm' },
    { id: 4, title: 'Home — Front Pag', author: 'DEV1', status: 'Published', date: '2025/04/02 at 9:36 pm' },
    { id: 5, title: 'Latest News — Posts Page', author: 'DEV1', status: 'Published', date: '2025/04/05 at 11:44 pm' },
    { id: 6, title: 'Privacy Policy — Draft, Privacy Policy Page', author: 'AGTS', status: 'Draft', date: 'Last Modified 2023/03/21 at 6:20 pm' },
    { id: 7, title: 'Sample Page', author: 'AGTS', status: 'Published', date: 'Published 2023/03/21 at 6:20 pm' },
  ];

  const publishedCount = pages.filter(page => page.status === 'Published').length;
  const draftCount = pages.filter(page => page.status === 'Draft').length;

  return (
    <div className="container flex flex-col mx-auto gap-5">      
      {/* Status Tabs */}
      <div className='flex items-center justify-between '>
      <div className="flex space-x-4">
        <button className="font-mormal text-[13px] border-b-2 border-blue-900 text-blue-900">All ({pages.length})</button>
        <button className="font-mormal text-[13px] text-gray-500 hover:text-gray-700">Mine ({pages.filter(p => p.author === 'DEV1').length})</button>
        <button className="font-mormal text-[13px] text-gray-500 hover:text-gray-700">Published ({publishedCount})</button>
        <button className="font-mormal text-[13px] text-gray-500 hover:text-gray-700">Draft ({draftCount})</button>
      </div>
      <div className='flex gap-2.5'>
        <input 
            type="text" 
            placeholder="Search Pages" 
            className="border rounded px-3 py-1"
          />
          <button className={`${lato} antialiased flex items-center justify-center gap-2 font-medium text-[12px] border-l-3 shadow rounded px-5 cursor-pointer py-2 hover:bg-blue-100 hover:text-blue-900 hover:border-l-3 hover:border-blue-900`}>Search Pages</button>
      </div>
      </div>
      
      {/* Action Bar */}
      <div className="flex items-center gap-5">
        <div className="flex gap-2.5">
          <select className="border rounded px-3 py-1">
            <option>Bulk actions</option>
            <option>Edit</option>
            <option>Move to Trash</option>
          </select>
          <button className={`${lato} antialiased flex items-center justify-center gap-2 font-medium text-[12px] border-l-3 shadow rounded px-5 cursor-pointer py-2 hover:bg-blue-100 hover:text-blue-900 hover:border-l-3 hover:border-blue-900`}>Apply</button>
        </div>
        <div className="flex gap-2.5">
          <select className="border rounded px-3 py-1">
            <option>All dates</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
          <button className={`${lato} antialiased flex items-center justify-center gap-2 font-medium text-[12px] border-l-3 shadow rounded px-5 cursor-pointer py-2 hover:bg-blue-100 hover:text-blue-900 hover:border-l-3 hover:border-blue-900`}>Filter</button>
        </div>
      </div>
      
      {/* Pages Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pages.map((page) => (
              <tr key={page.id} className='page_table_hover_effect'>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col items-start">
                    <div className="text-sm font-medium text-gray-900">
                      {page.title.includes('Draft') ? (
                        <span className="text-gray-500">{page.title.split('—')[0]}—<span className="bg-gray-100 px-2 py-1 rounded text-gray-700 text-xs">Draft</span>, {page.title.split(', ')[1]}</span>
                      ) : (
                        page.title
                      )}
                    </div>
                    <div className="show_On_hover space-x-2">
                      <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">Edit</Link>
                      <span className="text-gray-300">|</span>
                      <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">Quick Edit</Link>
                      <span className="text-gray-300">|</span>
                      <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">Trash</Link>
                      <span className="text-gray-300">|</span>
                      <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">View</Link>
                      {page.title.includes('Elementor') && (
                        <>
                          <span className="text-gray-300">|</span>
                          <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">Delete Cache</Link>
                          <span className="text-gray-300">|</span>
                          <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">Edit with Elementor</Link>
                        </>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {page.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {page.date.startsWith('Last Modified') ? (
                    <span className="text-gray-400">{page.date}</span>
                  ) : (
                    <span className='flex flex-col'> 
                      <div>Published </div>
                      {page.date}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-sm text-gray-500">
        {pages.length} items
      </div>
    </div>
  );
}