import cn from 'classnames';
import React, {FC} from 'react';
import styles from './styles.module.sass';

export interface LanguageIconProps {
	url: string;
}

const LanguageIcon: FC<LanguageIconProps> = ({url}) => {
	return (
		<div
			className={cn(styles['switcher-icon'])}
			style={{backgroundImage: `url(${url})`}}
		/>
	);
};

export default LanguageIcon;