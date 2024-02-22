export const CardSkeleton = () => {
	return (
		<div className="sm:w-full sm:max-w-full md:w-1/2 lg:w-1/3 p-2 self-stretch transition justify-stretch relative animate-pulse">
			<div className='shadow-md rounded-lg h-full flex flex-col hover:cursor-pointer transition '>
				<div className='relative min-h-[20rem] max-h-[20rem]'>
				<div className='absolute top-0 left-0 w-full h-full bg-primary rounded-t-lg rounded-tr-lg'></div>
				</div>
			</div>
		</div>
	);
};
