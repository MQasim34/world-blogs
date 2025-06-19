import { Button } from '@/components/ui/button'
import Payments from '@/payments/page'

const page = () => {
    return (
        <div className="wrapper">
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2.5">
                    <Button>Add New Post</Button>
                </div>
                <div className="flex space-x-4">
                    <button className="font-mormal text-[13px] border-b-2 border-blue-900 text-blue-900">All</button>
                    <button className="font-mormal text-[13px] text-gray-500 hover:text-gray-700">Mine</button>
                    <button className="font-mormal text-[13px] text-gray-500 hover:text-gray-700">Published </button>
                    <button className="font-mormal text-[13px] text-gray-500 hover:text-gray-700">Draft</button>
                </div>
            </div>
            <Payments />
        </div>
    )
}

export default page
