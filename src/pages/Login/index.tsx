import Logo from "components/Logo";
import Description from 'components/Description';
import Form from 'components/Form';
import FormContent from 'components/Form/FormContent';

import styles from './Login.module.scss'
import Forma from "components/Forma";

function Login(){
	return(
		<div className={styles.login}>
			<Logo 
				color="blue"
				variation="a"
			/>

			<Description 
				lhV_a='2.1'
				lhV_b='2.1'
				textColor='blue'
				p2='Já tem conta? Faça seu login:'
			/>

			<Form
				variant='a'
				buttonText='Entrar'
				buttonType='submit'
				buttonVariant='b'
			>
				<FormContent
					variant='a'
					textLabel='Email'
					id='input-email'
					inputPlaceHolder='Insira seu e-mail'
					inputType='email'
					required
				/>

				<FormContent
					variant='a'
					textLabel='Senha'
					id='input-senha'
					inputPlaceHolder='Insira sua senha'
					inputType='password'
					required
				/>
			</Form>

			<Forma
				variation='b'
			/>
		</div>
	)
}

export default Login;