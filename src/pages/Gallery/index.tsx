import Description from "components/Description";
import Cards from "./Cards";
import styles from './Gallery.module.scss';

function Gallery(){
	return(
		<section className={styles.gallery}>
			<div className={styles.gallery__description}>
				<Description
					lhV_a='2'
					lhV_b='2'
					textColor='blue'
					p2='Olá! Veja os amigos disponíveis para adoção!'
					title={false}
				/>
			</div>

			<Cards />
		</section>
	);
}

export default Gallery;