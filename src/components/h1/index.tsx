import React from 'react';
import styles from './styles.module.sass';

interface H1Props {
}

const H1: React.FC<H1Props> = ({children}) => {
	return (
		<div className={styles['h1']}>
			<div className={styles['h1__sep']}/>
			<h1 className={styles['h1__el']}>
				{children}
			</h1>
			<div className={styles['h1__sep']}/>
		</div>
	);
};

export default H1;