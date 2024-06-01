import React, {CSSProperties, FC, ReactNode, useEffect, useState} from 'react';
import styles from './styles.module.sass';

export interface CarouselElementProps {
	positionIndex: number;
	currentIndex: number;
	children: ReactNode;
}

const CarouselElement: FC<CarouselElementProps> = ({positionIndex, currentIndex, children}) => {
	const [currentStyle, setCurrentStyle] = useState<CSSProperties>({});

	useEffect(() => {
		const top: CSSProperties['top'] = positionIndex - currentIndex === 0 ? `0` : `${positionIndex - currentIndex}00%`;
		const opacity: CSSProperties['top'] = positionIndex === currentIndex ? '1' : '0';
		setCurrentStyle({top, opacity});
	}, [positionIndex, currentIndex]);

	return (
		<div
			className={styles['carousel-element']}
			style={currentStyle}
		>
			{children}
		</div>
	);
};

export default CarouselElement;