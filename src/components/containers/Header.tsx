import { Wrap } from '../ui/Wrap';
import { Navbar } from './Navbar';
import { LanguageSwitcher } from './LanguageSwitcher';

const Header = () => {
	return (
		<header className='bg-slate-50 shadow-sm'>
			<Wrap>
				<div className='flex items-center justify-between'>
					<Navbar />
					<LanguageSwitcher />
				</div>
			</Wrap>
		</header>
	);
};

export default Header;
