import {CarouselItemProps} from '@/components/carousel';
import {useConfig} from '@/components/config';
import Socials from '@/components/socials';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React, {FC, useEffect} from 'react';
import styles from './styles.module.sass';
import Text from '../../text';

export interface MeProps extends CarouselItemProps {

}

const Me: FC<MeProps> = ({isActive}) => {
	const {config} = useConfig();

	return (
		<div className={styles['me']}>
			<div className={styles['me__img-box']}>
				<svg
					className={styles['me__img-box-circle']}
					width="340"
					height="340"
					viewBox="0 0 240 240"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d_16_162)">
						<path fillRule="evenodd" clipRule="evenodd"
						      d="M12.7551 119.035C11.2244 119.035 9.97599 120.268 10.0004 121.799C10.3984 146.804 19.2802 171.81 36.9712 192.161C76.8295 238.013 146.311 242.872 192.163 203.014C238.015 163.155 242.873 93.6735 203.015 47.8217C181.701 23.3026 151.916 10.5057 121.803 10.0004C120.272 9.97469 119.037 11.2234 119.037 12.755C119.037 14.3049 120.3 15.5537 121.85 15.5818C150.388 16.0985 178.604 28.2446 198.804 51.4822C236.64 95.0082 232.028 160.965 188.502 198.802C144.976 236.638 79.019 232.026 41.1825 188.5C24.4227 169.221 15.9917 145.539 15.5821 121.851C15.5553 120.3 14.306 119.035 12.7551 119.035Z"
						      fill="#aa862c"/>
					</g>
					<defs>
						<filter id="filter0_d_16_162" x="0" y="0" width="340" height="340"
						        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix"
							               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset/>
							<feGaussianBlur stdDeviation="5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix"
							               values="0 0 0 0 0 0.9 0 0 0.9 0.4 0 0 0 0 1 0 0 0 0.75 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_162"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_162"
							         result="shape"/>
						</filter>
					</defs>
				</svg>
				<Image
					className={styles['me__img-box-logo']}
					src="/me-main.jpg"
					alt="Next.js Logo"
					layout={'fill'}
					objectFit={'cover'}
					unoptimized={true}

				/>
			</div>
			<Text
				hasAnimation
				animationDelay={500}
				inView={isActive}
				useMargin
				as={'h1'}
				text={config.locale.me.name}
			/>
			<Text
				hasAnimation
				animationDelay={700}
				inView={isActive}
				as={'description'}
				text={config.locale.me.jobTitle}
			/>
			<Socials
				hasAnimation
				animationDelay={900}
				inView={isActive}
			/>
		</div>
	);
};

export default Me;