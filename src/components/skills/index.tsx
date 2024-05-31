
import SkillBox from '@/components/skills/skillBox';
import React, {FC} from 'react';
import Text from '@/components/text';
import styles from './styles.module.sass';

const Skills: FC = () => {
	return (
		<div className={styles['skills']}>
			<Text as={'h1'} text={'Skills'}/>
			<div className={styles['skills__sep']}/>
			<div className={styles['skills__list']}>
				<SkillBox skillName={'JS'} lvl={'high'}/>
				<SkillBox skillName={'react'} lvl={'high'}/>
				<SkillBox skillName={'TS'} lvl={'medium'}/>
				<SkillBox skillName={'graphql'} lvl={'medium'}/>
				<SkillBox skillName={'webpack'} lvl={'medium'}/>
				<SkillBox skillName={'git'} lvl={'medium'}/>
				<SkillBox skillName={'HTML'} lvl={'high'}/>
				<SkillBox skillName={'CSS/SASS'} lvl={'high'}/>
				<SkillBox skillName={'redux'} lvl={'low'}/>
				<SkillBox skillName={'next.js'} lvl={'low'}/>
				<SkillBox skillName={'Vue'} lvl={'low'}/>
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
				<SkillBox skillName={'Communication'} lvl={'high'}/>
				<SkillBox skillName={'Teamwork'} lvl={'high'}/>
				<SkillBox skillName={'Problem-Solving'} lvl={'high'}/>
				<SkillBox skillName={'Learning'} lvl={'high'}/>
				<SkillBox skillName={'Leadership'} lvl={'medium'}/>
				<SkillBox skillName={'Creativity'} lvl={'medium'}/>
			</div>
		</div>
	);
}

export default Skills;