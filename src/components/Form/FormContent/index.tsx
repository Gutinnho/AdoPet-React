import classNames from 'classnames';
import styles from './FormContent.module.scss';
import { Eye, EyeSlash } from 'phosphor-react';
import { useState } from 'react'

interface Props{
	variant: 'a' | 'b',
	textLabel: string,
	id: string,
	inputPlaceHolder: string,
	inputType: string,
	required: boolean
}

function FormContent({variant, textLabel, id, inputPlaceHolder, inputType, required}: Props){
	const [reveal, setReveal] = useState(false)
	const passwordReveal = () => {
		setReveal(!reveal);
	}

	return(
		<div className={classNames({
			[styles.formContent]: true,
			[styles.formContent__variantA]: variant === 'a',
			[styles.formContent__variantB]: variant === 'b'
		})}>
			<label
				className={styles.formContent__label}
				htmlFor={id}
			>
				{textLabel}
			</label>

			<div className={styles.formContent__input}>
				{
					(inputType === 'text' || inputType === 'email' || inputType === 'tel') ? (
						<input
							placeholder={inputPlaceHolder}
							type={inputType}
							required={required}
							autoComplete='on'
						>
							
						</input>
					) : <></>
				}

				{
					(inputType === "password") ? ( 
						<input
							placeholder={inputPlaceHolder}
							type={
							(inputType === 'password' ? (reveal ? 'text' : 'password'):(inputType))
						}
						autoComplete='off'
						required={required}
						/>
					) : <></>
				}

				{
					(inputType === 'password')?(
						<span 
							className="formContent__passwordReveal"
							onClick={passwordReveal}
						>
							{	
								(reveal) ? (
									<Eye size={18} weight={'thin'} />
								) : (
									<EyeSlash size={18} weight={'thin'} />
								)
							}
						</span>
					):(
						<></>
					)
				}

				{
					(inputType === 'textArea') ? (
						<textarea  
							id={id}
							placeholder={inputPlaceHolder} 
							cols={30} 
							rows={5}
							required 
							spellCheck
							maxLength={500}
							minLength={50}
                     wrap="soft" 
						></textarea>
					) : <></>
				}
			</div>
		</div>
	);
}

export default FormContent;