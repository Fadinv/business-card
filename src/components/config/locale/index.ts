export type LangT = 'eng' | 'rus';

export interface Locale {
	me: {
		name: string;
		jobTitle: string;
	};
	about: {
		title: string;
	};
	softSkills: {
		title: string;
	};
	skills: {
		title: string;
	};
}