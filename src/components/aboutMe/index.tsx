import {CarouselItemProps} from '@/components/carousel';
import {useConfig} from '@/components/config';
import Text from '@/components/text';
import React, {FC} from 'react';
import styles from './styles.module.sass';

export interface AboutMeProps extends CarouselItemProps {}

const AboutMe: FC<AboutMeProps> = ({isActive}) => {
	const {locale, lang, about} = useConfig();
	return (
		<div className={styles['about-me']}>
			<div className={styles['about-me__container']}>
				<Text
					as={'h1'}
					text={locale.about.title}
					inView={isActive}
					animationDelay={500}
					hasAnimation
				/>

				{about.textElements.map((el, index) => (
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
		</div>
	);
};

export default AboutMe;