import styles from './Patas.module.scss';

import PatasP from 'assets/Patas-P.png';
import PatasM from 'assets/Patas-M.png';
import PatasG from 'assets/Patas-G.png';

function Patas(){
	return(
		<div className={styles.patas}>
			<img 
				src={PatasP} 
				alt="" 
				className={styles.patas__P} 
			/>
			<img
				src={PatasM}
				alt=""
				className={styles.patas__M}
			/>
			<img
				src={PatasG}
				alt=""
				className={styles.patas__G}
			/>
		</div>
	);
}

export default Patas;