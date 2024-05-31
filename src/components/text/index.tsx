import React, {useMemo} from 'react';
import styles from './styles.module.sass';
import cn from 'classnames';

interface TextProps {
	text: string;
	as?: 'h1' | 'description';
	styledAs?: 'border';
}

const Text: React.FC<TextProps> = (props) => {
	props = {as: 'description', ...props};
	const {text, as, styledAs} = props;

	const className = useMemo(() => {
		return cn(
			styles['text'],
			styles[`_${as!}`],
			styledAs && styles[`_${styledAs}`],
		);
	}, [as])

	return (
		<div className={className}>
			{text}
		</div>
	);
};

export default Text;