import React, { SVGProps } from 'react';

type GermanIconProps = SVGProps<SVGSVGElement>;

export const GermanIcon: React.FC<GermanIconProps> = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlSpace='preserve'
			viewBox='0 0 512 512'
			width={22}
			height={20}>
			<path
				d='M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v73.471h512v-73.471c0-21.178-17.167-38.345-38.345-38.345z'
				style={{
					fill: '#464655'
				}}
			/>
			<path
				d='M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471H0v73.471z'
				style={{
					fill: '#ffe15a'
				}}
			/>
			<path
				d='M0 200.09h512V311.9H0z'
				style={{
					fill: '#ff4b55'
				}}
			/>
		</svg>
	);
};
