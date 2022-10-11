import styles from './Title.module.scss';

interface Props{
	titleText?: string
}

function Title({titleText}: Props){
	return(
		<h2 className={styles.title}>
			{titleText}
		</h2>
	);
}

export default Title;