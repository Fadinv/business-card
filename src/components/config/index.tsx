import React, {PropsWithChildren, useContext, useState} from 'react';

export const defaultContext = {
	me: {
		aboutMeCaption: 'Обо мне',
		aboutMeText: 'Я - фронтенд-разработчик с большим опытом в создании полезных функций, которые приносят пользу людям. Моя цель - продолжать развиваться и создавать продукты, которые будут радовать пользователей.',
		// exp: [
		// 	{
		// 		count: '4',
		// 		text: 'Года в разработке',
		// 	},
		// 	{
		// 		count: '2',
		// 		text: 'Года опыта менторства',
		// 	},
		// ],
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
	const config = useContext(ConfigContext);
	return config;
};

export default ConfigProvider;