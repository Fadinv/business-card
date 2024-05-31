import React, {FC, useMemo} from 'react';
import styles from './styles.module.sass';
import cn from 'classnames';

export type SkillLvlT = 'low' | 'medium' | 'high';

export interface SkillBoxProps {
	skillName: string;
	lvl: SkillLvlT;
}

const SkillBox: FC<SkillBoxProps> = ({skillName, lvl}) => {
	return (
		<div className={styles['skill-box']}>
			<span
				className={cn(styles['skill-box__lvl'], styles[`_${lvl}`])}
			>
				{lvl}
			</span>
			<div
				className={cn(styles['skill-box__cell'], styles[`_${lvl}`])}
			>
				{skillName}
			</div>
		</div>
	);
};

export default SkillBox;