import classNames from 'classnames';

import styles from './Footer.module.scss';
import global from 'styles/_global.module.scss';

function Footer(){
	return(
		<footer className={classNames({
			[styles.footer]: true,
			[global.gridC]: true
		})}>
			<p>2022 - Desenvolvido por <a href="https://github.com/Gutinnho/AdoPet-React">Gustavo Lunardi</a></p>
		</footer>
	);
}

export default Footer;