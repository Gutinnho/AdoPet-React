import styles from './Button.module.scss';
import classNames from 'classnames';

interface Props{
	text: string,
	variant: string
}

function Button({text, variant} : Props){
	return(
		<button className={
			classNames({
				[styles.button]: true,
				[styles.variant__a]: variant === 'a',
				[styles.variant__b]: variant === 'b',
				[styles.variant__c]: variant === 'c',
			})}>
			{text}
		</button>
	);
}

export default Button;