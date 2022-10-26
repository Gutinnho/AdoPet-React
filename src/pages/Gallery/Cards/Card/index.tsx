import { ChatDots } from "phosphor-react";
import { Link } from "react-router-dom";
import { Pets } from "Types/animais";
import styles from './Card.module.scss';

function Card(props: Pets){
	const {
		name,
		age,
		size,
		behavior,
		city,
		state,
		photo
	} = props;

	return(
		<li className={styles.card}>
			<img src={photo} alt={`Foto do ${name}`} />

			<div className={styles.card__information}>
				<div className={styles['card__information-a']}>
					<h3>
						{name}
					</h3>

					<p>
						{age}
					</p>

					<p>
						{size}
					</p>

					<p>
						{behavior}
					</p>
				</div>

				<div className={styles['card__information-b']}>
					<p>
						{city} ({state})
					</p>

					<Link 
						to='/contact'
						className={styles['card__information-b-link']}
					>
						<ChatDots
							size={18}
							weight={'light'}
						/>
						Falar com o responsável
					</Link>
				</div>
			</div>
		</li>
	);
}

export default Card;