import {useDebounceValue} from '@/hooks/useDebounceValue';
import React, {CSSProperties, useEffect, useMemo} from 'react';
import styles from './styles.module.sass';
import cn from 'classnames';

interface TextProps {
	text: string;
	as?: 'h1' | 'description';
	styledAs?: 'border';
	useMargin?: boolean;
	textAlign?: CSSProperties['textAlign'];
	animationDelay?: number;
	hasAnimation?: boolean;
	inView?: boolean;
}

const Text: React.FC<TextProps> = (props) => {
	props = {as: 'description', ...props};
	const {
		text,
		as,
		styledAs,
		useMargin,
		inView,
		animationDelay,
		hasAnimation,
		textAlign,
	} = props;

	const delay = useMemo(() => animationDelay ?? 500, [animationDelay]);
	const doAnimate = useDebounceValue(inView, delay, inView === false);

	if (text === 'Fadin Vladimir') console.log('doAnimate', doAnimate);
	const className = useMemo(() => {
		return cn(
			styles['text'],
			styles[`_${as!}`],
			{
				[styles[`_${styledAs}`]]: styledAs,
				[styles[`_use-margin`]]: useMargin,
				[styles[`_has-animation`]]: hasAnimation,
				[styles[`_do-animate`]]: doAnimate,
			},
		);
	}, [as, useMargin, hasAnimation, doAnimate]);

	return (
		<div className={className} style={{textAlign: textAlign}}>
			{text}
		</div>
	);
};

export default Text;