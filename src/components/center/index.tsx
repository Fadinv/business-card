import React, {PropsWithChildren} from 'react';
import styles from './styles.module.sass';

const Center: React.FC<PropsWithChildren> = ({children}) => {
	return (
		<div className={styles.center}>
			{children}
		</div>
	);
};

export default Center;