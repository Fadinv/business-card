import {CarouselItemProps} from '@/components/carousel';
import {useConfig} from '@/components/config';
import Text from '@/components/text';
import React, {FC} from 'react';
import styles from './styles.module.sass';

export interface AboutMeProps extends CarouselItemProps {}

const AboutMe: FC<AboutMeProps> = ({isActive}) => {
	const {config, lang} = useConfig();
	return (
		<div className={styles['about-me']}>
			<Text
				as={'h1'}
				text={config.locale.about.title}
				inView={isActive}
				animationDelay={500}
				hasAnimation
			/>

			{config.about.textElements.map((el, index) => (
				<Text
					key={index}
					text={el.text[lang]}
					textAlign={'center'}
					inView={isActive}
					animationDelay={700 + 500 * index}
					hasAnimation
				/>
			))}
		</div>
	);
};

export default AboutMe;