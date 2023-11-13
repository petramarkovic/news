import { Button } from '../ui/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  return (
    <nav>
        <ul className='flex'>
            <Button className='lowercase  hover:text-violet-500 py-5'>Top News</Button>
            <Button className='ml-6 lowercase hover:text-violet-600 py-5'>Categories</Button>
            <Button className='ml-6 lowercase hover:text-violet-600 py-5'>Search
              <MagnifyingGlassIcon className='h-6 w-6 ml-2 tex-violet-600 inline'/>
            </Button>
        </ul>
    </nav>
  )
}
