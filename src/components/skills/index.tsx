
import SkillBox from '@/components/skills/skillBox';
import React, {FC} from 'react';
import Text from '@/components/text';
import styles from './styles.module.sass';

const Skills: FC = () => {
	return (
		<div className={styles['skills']}>
			<Text as={'h1'} text={'Skills'}/>
			<div className={styles['skills__list']}>
				<SkillBox skillName={'JS'} lvl={'advanced'}/>
				<SkillBox skillName={'react'} lvl={'advanced'}/>
				<SkillBox skillName={'HTML'} lvl={'advanced'}/>
				<SkillBox skillName={'CSS/SASS'} lvl={'advanced'}/>
				<SkillBox skillName={'TS'} lvl={'regular'}/>
				<SkillBox skillName={'graphql'} lvl={'regular'}/>
				<SkillBox skillName={'webpack'} lvl={'regular'}/>
				<SkillBox skillName={'git'} lvl={'regular'}/>
				<SkillBox skillName={'redux'} lvl={'beginner'}/>
				<SkillBox skillName={'next.js'} lvl={'beginner'}/>
				<SkillBox skillName={'Vue'} lvl={'beginner'}/>
			</div>
		</div>
	);
};

export const SoftSkills: FC = () => {
	return (
		<div className={styles['skills']}>
			<Text as={'h1'} text={'Soft Skills'}/>
			<div className={styles['skills__sep']}/>
			<div className={styles['skills__list']}>
				<SkillBox skillName={'Communication'} lvl={'advanced'}/>
				<SkillBox skillName={'Teamwork'} lvl={'advanced'}/>
				<SkillBox skillName={'Problem-Solving'} lvl={'advanced'}/>
				<SkillBox skillName={'Learning'} lvl={'advanced'}/>
				<SkillBox skillName={'Leadership'} lvl={'regular'}/>
				<SkillBox skillName={'Creativity'} lvl={'regular'}/>
			</div>
		</div>
	);
}

export default Skills;