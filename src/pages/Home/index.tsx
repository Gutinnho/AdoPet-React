import { Link } from 'react-router-dom';
import classNames from 'classnames';

import caoEGato from 'assets/CaoEGato.png';
import styles from './_Home.module.scss';
import Description from 'components/Description';
import Button from 'components/Button';
import Logo from 'components/Logo';


function Home(){	
	return(
		<section className={classNames({
			[styles.home]: true,
			[styles.wrapper]: true
		})}>	
			<Logo
				color='blue'
				variation='a'
			/>

			<div className={styles.home__description}>
	
				<Description
					title={true}
					titleText={'Boas-vindas!'}
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
		</section>
	);
}

export default Home;