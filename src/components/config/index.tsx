import {LangT} from '@/components/config/locale';
import {engLocale} from '@/components/config/locale/eng';
import {rusLocale} from '@/components/config/locale/rus';
import React, {PropsWithChildren, useContext, useState} from 'react';

export const defaultContext = {
	locale: engLocale,
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
		]
	},
};

export const ConfigContext = React.createContext(defaultContext);

export const ConfigProvider: React.FC<PropsWithChildren> = ({children}) => {
	const [contextValue, setContextValue] = useState(defaultContext);

	return (
		<ConfigContext.Provider value={contextValue}>
			{children}
		</ConfigContext.Provider>
	);
};

export const useConfig = () => {
	const [_, setVersion] = useState(0);
	const [currentLang, setCurrentLang] = useState<LangT>('eng');
	const config = useContext(ConfigContext);
	const onChangeLang = (lang: LangT) => {
		if (lang === currentLang) return;

		switch (lang) {
			case 'eng':
				config.locale = engLocale;
				break;
			case 'rus':
				config.locale = rusLocale;
				break;
		}
		setCurrentLang(lang);
		setVersion(prev => prev++);
	};
	return {config, lang: currentLang, onChangeLang};
};

export default ConfigProvider;