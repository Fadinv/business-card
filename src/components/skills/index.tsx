
import {CarouselItemProps} from '@/components/carousel';
import {useConfig} from '@/components/config';
import SkillBox from '@/components/skills/skillBox';
import React, {FC} from 'react';
import Text from '@/components/text';
import styles from './styles.module.sass';

interface SkillsProps extends CarouselItemProps {

}

const Skills: FC<SkillsProps> = ({isActive}) => {
	const {skills, locale} = useConfig();

	return (
		<div className={styles['skills']}>
			<Text as={'h1'} text={locale.skills.title}/>
			<div style={{margin: '20px'}}/>
			<div className={styles['skills__list']}>
				{skills.list.map((skill, index) => (
					<SkillBox
						key={index}
						skillName={skill.skillName}
						lvl={skill.lvl}
						hasAnimation
						animationDelay={500 + index * 200}
						inView={isActive}
					/>
				))}
			</div>
		</div>
	);
};

interface SoftSkillsProps extends CarouselItemProps {

}

export const SoftSkills: FC<SoftSkillsProps> = ({isActive}) => {
	const {softSkills, locale} = useConfig();
	return (
		<div className={styles['skills']}>
			<Text as={'h1'} text={locale.softSkills.title}/>
			<div style={{margin: '.5em'}}/>
			<div className={styles['skills__list']}>
				{softSkills.list.map((skill, index) => (
					<SkillBox
						key={index}
						skillName={skill.skillName}
						lvl={skill.lvl}
						hasAnimation
						animationDelay={500 + index * 200}
						inView={isActive}
					/>
				))}
			</div>
		</div>
	);
}

export default Skills;