import { Link } from 'react-router-dom';

import caoEGato from 'assets/CaoEGato.png';
import styles from './Home.module.scss';
import Description from 'components/Description';
import Button from 'components/Button';
import Logo from 'components/Logo';

function Home(){	
	return(
		<section className={styles.home}>
			<Logo
				color='white'
			/>

			<div className={styles.home__description}>
	
				<Description
					title={true}
					titleText={'Boas-vindas!'}
					textColor='white'
					lhVariantion={'a'} 
					p1='Adotar pode mudar uma vida'
					p2='Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!'
				/>
				
			</div>

			<div className={styles.home__buttons}>
				<Link to='/login' className={styles.home__link}>
					<Button 
						text='Já tenho conta'
						variant='a'
					/>
				</Link>

				<Link to='/registration' className={styles.home__link}>
					<Button 
						text='Quero me cadastrar'
						variant='a'
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