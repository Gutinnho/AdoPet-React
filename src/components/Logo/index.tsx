import styles from './Logo.module.scss';
import {ReactComponent as LogoAdoPet} from 'assets/Logo.svg';
import classNames from 'classnames';

interface Props{
	color: string,
	variation: 'a' | 'b' | 'header',
}

function Logo({color, variation} : Props){
	return(
		<LogoAdoPet 
			className={classNames({
				[styles.color__blue]: color === 'blue',
				[styles.color__white]: color === 'white',
				[styles.variationA]: variation === 'a',
				[styles.variationB]: variation === 'b',
				[styles.header__logo]: variation === 'header'
			})} 
		/>
	);
}

export default Logo;