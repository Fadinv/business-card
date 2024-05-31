import React, {PropsWithChildren} from 'react';
import styles from './styles.module.sass';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

const Main: React.FC<PropsWithChildren> = ({children}) => {
	return (
		<div className={`${styles.main} ${inter.className}`}>
			{children}
		</div>
	);
};

export default Main;