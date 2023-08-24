'use client';

import { MouseEventHandler } from 'react';
import Image from 'next/image';

type Props = {
	title: string;
	containerStyles?: string;
	textStyles?: string;
	rightIcon?: string;
	isDisabled?: boolean;
	btnType?: 'button' | 'submit';
	handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = (props: Props) => {
	const { title, containerStyles,
    handleClick, btnType, textStyles, rightIcon } = props;

	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image 
					src={rightIcon}
					alt='right icon'
					fill
					className='object-contain'
					/>
				</div>
			)}
		</button>
	);
};

export default CustomButton;
