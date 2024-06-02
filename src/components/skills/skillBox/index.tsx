import {SkillLvlT} from '@/components/config';
import {useDebounceValue} from '@/hooks/useDebounceValue';
import React, {FC, useMemo} from 'react';
import styles from './styles.module.sass';
import cn from 'classnames';

export interface SkillBoxProps {
	skillName: string;
	lvl: SkillLvlT;
	animationDelay?: number;
	hasAnimation?: boolean;
	inView?: boolean;
}

const SkillBox: FC<SkillBoxProps> = (
	{
		skillName,
		lvl,
		inView,
		animationDelay,
		hasAnimation,
	}) => {
	const delay = useMemo(() => animationDelay ?? 500, [animationDelay]);
	const doAnimate = useDebounceValue(inView, delay, inView === false);
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
				<div className={cn(styles['skill-box__line-inner'], styles[`_${lvl}`], {
					[styles['_has-animation']]: hasAnimation,
					[styles['_do-animate']]: doAnimate,
				})}/>
			</div>
		</div>
	);
};

export default SkillBox;