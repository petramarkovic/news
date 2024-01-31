export const CategorySkeleton = () => {
	return (
		<div className='w-full rounded-lg mb-3'>
			<div className='rounded-lg h-full flex justify-evenly flex-wrap gap-2'>
				<div className='w-full bg-primary h-10 p-3 rounded-lg animate-fadeInOut infinite mb-3'></div>
				<div className='animate-fadeInOut infinite flex-1'>
					<div className='bg-primary h-[12rem] rounded-lg animate-fadeInOut infinite'></div>
				</div>
				<div className='animate-fadeInOut infinite flex-1'>
					<div className='bg-primary h-[12rem] rounded-lg animate-fadeInOut infinite'></div>
				</div>
				<div className='animate-fadeInOut infinite flex-1'>
					<div className='bg-primary h-[12rem] rounded-lg animate-fadeInOut infinite'></div>
				</div>
			</div>
		</div>
	);
};
