import { Button } from '../ui/Button';

export const Navbar = () => {
  return (
    <nav>
        <ul className='flex'>
            <Button className='lowercase  hover:text-violet-500'>Top News</Button>
            <Button className='ml-6 lowercase hover:text-violet-600'>Categories</Button>
            <Button className='ml-6 lowercase hover:text-violet-600'>Search</Button>
        </ul>
    </nav>
  )
}
