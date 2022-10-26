import styles from './Login.module.scss'
import classNames from "classnames";
import Logo from "components/Logo";
import Description from 'components/Description';
import Form from 'components/Form';
import FormContent from 'components/Form/FormContent';

function Login(){
	return(
		<div className={classNames({
			[styles.login]: true,
			[styles.wrapper]: true
		})}>
			<Logo 
				color="blue"
				variation="a"
			/>

			<Description 
				lhV_a='2.1'
				lhV_b='2.1'
				textColor='blue'
				p2='Já tem conta? Faça seu login:'
				title={false}
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
		</div>
	)
}

export default Login;