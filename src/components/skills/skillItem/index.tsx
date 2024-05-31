import React, {FC, ReactNode} from 'react';
import styles from './styles.module.sass';

export interface SkillItemProps {
	icon: ReactNode;
	text: string;
}

const SkillItem: FC<SkillItemProps> = ({icon, text}) => {
	return (
		<div className={styles['skill-item']}>
			<div>
				{icon}
			</div>
			<div className={styles['skill-item__text']}>
				{text}
			</div>
		</div>
	);
};

export default SkillItem;