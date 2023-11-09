import { Wrap } from '../ui/Wrap';
import { Navbar } from './Navbar';

const Header = () => {
  return (
    <header className='bg-slate-50 py-6 shadow-sm'>
        <Wrap>
            <Navbar />
        </Wrap>
    </header>
  )
}

export default Header