export const CategorySkeleton = () => {
	return (
		<div className='w-full rounded-lg mb-3'>
			<div className='rounded-lg h-full flex justify-between flex-wrap'>
				<div className='w-full bg-primary h-10 p-3 rounded-lg animate-fadeInOut infinite mb-3'></div>
				<div className='animate-fadeInOut infinite w-1/3'>
					<div className='bg-primary h-6 rounded-lg mb-5 animate-fadeInOut infinite'></div>
					<div className='bg-primary h-12 rounded-lg mb-6 animate-fadeInOut infinite'></div>
					<div className='bg-primary h-40 rounded-lg animate-fadeInOut infinite'></div>
				</div>
				<div className='animate-fadeInOut infinite w-1/3'>
					<div className='bg-primary h-6 rounded-lg mb-5 animate-fadeInOut infinite'></div>
					<div className='bg-primary h-12 rounded-lg mb-6 animate-fadeInOut infinite'></div>
					<div className='bg-primary h-40 rounded-lg animate-fadeInOut infinite'></div>
				</div>
				<div className='animate-fadeInOut infinite w-1/3'>
					<div className='bg-primary h-6 rounded-lg mb-5 animate-fadeInOut infinite'></div>
					<div className='bg-primary h-12 rounded-lg mb-6 animate-fadeInOut infinite'></div>
					<div className='bg-primary h-40 rounded-lg animate-fadeInOut infinite'></div>
				</div>
			</div>
		</div>
	);
};
