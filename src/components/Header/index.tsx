import { Link } from 'react-router-dom';
import {House, EnvelopeSimple, UserCircle} from 'phosphor-react';
import {ReactComponent as Logo} from 'assets/Logo.svg';
import {ReactComponent as Forma} from 'assets/FormaNTop.svg';

import styles from './Header.module.scss';

interface Props{
	perfil: boolean;
}

function Header({ perfil } : Props){
	return(
		<header className={styles.header}>
			<div className={styles.header__forma}>
				<Forma className={styles['header__forma-svg']}/>
			</div>

			<div className={styles.header__container}>
				<div className={styles.header__content}>
					<Logo className={styles['header__content-logo']} />

					<Link className={styles['header__content-link']} to='/'>
						<House size={23} color='white'/>
					</Link>

					<Link className={styles['header__content-link']} to='/contact'>
						<EnvelopeSimple size={23} color='white'/>
					</Link>
				</div>
				
				{(perfil === true) ? (
					<div className={styles.header__perfil}>
               	<Link className={styles['header__perfil-icon']} to='/profile'>
							<UserCircle size={50} color='#36D6AD' weight='thin'/>
						</Link>
            	</div>
				) : (
					<></>
				)}
				</div>
   	</header>
	);
}

export default Header;