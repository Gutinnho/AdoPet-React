import Description from "components/Description";
import Form from "components/Form";
import FormContent from "components/Form/FormContent";
import Forma from "components/Forma";

import styles from './Contact.module.scss';

function Contact(){
	return(
		<section className={styles.contact}>
			<div className={styles.contact__description}>
				<Description 
					lhV_a="2"
					lhV_b="2.6"
					textColor="blue"
					p2="Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:"
				/>
			</div>

			<Form
				variant='b'
				buttonText='Enviar'
				buttonType='submit'
				buttonVariant='c'
			>
				<FormContent 
					variant="b"
					textLabel="Nome"		
					id="input-name"
					inputPlaceHolder="Insira seu nome completo"
					inputType="text"
					required
				/>

				<FormContent 
					variant="b"
					textLabel="Telefone"		
					id="input-tel"
					inputPlaceHolder="Insira seu telefone e/ou whatsapp"
					inputType="tel"
					required
				/>

				<FormContent 
					variant="b"
					textLabel="Nome do Pet"		
					id="input-pet"
					inputPlaceHolder="Por qual pet você se interessou?"
					inputType="text"
					required
				/>

				<FormContent 
					variant="b"
					textLabel="Mensagem"		
					id="input-mensage"
					inputPlaceHolder="Escreva sua mensagem"
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

export default Contact;