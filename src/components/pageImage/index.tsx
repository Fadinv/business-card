import React from 'react';
import Image from 'next/image';
import styles from './styles.module.sass';

interface PageImageProps extends React.ComponentProps<typeof Image> {
}

const PageImage: React.FC<PageImageProps> = ({...props}) => {
	return (

		<div
			className={styles['page-image']}
		>
			<Image
				{...props}
				objectFit={'cover'}
				layout={'fill'}
			/>
		</div>
	);
};

export default PageImage;