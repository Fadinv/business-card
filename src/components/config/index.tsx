import {LangT} from '@/components/config/locale';
import {engLocale} from '@/components/config/locale/eng';
import {rusLocale} from '@/components/config/locale/rus';
import SkillBox from '@/components/skills/skillBox';
import React, {PropsWithChildren, useCallback, useContext, useState} from 'react';

export type SkillLvlT = 'beginner' | 'regular' | 'advanced';

export type SkillList = { skillName: string; lvl: SkillLvlT }[];

export const defaultContext = {
	locale: engLocale,
	lang: 'eng' as LangT,
	about: {
		textElements: [
			{
				text: {
					eng: 'Hi, I\'m Vladimir, a frontend developer passionate about crafting interactive and user-centric interfaces that make people\'s lives better.',
					rus: 'Привет Я Владимир, фронтенд-разработчик с страстью к созданию интерактивных и пользовательских интерфейсов, которые делают жизнь людей лучше.',
				},
			},
			{
				text: {
					eng: 'With a keen eye for detail and a love for staying up-to-date with the latest technologies, I strive to deliver high-quality solutions that exceed expectations and drive results.',
					rus: 'С внимательным взглядом на детали и любовью к обновлению своих навыков по последним технологиям, я стремлюсь доставлять высококачественные решения, которые превышают ожидания и приносят результаты.',
				},
			},
			{
				text: {
					eng: 'With a wealth of mentoring experience, I empower team members to grow, and I\'m always open to collaborative discussions, diving deep into details to achieve exceptional results.',
					rus: 'С богатым опытом наставничества, я помогаю членам команды расти, и я всегда открыт для совместных обсуждений, глубоко погружаясь в детали, чтобы достичь исключительных результатов.',
				},
			},
			{
				text: {
					eng: 'I\'m deeply passionate about my work and take ownership of the company\'s product, driving its success as if it were my own.',
					rus: 'Я глубоко увлечен своей работой и беру на себя ответственность за продукт компании, развивая его успех, как если бы он был моим собственным.',
				},
			},
		],
	},
	onChangeLang: (_: LangT) => {},
	skills: {
		list: [
			{skillName: 'TS', lvl: 'advanced'},
			{skillName: 'React', lvl: 'advanced'},
			{skillName: 'CSS/SASS', lvl: 'advanced'},
			{skillName: 'graphql', lvl: 'regular'},
			{skillName: 'git', lvl: 'regular'},
			{skillName: 'next.js', lvl: 'beginner'},
		] as SkillList,
	},
	softSkills: {
		list: [
			{skillName: 'Communication', lvl: 'advanced'},
			{skillName: 'Teamwork', lvl: 'advanced'},
			{skillName: 'Problem-Solving', lvl: 'advanced'},
			{skillName: 'Learning', lvl: 'advanced'},
			{skillName: 'Leadership', lvl: 'regular'},
			{skillName: 'Creativity', lvl: 'regular'},
		] as SkillList,
	},
};

export const ConfigContext = React.createContext(defaultContext);

export const ConfigProvider: React.FC<PropsWithChildren> = ({children}) => {
	const [config, setConfig] = useState(defaultContext);
	const [_, setVersion] = useState(0);
	const onChangeLang = useCallback((lang: LangT) => {
		if (lang === config.lang) return;
		const newConfig = Object.assign({}, config);
		newConfig.lang = lang;
		switch (lang) {
			case 'rus':
				newConfig.locale = rusLocale;
				break;
			case 'eng':
				newConfig.locale = engLocale;
				break;
		}
		setConfig(newConfig);
		setVersion(prev => prev++);
	}, [config]);

	return (
		<ConfigContext.Provider value={{...config, onChangeLang}}>
			{children}
		</ConfigContext.Provider>
	);
};

export const useConfig = () => {
	return useContext(ConfigContext);
};

export default ConfigProvider;