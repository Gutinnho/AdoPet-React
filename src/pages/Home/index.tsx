import { Link } from 'react-router-dom';
import classNames from 'classnames';

import caoEGato from 'assets/CaoEGato.png';
import Description from 'components/Description';
import Button from 'components/Button';
import Logo from 'components/Logo';

import styles from './Home.module.scss';
import general from 'styles/_global.module.scss';
import Forma from 'components/Forma';


function Home(){	
	return(
		<section className={classNames({
			[styles.home]: true,
			[general.gridA]: true
		})}>

			<Logo
				color='blue'
				variation='a'
			/>

			<div className={styles.home__description}>
	
				<h2 className={styles['home__description-title']}>
					Boas Vindas!
				</h2>

				<Description
					textColor='blue'
					lhV_a='2.4'
					lhV_b='2.6' 
					p1='Adotar pode mudar uma vida'
					p2='Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!'
				/>
				
			</div>

			<div className={styles.home__buttons}>
				<Link to='/login' className={styles.home__link}>
					<Button 
						buttonText='Já tenho conta'
						buttonVariant='a'
						/>
				</Link>

				<Link to='/registration' className={styles.home__link}>
					<Button 
						buttonText='Quero me cadastrar'
						buttonVariant='a'
					/>
				</Link>
			</div>

			<div className={styles.home__image}>

				<img className={styles['home__image-img']}
					src={caoEGato}
					alt=''
					/>

			</div>

			<Forma
				variation='a'
			/>
		</section>
	);
}

export default Home;