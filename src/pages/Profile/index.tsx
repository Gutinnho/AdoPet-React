import styles from './Profile.module.scss';

import Description from "components/Description";
import Form from "components/Form";
import FormContent from "components/Form/FormContent";
import classNames from 'classnames';
import Forma from 'components/Forma';

function Profile(){
	return(
		<section className={classNames({
			[styles.profile]: true,
			[styles.wrapper]: true
		})}>
			<div className={styles.profile__description}>
				<Description
					lhV_a="2"
					lhV_b="2.6"
					textColor="blue"
					p2="Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem."
				/>
			</div>

			<Form
				variant="b"
				buttonText="Salvar"
				buttonType="submit"
				buttonVariant="c"
			>
				<label className={styles.profile__formTitle}>
					Perfil
				</label>

				<FormContent
					variant='b'
					textLabel='Foto'
					id='input-photo'
					inputPlaceHolder='Insira sua imagem de perfil'
					inputType='file'
					required={false}
				/>

				<FormContent 
					variant="b"
					textLabel="Nome"		
					id="input-name"
					inputPlaceHolder="Seu nome completo"
					inputType="text"
					required
				/>

				<FormContent 
					variant="b"
					textLabel="Telefone"		
					id="input-telefone"
					inputPlaceHolder="Seu telefone com DDD"
					inputType="tel"
					required
				/>

				<FormContent 
					variant="b"
					textLabel="Cidade"		
					id="input-city"
					inputPlaceHolder="Sua cidade"
					inputType="text"
					required
				/>

				<FormContent 
					variant="b"
					textLabel="Sobre"		
					id="input-sobre"
					inputPlaceHolder="Conte um pouco sobre você"
					inputType="textArea"
					required
				/>
			</Form>

			<Forma
				variation='d'
			/>
		</section>
	);
}

export default Profile;