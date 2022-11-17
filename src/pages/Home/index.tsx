import { Link } from 'react-router-dom';

import caoEGato from 'assets/CaoEGato.png';
import Description from 'components/Description';
import Button from 'components/Button';
import Logo from 'components/Logo';

import styles from './Home.module.scss';
import Forma from 'components/Forma';

function Home(){
	return(
		<section className={styles.home}>
			
			<div className={styles.home__content}>
				<Logo
					color='blue'
					variation='a'
				/>

				<div className={styles['home__content-description']}>
		
					<h2 className={styles['home__content-description--title']}>
						Boas Vindas!
					</h2>

					<Description
						textColor='blue'
						lhV_a='2.4'
						lhV_b='2.6' 
						p1='Adotar pode mudar uma vida.'
						p2='Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!'
					/>
					
				</div>

				<div className={styles['home__content-buttons']}>
					<Link to='/login' className={styles['home__content-link']}>
						<Button 
							buttonText='Já tenho conta'
							buttonVariant='a'
							/>
					</Link>

					<Link to='/registration' className={styles['home__content-link']}>
						<Button 
							buttonText='Quero me cadastrar'
							buttonVariant='a'
						/>
					</Link>
				</div>
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