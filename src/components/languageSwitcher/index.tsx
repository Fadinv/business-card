import {useConfig} from '@/components/config';
import {LangT} from '@/components/config/locale';
import LanguageIcon from '@/components/languageSwitcher/languageIcon';
import cn from 'classnames';
import React, {useMemo} from 'react';
import styles from './styles.module.sass';

interface LanguageSwitcherProps {

}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({}) => {
	const config = useConfig();
	const languages = useMemo<{ lang: LangT, iconUrl: string }[]>(() => {
		return [
			{lang: 'rus', iconUrl: '/flag-ru-svgrepo-com.svg'},
			{lang: 'eng', iconUrl: '/flag-gb-eng-svgrepo-com.svg'},
		];
	}, []);

	return (
		<div className={styles['language-switcher']}>
			{languages.map((item, index) => (
				<div
					key={index}
					className={cn(styles['language-switcher__el'], {
						[styles['_active']]: config.lang === item.lang
					})}
					onClick={() => config.onChangeLang(item.lang)}
				>
					<LanguageIcon url={item.iconUrl}/>
				</div>
			))}
		</div>
	);
};

export default LanguageSwitcher;