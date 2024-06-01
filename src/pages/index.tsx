import AboutMe from '@/components/aboutMe';
import Carousel, {CarouselList} from '@/components/carousel';
import Center from '@/components/center';
import Code from '@/components/code';
import Me from '@/components/home/me';
import Main from '@/components/main';
import Nav from '@/components/nav';
import Skills, {SoftSkills} from '@/components/skills';
import Head from 'next/head';
import React, {useMemo} from 'react';

export default function Home() {
	const list = useMemo<CarouselList>(() => {
		return [
			{component: Me, iconUrl: '/home-fill-svgrepo-com.svg'},
			{component: AboutMe, iconUrl: '/people-nearby-svgrepo-com.svg'},
			{component: Skills, iconUrl: '/science-svgrepo-com.svg'},
			{component: SoftSkills, iconUrl: '/skills-svgrepo-com.svg'},
			// {component: SoftSkills, iconUrl: '/briefcase-svgrepo-com.svg'},
		];
	}, []);

	return (
		<>
			<Head>
				<title>Фадин Владимир</title>
				<meta name="description" content="Frontend Developer"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Main>
				<Carousel list={list}/>
			</Main>
		</>
	);
}
