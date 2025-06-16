import '@/app/(frontendPages)/blogs/blogs.css'
import { lato, poppins } from '@/app/wp-admin/fonts/fonts'
const pag = () => {
  return (
    <div className="MainBlog flex items-center py-24">
      <div className="container p-2.5 m-auto">
        <div className='pt-16 flex flex-col gap-2.5'>
          <span className={`${lato} antialiased font-normal text-gray-300`}>Content Creator</span>
          <h1 className={`${poppins} antialiased font-bold text-white text-[36px]`}>The Creator’s Corner</h1>
        </div>
      </div>
    </div>
  )
}

export default pag
