import styles from './Button.module.scss';
import classNames from 'classnames';

interface Props{
	buttonText: string,
	buttonType?: "button" | "submit" | "reset" | undefined,
	buttonVariant: string
}

function Button({buttonText, buttonType, buttonVariant} : Props){
	return(
		<button className={
			classNames({
				[styles.button]: true,
				[styles.variant__a]: buttonVariant === 'a',
				[styles.variant__b]: buttonVariant === 'b',
				[styles.variant__c]: buttonVariant === 'c'
		})}
			type={buttonType}
		>
			{buttonText}
		</button>
	);
}

export default Button;