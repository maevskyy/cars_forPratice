'use client';

import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

type Props = {
	pageNumber: number;
	isNext: boolean;
};

const ShowMore = ({ pageNumber, isNext }: Props) => {
	const router = useRouter();

    const newLimit = (pageNumber + 1) * 10

	const handleNavigation = () => {
        const newPathName = updateSearchParams('limit', String(newLimit))

        router.push(newPathName)
    };

    
	return (
		<div className='w-full flex-center gap-5 mt-10 '>
			{isNext && (
				<CustomButton
					title='Show more'
					btnType='button'
					containerStyles=' bg-primary-blue rounded-full
            text-white'
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMore;
