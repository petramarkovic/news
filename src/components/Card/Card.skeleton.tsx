export const CardSkeleton = () => {
	return (
		<div className='sm:w-full md:w-1/2 lg:w-1/3 p-2 self-stretch '>
			<div className='p-4 rounded-lg h-full flex flex-col'>
				<div className='bg-primary h-40 w-full rounded-lg animate-fadeInOut infinite'></div>
			</div>
		</div>
	);
};
