import styles from './Footer.module.scss';

function Footer(){
	return(
		<footer className={styles.footer}>
			<p>2022 - Desenvolvido por <a href="https://github.com/Gutinnho/AdoPet-React">Gustavo Lunardi</a></p>
		</footer>
	);
}

export default Footer;