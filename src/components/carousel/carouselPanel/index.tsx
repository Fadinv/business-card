import {CarouselList} from '@/components/carousel';
import CarouselCommonIcon from '@/components/carousel/carouselCommonIcon';
import cn from 'classnames';
import React, {FC} from 'react';
import styles from './styles.module.sass';

export interface CarouselPanelProps {
	currentIndex: number;
	list: CarouselList;
	onChange(index: number): void;
}

const CarouselPanel: FC<CarouselPanelProps> = ({list, currentIndex, onChange}) => {
	return (
		<div className={styles['carousel-panel']}>
			{list.map((item, index) => {
				return (
					<div
						key={index}
						className={styles['carousel-panel__el-box']}
						onClick={() => onChange(index)}
					>
						<div className={cn(styles['carousel-panel__el'], {[styles['_active']]: currentIndex === index})}>
							<div className={cn(styles['carousel-panel__img-box'], {[styles['_active']]: currentIndex === index})}>
								<CarouselCommonIcon isActive={currentIndex === index} url={item.iconUrl}/>
							</div>
						</div>
						{index < list.length - 1 && (
							<div className={cn(styles['carousel-panel__el-sep'], {[styles['_active']]: currentIndex === index + 1 || currentIndex === index})}>

							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default CarouselPanel;