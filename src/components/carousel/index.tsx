import CarouselPanel from '@/components/carousel/carouselPanel';
import React, {FC, ReactNode, useCallback, useRef, useState} from 'react';
import CarouselElement from '@/components/carousel/carouselElement';
import styles from './styles.module.sass';

export type CarouselList = CarouselSingleEl[];

export interface CarouselItemProps {
	isActive: boolean;
}

export interface CarouselSingleEl {
	component: FC<CarouselItemProps>;
	iconUrl: string;
}

export interface CarouselProps {
	list: CarouselList;
}

const Carousel: FC<CarouselProps> = ({list}) => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const isAnimatingRef = useRef(false);
	const animationAbsValue = useRef(0);

	const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
		if (isAnimatingRef.current) return;
		if (e.deltaY < -25 && currentIndex - 1 >= 0) {
			isAnimatingRef.current = true;
			setCurrentIndex(currentIndex - 1);
			setTimeout(() => isAnimatingRef.current = false, 700);
		}
		if (e.deltaY > 25 && currentIndex + 1 <= list.length - 1) {
			isAnimatingRef.current = true;
			setCurrentIndex(currentIndex + 1);
			setTimeout(() => isAnimatingRef.current = false, 700);
		}
	}, [currentIndex, isAnimatingRef.current]);

	const renderChildren = (Component: FC<{ isActive: boolean; }>, index: number): ReactNode => {
		const isActive = currentIndex === index;
		return <Component isActive={isActive}/>;
	};

	return (
		<div
			className={styles['carousel']}
			onWheel={onWheel}
		>
			<CarouselPanel
				list={list}
				currentIndex={currentIndex}
				onChange={setCurrentIndex}
			/>
			{list.map((item, index) => (
				<CarouselElement
					key={index}
					{...item}
					positionIndex={index}
					currentIndex={currentIndex}
				>
					{renderChildren(item.component, index)}
				</CarouselElement>
			))}
		</div>
	);
};

export default Carousel;