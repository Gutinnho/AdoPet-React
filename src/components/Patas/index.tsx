import styles from './Patas.module.scss';

import {ReactComponent as PatasSvg} from 'assets/Patas.svg';

function Patas(){
	return(
		<div className={styles.patas}>
			<PatasSvg 
				className={styles.patas__svg}
			/>
		</div>
	);
}

export default Patas;