import styles from './_Registration.module.scss';

import Description from 'components/Description';
import Logo from 'components/Logo';
import Form from 'components/Form'
import FormContent from 'components/Form/FormContent';
import classNames from 'classnames';

function Registration(){
	return(
		<div className={classNames({
			[styles.registration]: true,
			[styles.wrapper]: true
		})}>
			<Logo
				color='blue'
				variation='b'
			/>

			<div className={styles.registration__description}>
				<Description
					title={false}
					textColor='blue'
					lhV_a='2.1'
					lhV_b='2.6'
					p2='Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:'
				/>
			</div>

			<Form
				variant='a'
				buttonText='Cadastrar'
				buttonType='submit'
				buttonVariant='b'
			>
				<FormContent
					variant='a'
					textLabel='Email'
					id='input-email'
					inputPlaceHolder='Escolha seu melhor e-mail'
					inputType='email'
					required
				/>

				<FormContent
					variant='a'
					textLabel='Nome'
					id='input-name'
					inputPlaceHolder='Digite o seu nome completo'
					inputType='text'
					required
				/>

				<FormContent
					variant='a'
					textLabel='Senha'
					id='input-password'
					inputPlaceHolder='Crie uma senha'
					inputType='password'
					required
				/>

				<FormContent
					variant='a'
					textLabel='Confirma sua senha'
					id='input-repassword'
					inputPlaceHolder='Repita a senha criada acima'
					inputType='password'
					required
				/>
			</Form>
		</div>
	);
}

export default Registration;