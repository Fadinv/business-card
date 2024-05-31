import React from 'react';
import {useRouter} from 'next/router';
import styles from './styles.module.sass';
import {Inter} from 'next/font/google';
import cn from 'classnames';

const inter = Inter({subsets: ['latin']});

interface NavProps {
	firstPart: React.ReactNode;
	firstPartIsHomeLink?: boolean
	secondPart: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({firstPart, firstPartIsHomeLink, secondPart}) => {
	const router = useRouter();
	return (
		<div className={styles.nav}>
			<div
				onClick={() => firstPartIsHomeLink && router.push('/')}
				className={cn(styles['first-node'], {[styles['_clickable']]: firstPartIsHomeLink})}
			>
				{firstPartIsHomeLink && <span className={inter.className}>&lt;-</span>}
				{firstPart}
			</div>
			<div className={styles['second-node']}>
				{secondPart}
			</div>
		</div>
	);
};

export default Nav;