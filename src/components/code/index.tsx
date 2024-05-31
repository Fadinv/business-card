import React, {PropsWithChildren} from 'react';
import styles from './styles.module.sass';

const Code: React.FC<PropsWithChildren> = ({children}) => {
	return (
		<code className={styles.code}>
			{children}
		</code>
	);
};

export default Code;