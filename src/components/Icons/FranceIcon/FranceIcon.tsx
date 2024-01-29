import React, { SVGProps } from 'react';

type FranceIconProps = SVGProps<SVGSVGElement>;

export const FranceIcon: React.FC<FranceIconProps> = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlSpace='preserve'
			viewBox='0 0 512 512'
			width={22}
			height={20}
		>
			<path
				d='M38.345 88.273C17.167 88.273 0 105.44 0 126.618v258.759c0 21.177 17.167 38.345 38.345 38.345h132.322V88.273H38.345z'
				style={{
					fill: '#41479b'
				}}
			/>
			<path
				d='M170.67 88.277h170.67v335.45H170.67z'
				style={{
					fill: '#f5f5f5'
				}}
			/>
			<path
				d='M473.655 88.273H341.333v335.448h132.322c21.177 0 38.345-17.167 38.345-38.345V126.618c0-21.178-17.167-38.345-38.345-38.345z'
				style={{
					fill: '#ff4b55'
				}}
			/>
		</svg>
	);
};
