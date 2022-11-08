import classNames from 'classnames';
import styles from './FormContent.module.scss';
import { Eye, EyeSlash, UserCircle } from 'phosphor-react';
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

			{
				(inputType === 'text' || inputType === 'email' || inputType === 'tel') ? (
					<div>
						<input
							className={classNames({
								[styles['formContent__variantA-inputPadrao']]: variant === 'a',
								[styles['formContent__variantB-inputPadrao']]: variant === 'b'
							})}
							id={id}
							placeholder={inputPlaceHolder}
							type={inputType}
							required={required}
							autoComplete='on'
						/>
					</div>
				) : <></>
			}

			{
				(inputType === 'file') ? (
					<div className={styles['formContent__variantB-profilePhoto']}>
						<UserCircle size={100} weight='thin' color='#36D6AD' from={'inputImg'}>
						</UserCircle>

						<input
							id='inputImg'
							className={styles.inputImg}
							placeholder={inputPlaceHolder}
							type={inputType}
							required={required}
							accept='.png, .jpg, .jpeg'
						/>
						<label htmlFor='inputImg'>
							Clique para mudar
						</label>
						
					</div>
				) : <></>
			}

			{
				(inputType === "password") ? (
					<div>
						<input
							id={id}
							placeholder={inputPlaceHolder}
							type={
							(inputType === 'password' ? (reveal ? 'text' : 'password'):(inputType))
						}
						autoComplete='off'
						required={required}
						/>
						<span
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
					</div>
				) : <></>
			}

			{
				(inputType === 'textArea') ? (
					<div>
						<textarea
							className={styles['formContent__variantB-textArea']}
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
					</div>
				) : <></>
			}
		</div>
	);
}

export default FormContent;