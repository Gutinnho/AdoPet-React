import styles from './Logo.module.scss';
import {ReactComponent as LogoAdoPet} from 'assets/Logo.svg';
import classNames from 'classnames';

interface Props{
	color: string,
	headerLogo?: boolean
}

function Logo({color, headerLogo} : Props){
	return(
		<LogoAdoPet 
			className={classNames({
				[styles.color__blue]: color === 'blue',
				[styles.color__white]: color === 'white',
				[styles.header__logo]: headerLogo === true
			})} 
		/>
	);
}

export default Logo;