import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  return (
    <nav>
        <ul className='flex'>
            <Link to="/" className='text-xl text-slate-500 font-bold transition ease-in-out lowercase hover:text-violet-500 py-5'>Top News</Link>
            <Link to="/categories" className='text-xl text-slate-500 font-bold transition ease-in-out ml-6 lowercase hover:text-violet-600 py-5'>Categories</Link>
            <Button className='ml-6 lowercase hover:text-violet-600 py-5'>Search
              <MagnifyingGlassIcon className='h-6 w-6 ml-2 tex-violet-600 inline'/>
            </Button>
        </ul>
    </nav>
  )
}
