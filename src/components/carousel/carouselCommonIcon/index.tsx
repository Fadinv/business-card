import cn from 'classnames';
import React, {FC} from 'react';
import styles from './styles.module.sass';

export interface CarouselCommonIconProps {
	url: string;
	isActive: boolean;
}

const CarouselCommonIcon: FC<CarouselCommonIconProps> = ({url, isActive}) => {
	return (
		<div
			className={cn(styles['carousel-common-icon'], {[styles['_active']]: isActive})}
			style={{backgroundImage: `url(${url})`}}
		/>
	);
};

export default CarouselCommonIcon;