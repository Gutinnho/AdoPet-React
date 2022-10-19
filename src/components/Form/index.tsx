import classNames from 'classnames';
import styles from './Form.module.scss';

import Button from 'components/Button';

interface Props{
	children: JSX.Element[],
	variant: "a" | "b",
	buttonText: string,
	buttonType: "button" | "submit" | "reset" | undefined,
	buttonVariant: string
}

function Form({children, variant, buttonText, buttonType, buttonVariant}: Props){
	return(
		<form className={classNames({
			[styles.form]: true,
			[styles['form__variantA']]: variant === 'a',
			[styles['form__variantB']]: variant === 'b' 
		})}>
			<div className={styles.form__container}>
				{children}
			</div>

			<Button
				buttonText={buttonText}
				buttonType={buttonType}
				buttonVariant={buttonVariant}
			/>
		</form>
	);
}

export default Form;