import React, {FC, useCallback, useRef, useState} from 'react';
import CarouselElement, {CarouselSingleEl} from '@/components/carousel/carouselElement';
import styles from './styles.module.sass';

export type CarouselList = CarouselSingleEl[];

export interface CarouselProps {
	list: CarouselList;
}

const Carousel: FC<CarouselProps> = ({list}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const isAnimatingRef = useRef(false);

	const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
		if (isAnimatingRef.current) return;
		e.stopPropagation();
		e.preventDefault();
		if (e.deltaY < -25 && currentIndex - 1 >= 0) {
			isAnimatingRef.current = true;
			setCurrentIndex(currentIndex - 1);
			setTimeout(() => isAnimatingRef.current = false, 500);
		}
		if (e.deltaY > 25 && currentIndex + 1 <= list.length - 1) {
			isAnimatingRef.current = true;
			setCurrentIndex(currentIndex + 1);
			setTimeout(() => isAnimatingRef.current = false, 500);
		}
	}, [currentIndex, isAnimatingRef.current]);

	return (
		<div
			className={styles['carousel']}
			onWheel={onWheel}
		>
			{list.map((item, index) => (
				<CarouselElement
					key={index}
					{...item}
					positionIndex={index}
					currentIndex={currentIndex}
				/>
			))}
		</div>
	);
};

export default Carousel;