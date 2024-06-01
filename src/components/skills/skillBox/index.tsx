import Text from '@/components/text';
import React, {FC, useMemo} from 'react';
import styles from './styles.module.sass';
import cn from 'classnames';

export type SkillLvlT = 'beginner' | 'regular' | 'advanced';

export interface SkillBoxProps {
	skillName: string;
	lvl: SkillLvlT;
}

const SkillBox: FC<SkillBoxProps> = ({skillName, lvl}) => {
	return (
		<div className={styles['skill-box']}>
			<div className={styles['skill-box__header']}>
				<div className={styles['skill-box__name']}>
					{skillName}
				</div>
				<span className={styles['skill-box__lvl']}>
					{lvl}
				</span>
			</div>
			<div className={styles['skill-box__line']}>
				<div className={cn(styles['skill-box__line-inner'], styles[`_${lvl}`])}></div>
			</div>
		</div>
	);
};

export default SkillBox;